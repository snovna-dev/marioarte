export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const services: Service[] = [
  {
    id: "esculturas",
    title: "Esculturas",
    category: "Escultura",
    description:
      "Obras tridimensionales donde la figura humana y la expresión artística se convierten en el elemento principal.",
    image:
      "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/marioarte/esculturas.jpg",
  },
  {
    id: "retratos",
    title: "Retratos",
    category: "Carboncillo",
    description:
      "Retratos realizados con especial atención al detalle, expresión y personalidad de cada persona.",
    image:
      "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/marioarte/retratos.jpg",
  },
];