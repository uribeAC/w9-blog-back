import { PostStructure } from "./types.js";

const sailorMoonCurryPanPost: PostStructure = {
  _id: "1",
  author: "Sailor Chef Luna",
  content:
    "¿Alguna vez te has preguntado cómo sería probar los deliciosos curry-pan que Usagi devora en Sailor Moon? Hoy te cuento cómo prepararlos en casa con ese toque mágico de la luna.",
  imageAlt: "Pan de curry inspirado en Sailor Moon",
  imageUrl: "https://example.com/sailor-curry-pan.jpg",
  publishDate: new Date("2025-04-23"),
  tags: ["sailormoon", "curry", "comidaanime"],
  title: "Curry-pan al estilo Sailor Moon 🌙",
};

const luffyBentoPost: PostStructure = {
  _id: "2",
  author: "Sanji el Cocinero Galante",
  content:
    "Del East Blue a tu cocina: aprende a preparar el famoso bentō que Luffy ama. ¡Ideal para llevar al trabajo o picnic!",
  imageAlt: "Bentō de One Piece",
  imageUrl: "https://example.com/onepiece-bento.jpg",
  publishDate: new Date("2025-04-21"),
  tags: ["onepiece", "bento", "animefood"],
  title: "Bentō pirata: la receta favorita de Luffy 🏴‍☠️",
};

const tanjiroUdonPost: PostStructure = {
  _id: "3",
  author: "Tanjiro Food Blogger",
  content:
    "Este udon es tan reconfortante como un abrazo de Nezuko. Te enseño a prepararlo igual que el que Tanjiro disfruta en su viaje.",
  imageAlt: "Udon de Kimetsu no Yaiba",
  imageUrl: "https://example.com/kimetsu-udon.jpg",
  publishDate: new Date("2025-04-19"),
  tags: ["demonslayer", "udon", "recetaAnime"],
  title: "Udon demoníacamente delicioso 🍜",
};

const howlDesayunoPost: PostStructure = {
  _id: "4",
  author: "Ghibli Gastronómico",
  content:
    "¿Viste el desayuno que hace Howl? Huevos, tocino y un sartén mágico. Aquí tienes la receta para empezar el día con energía (y un poco de fuego de Calcifer 🔥).",
  imageAlt: "Desayuno de Howl's Moving Castle",
  imageUrl: "https://example.com/howl-desayuno.jpg",
  publishDate: new Date("2025-04-15"),
  tags: ["ghibli", "desayuno", "howl"],
  title: "Desayuno de castillo encantado 🍳✨",
};

const ghibliRamenPost: PostStructure = {
  _id: "5",
  author: "Chihiro Chef en Prácticas",
  content:
    "¿Recuerdas ese tazón de ramen gigante en El Viaje de Chihiro? Hoy lo replicamos con ingredientes fáciles de encontrar y un toque de nostalgia.",
  imageAlt: "Ramen del mundo de Chihiro",
  imageUrl: "https://example.com/chihiro-ramen.jpg",
  publishDate: new Date("2025-04-12"),
  tags: ["ghibli", "ramen", "spiritaway"],
  title: "Ramen espiritual con sabor Ghibli 🍜👻",
};

const narutoRamenPost: PostStructure = {
  _id: "6",
  author: "Ichiraku Master",
  content:
    "Este es el ramen que mantuvo a Naruto con energía en cada batalla. Aprende a hacerlo en casa, con caldo profundo y mucho amor ninja.",
  imageAlt: "Ramen estilo Ichiraku",
  imageUrl: "https://example.com/naruto-ramen.jpg",
  publishDate: new Date("2025-04-10"),
  tags: ["naruto", "ramen", "ichiraku"],
  title: "Ramen ninja directo desde Ichiraku 🍥🥋",
};

const totoroBentoPost: PostStructure = {
  _id: "7",
  author: "Obento Creativo",
  content:
    "Transforma tu lunch box en una obra de arte con este bentō inspirado en Totoro. Ideal para niños o fans de Studio Ghibli.",
  imageAlt: "Bento inspirado en Totoro",
  imageUrl: "https://example.com/totoro-bento.jpg",
  publishDate: new Date("2025-04-08"),
  tags: ["totoro", "bento", "ghibli"],
  title: "Bentō con carita de Totoro 🐾🍱",
};

const shokugekiEggsPost: PostStructure = {
  _id: "8",
  author: "Sōma Yukihira",
  content:
    "¿Un desayuno simple? No si lo cocina Sōma. Prueba estos huevos revueltos con mantequilla y un toque secreto que hará que tu alma explote de sabor.",
  imageAlt: "Huevos revueltos estilo Shokugeki no Soma",
  imageUrl: "https://example.com/shokugeki-eggs.jpg",
  publishDate: new Date("2025-04-05"),
  tags: ["shokugeki", "eggs", "foodwars"],
  title: "Huevos que ganan competencias 🍳🔥",
};

const pokeballDonutsPost: PostStructure = {
  _id: "9",
  author: "Chef Brock",
  content:
    "¡No son pokebolas, son donuts! Aprende a preparar estos dulces inspirados en Pokémon. Dulces, suaves y perfectos para entrenadores golosos.",
  imageAlt: "Donas con forma de Pokébola",
  imageUrl: "https://example.com/pokemon-donuts.jpg",
  publishDate: new Date("2025-04-03"),
  tags: ["pokemon", "donuts", "dulces"],
  title: "Donuts pokebola para entrenadores 🍩⚡",
};

const bleachSushiPost: PostStructure = {
  _id: "10",
  author: "Soul Society Sushiman",
  content:
    "El sushi favorito de los Shinigamis. Aprende a preparar nigiris y makis que podrían servirse en el Seireitei.",
  imageAlt: "Sushi al estilo Bleach",
  imageUrl: "https://example.com/bleach-sushi.jpg",
  publishDate: new Date("2025-04-01"),
  tags: ["bleach", "sushi", "animefood"],
  title: "Sushi espiritual para Shinigamis 🍣🗡️",
};

const attackOnTitanMeatPost: PostStructure = {
  _id: "11",
  author: "Sasha la Comelotodo",
  content:
    "Carne asada al estilo de los Reconocimientos. Esta receta te dará fuerzas para escalar muros (o simplemente sobrevivir un lunes).",
  imageAlt: "Carne al estilo Attack on Titan",
  imageUrl: "https://example.com/aot-meat.jpg",
  publishDate: new Date("2025-03-29"),
  tags: ["attackontitan", "carne", "sasha"],
  title: "Carne para titanes hambrientos 🍖🛡️",
};

export const animeFoodPosts = [
  attackOnTitanMeatPost,
  bleachSushiPost,
  ghibliRamenPost,
  howlDesayunoPost,
  luffyBentoPost,
  narutoRamenPost,
  pokeballDonutsPost,
  sailorMoonCurryPanPost,
  shokugekiEggsPost,
  tanjiroUdonPost,
  totoroBentoPost,
];
