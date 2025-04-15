import maintenanceImage from "../../public/maintenance-support.jpg";
import software from "../../public/software.jpg";
import ui from "../../public/ui-ux.jpg";
import web from "../../public/web-design.jpg";
import girl from "../../public/girl1.webp";
import girl2 from "../../public/girl2.webp";
import man from "../../public/man.webp";
import { ServiceType } from "../Types";

export const Services: ServiceType[] = [
  {
    id: 1,
    title: "Website Design & Development",
    category: "Web Design",
    description:
      "Create stunning and high-performing websites to engage your audience.",
    price: "Starting at Rp 1.000.000",
    image: web,
  },
  {
    id: 2,
    title: "Custom Software Development",
    category: "Development",
    description:
      "We build scalable and reliable software tailored to your business needs.",
    price: "Starting at Rp 5.000.000",
    image: software,
  },
  {
    id: 3,
    title: "UI/UX Design Services",
    category: "Design",
    description:
      "We craft user-friendly interfaces that deliver seamless experiences.",
    price: "Starting at Rp. 500.000",
    image: ui,
  },
  {
    id: 4,
    title: "System Maintenance & Support",
    category: "Support",
    description:
      "Ongoing technical support and maintenance to ensure everything runs smoothly.",
    price: "Custom Pricing",
    image: maintenanceImage,
  },
];

export const Testimonials = [
  {
    name: "Putra",
    image: man,
    rating: 4,
    feedback:
      "Smartcode truly exceeded our expectations! Their team was professional, fast, and built us a sleek website that performs beautifully.",
  },
  {
    name: "John Doe",
    image: girl,
    rating: 4,
    feedback:
      "We had a custom system built with Smartcode and everything turned out great! Highly recommended for tech-savvy businesses.",
  },
  {
    name: "Putri",
    image: girl2,
    rating: 4,
    feedback:
      "Reliable, professional, and great attention to detail. Smartcode is the partner every business needs for their digital transformation.",
  },
];
