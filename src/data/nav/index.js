import { novedadesMenu } from "./novedades";
import { hombreMenu } from "./hombre";
import { mujerMenu } from "./mujer";
import { ninioMenu } from "./ninio";
import { deporteMenu } from "./deporte";
import { ofertaMenu } from "./oferta";

export const topBar = [
  "Buscar una tienda",
  "Ayuda",
  "Únete a nosotros",
  "Inicia sesión",
];

export const topBarAyuda = {
  Ayuda: [
    "Estado del pedido",
    "Envío y entrega",
    "Devoluciones",
    "Guía de tallas",
    "Contacta con nosotros",
    "Políticas de privacidad",
    "Condiciones de ventas",
    "Términos de uso",
    "Envíanos tus comentarios",
  ],
};

export const menu = [
  "Novedades",
  "Hombre",
  "Mujer",
  "Niño/a",
  "Deportes",
  "Ofertas",
];

export const menuCompleto = {
  Novedades: novedadesMenu,
  Hombre: hombreMenu,
  Mujer: mujerMenu,
  "Niño/a": ninioMenu,
  Deportes: deporteMenu,
  Ofertas: ofertaMenu,
};

export const menuMobile = [
  {
    title: "Ayuda",
    icon: 
  },
  {
    title: "Cesta",
    icon:
  },
  {
    title: "Pedidos",
    icon: 
  },
  {
    title: "Buscar una tienda",
    icon:
  },
]