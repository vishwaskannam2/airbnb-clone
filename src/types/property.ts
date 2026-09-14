export type PropertyImage = {
  id: string | number;
  src: string;
  alt: string;
  room?: string;
};

export type Property = {
  title: string;
  location: string;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  host: string;
  hostYears: number;
  price: number;
  images: PropertyImage[];
};
