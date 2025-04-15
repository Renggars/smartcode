import { StaticImageData } from "next/image";

export interface ServiceType {
  id: number;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string | StaticImageData;
}
