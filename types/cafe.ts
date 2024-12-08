export interface Cafe {
  id: string;
  name: string;
  city: string;
  address: string;
  description: string;
  imageUrl: string;
  features: string[];
  wifiSpeed: string;
  powerOutlets: string;
  noiseLevel: string;
  openingHours: {
    [key: string]: string;
  };
  rating: number;
}