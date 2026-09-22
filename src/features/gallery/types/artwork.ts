export type ArtworkCategory =
  | "portrait"
  | "illustration"
  | "landscape"
  | "other";
  
export interface Artwork {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ArtworkCategory;
  technique: string;
  year: number;
  featured: boolean;
  publicId: string;
  alt: string;
}