
import { create } from "zustand";

interface SearchState {
  searchQuery: string | null;
  setSearchQuery: (query: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  searchQuery: null,
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));

export default useSearchStore;
