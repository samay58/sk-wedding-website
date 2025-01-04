export interface CarouselImage {
  url: string;
  alt: string;
  title?: string;
  location?: string;
  description?: string;
}

export interface CarouselSlideProps {
  image: CarouselImage;
  isActive: boolean;
}