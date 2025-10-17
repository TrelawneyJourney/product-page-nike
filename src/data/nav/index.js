import { novedadesMenu } from "./novedades";
import { hombreMenu } from "./hombre";
import { mujerMenu } from "./mujer";
import { ninioMenu } from "./ninio";
import { deporteMenu } from "./deporte";
import { ofertaMenu } from "./oferta";
import { MdHelpOutline } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdStorefront } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";

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
    icon: MdHelpOutline,
  },
  {
    title: "Cesta",
    icon: RiShoppingBagLine,
  },
  {
    title: "Pedidos",
    icon: BsBoxSeam,
  },
  {
    title: "Buscar una tienda",
    icon: MdStorefront,
  },
];

export const menuFooter = [
  "Guías",
  "Términos de uso",
  "Aviso legal",
  "Política de privacidad y cookies",
  "Configuración de privacidad y cookies",
];
