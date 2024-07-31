import no_image from '../assets/no-image-placeholder.webp';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export const getImageW500 = (img_path: string) => {
    if (!img_path) return no_image;
    return `${IMAGE_BASE_URL}w500${img_path}`;
};

export const getImageW300 = (img_path: string) => {
    if (!img_path) return no_image;
    return `${IMAGE_BASE_URL}w300${img_path}`;
};

export const getImageW200 = (img_path: string) => {
    if (!img_path) return no_image;
    return `${IMAGE_BASE_URL}w200${img_path}`;
};
