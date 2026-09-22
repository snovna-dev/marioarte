const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export function getCloudinaryUrl(
  publicId: string,
  width?: number
): string {
  const transformations = width
    ? `f_auto,q_auto,w_${width},c_limit`
    : "f_auto,q_auto";

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
}