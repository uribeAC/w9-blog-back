import { PostDataDto, PostStructureDto } from "../dto/types.js";

export const huevosRotosBruc159PostData: PostDataDto = {
  title: "Huevos Rotos: el mejor plato de Bruc, 159",
  content: `Los huevos rotos son una joya sencilla pero poderosa de la gastronomía española. En Bruc, 159, llevan este plato clásico a otro nivel. El plato se presenta con una cama de patatas fritas doradas, crujientes por fuera y tiernas por dentro, coronadas con huevos fritos de yema vibrante. Al romper los huevos sobre las patatas, se crea una mezcla cremosa y sabrosa que es pura felicidad. Puedes acompañarlos con jamón ibérico, chistorra o incluso trufa, según el antojo. El ambiente del lugar es acogedor, con una atención cercana que hace que cada visita sea especial. Ideal tanto para un almuerzo informal como para una cena relajada. Un plato imprescindible si quieres saborear lo mejor de la cocina tradicional española con un toque casero y auténtico.`,
  imageUrl: "http://huevosrotos.webp",
  imageAlt: "Plato de papatas fritas con dos huevos fritos por encima",
  author: "Mario Vaquerizo",
  smallImageUrl: "http://huevosrotos.webp",
  detailImageUrl: "http://huevosrotos.webp",
  publishDate: "",
  tags: "",
};

export const tortillaBetanzosPostData: PostDataDto = {
  title: "Tortilla de Betanzos: plato estrella en Casa Pepe",
  content: `La tortilla de Betanzos es todo un emblema de la cocina gallega, y en Casa Pepe saben rendirle homenaje. Con su textura jugosa y su interior casi líquido, esta tortilla celebra la pureza de los ingredientes: patatas de calidad, huevos fresquísimos y un toque justo de sal. Sin cebolla, como dicta la tradición, y con ese característico color dorado que invita a probarla de inmediato. El local respira tradición y sencillez, haciendo que cada visita sea como una escapada al corazón de Galicia. Un plato sencillo pero lleno de matices, perfecto para quienes buscan autenticidad en cada bocado.`,
  imageUrl: "http://tortillabetanzos.webp",
  imageAlt: "Tortilla de patata jugosa servida en un plato blanco",
  author: "Cristina Pardo",
  smallImageUrl: "http://tortillabetanzos.webp",
  detailImageUrl: "http://tortillabetanzos.webp",
  publishDate: "",
  tags: "",
};

export const paellaMariscosPostData: PostDataDto = {
  title: "Paella de Mariscos: disfruta de la mejor paella en El Palmar",
  content: `La paella de mariscos de El Palmar es una auténtica celebración del Mediterráneo. Preparada en una paellera tradicional sobre fuego de leña, esta paella deslumbra por su arroz suelto impregnado de un sabroso caldo de mariscos. Gambas, mejillones, calamares y cigalas coronan el plato, aportando frescura y una explosión de sabores marinos. Cada grano de arroz refleja el esmero y la pasión por la cocina valenciana. El restaurante, rodeado de naturaleza y cercano a la Albufera, ofrece el escenario perfecto para disfrutar de este clásico en su máxima expresión. Una experiencia gastronómica inolvidable.`,
  imageUrl: "http://paellamariscos.webp",
  imageAlt: "",
  author: "Albert Adrià",
  publishDate: "",
  tags: "Paella",
  smallImageUrl: "",
  detailImageUrl: "",
};

export const postsDataDixtures = [
  huevosRotosBruc159PostData,
  tortillaBetanzosPostData,
];

export const luffyBentoPostDto: PostStructureDto = {
  _id: "680d4b3e7a949d9fe3199b37",
  author: "Sanji el Cocinero Galante",
  content:
    "Del East Blue a tu cocina: aprende a preparar el famoso bentō que Luffy ama. ¡Ideal para llevar al trabajo o picnic!",
  imageAlt: "Bentō de One Piece",
  imageUrl: "https://example.com/onepiece-bento.jpg",
  publishDate: "2025-04-21",
  tags: ["onepiece", "bento", "animefood"],
  title: "Bentō pirata: la receta favorita de Luffy 🏴‍☠️",
  smallImageUrl: "",
  detailImageUrl: "",
};
