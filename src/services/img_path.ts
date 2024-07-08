import no_image from '../assets/no-image-placeholder.webp'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


export const getImage = (img_path: string) => {
    if(!img_path) return no_image
  return `${IMAGE_BASE_URL}${img_path}`
}
