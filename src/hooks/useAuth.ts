import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  WatchLater,
  addWatchLaterAuth,
  deleteUserAuth,
  deleteWatchLaterItemAuth,
  getUsernameById,
  getWatchLaterAuth,
  signInAuth,
  signOutAuth,
  signUpAuth,
  userIdAuth,
} from "../services/auth";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const userIdQuery = useQuery({
    queryKey: ["userId"],
    queryFn: userIdAuth,
  });

  const signUpMutation = useMutation({
    mutationFn: ({
      username,
      email,
      password,
    }: {
      username: string;
      email: string;
      password: string;
    }) => {
      return signUpAuth(username, email, password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userId"] });
      queryClient.invalidateQueries({ queryKey: ["username"] });
    },
  });

  const signInMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return signInAuth(email, password);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userId"] }),
  });

  const signOutMutation = useMutation({
    mutationFn: signOutAuth,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userId"] }),
  });

  const deleteUserMutation = useMutation({
    mutationFn: deleteUserAuth,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userId"] }),
  });

  const usernameQuery = useQuery({
    queryKey: ["username", userIdQuery.data],
    queryFn: () => getUsernameById(userIdQuery.data as string),
    enabled: !!userIdQuery.data,
  });

  const addWatchLaterMutation = useMutation({
    mutationFn: ({
      title,
      poster,
      overview,
      date,
      id,
      userId,
      dateAdded,
      type,
    }: {
      title: string;
      poster: string | null;
      overview: string;
      date: string;
      id: number;
      userId: string;
      dateAdded: number;
      type: string;
    }) => {
      return addWatchLaterAuth(
        title,
        poster,
        overview,
        date,
        id,
        userId,
        dateAdded,
        type
      );
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["watchlaterMovies", userIdQuery.data],
      }),
  });

  const deleteWatchLaterItemMutation = useMutation({
    mutationFn: ({ id, userId }: { id: number; userId: string }) => {
      return deleteWatchLaterItemAuth(id, userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlaterMovies", userIdQuery.data],
      });
    },
    onMutate: async ({ id, userId }) => {
      await queryClient.cancelQueries({
        queryKey: ["watchlaterMovies", userId],
      });
      const previousMovies = queryClient.getQueryData<WatchLater[]>([
        "watchlaterMovies",
        userId,
      ]);

      if (previousMovies) {
        queryClient.setQueryData<WatchLater[] | undefined>(
          ["watchlaterMovies", userId],
          (old) => old?.filter((w) => w.id !== id)
        );
      }
      return { previousMovies };
    },
  });

  const getWatchLaterQuery = useQuery({
    queryKey: ["watchlaterMovies", userIdQuery.data],
    queryFn: () => getWatchLaterAuth(userIdQuery.data as string),
    enabled: !!userIdQuery.data,
  });

  return {
    signUpMutation,
    signInMutation,
    signOutMutation,
    deleteUserMutation,
    userId: userIdQuery.data,
    username: usernameQuery.data,
    usernamesIsLoading: usernameQuery.isLoading,
    addWatchLaterMutation,
    watchLater: getWatchLaterQuery.data,
    watchLaterIsLoading: getWatchLaterQuery.isLoading,
    deleteWatchLaterItemMutation,
  };
};
