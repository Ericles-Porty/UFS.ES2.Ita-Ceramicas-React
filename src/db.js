import pisoFiloBege from "./img/pisos/piso-filo-bege.webp";
import pisoFiloBranco from "./img/pisos/piso-filo-branco.webp";
import pisoFiloGamma from "./img/pisos/piso-filo-gamma.webp";
import pisoFiloGreicce from "./img/pisos/piso-filo-greicce.webp";
import pisoMarmoreAtlantico from "./img/pisos/piso-marmore-atlantico.webp";
import pisoMarmoreCharleston from "./img/pisos/piso-marmore-charleston.webp";
import pisoMarmoreMichelangelo from "./img/pisos/piso-marmore-michelangelo.webp";
import pisoMarmoreMontBlancCaramel from "./img/pisos/piso-marmore-mont-blanc-caramel.webp";

const categories = [
  {
    title: "Pisos Filos",
    products: [
      {
        to: "/piso/filo/bege",
        imgSrc: pisoFiloBege,
        preco: "199.99",
        title: "Bege",
        id: 1,
        idModel: 'PFBE2407',
      },
      {
        to: "/piso/filo/branco",
        imgSrc: pisoFiloBranco,
        preco: "199.99",
        title: "Branco",
        id: 2,
        idModel: 'PFBR2407',
      },
      {
        to: "/piso/filo/gamma",
        imgSrc: pisoFiloGamma,
        preco: "199.99",
        title: "Gamma",
        id: 3,
        idModel: 'PFGA2407',
      },
      {
        to: "/piso/filo/greicce",
        imgSrc: pisoFiloGreicce,
        preco: "199.99",
        title: "Greicce",
        id: 4,
        idModel: 'PFGR2407',
      },
    ],
  },
  {
    title: "Pisos Mármore",
    products: [
      {
        to: "/piso/marmore/atlantico",
        imgSrc: pisoMarmoreAtlantico,
        preco: "199.99",
        title: "Atlântico",
        id: 5,
        idModel: 'PMA2407',
      },
      {
        to: "/piso/marmore/charleston",
        imgSrc: pisoMarmoreCharleston,
        preco: "199.99",
        title: "Charleston",
        id: 6,
        idModel: 'PMC2407',
      },
      {
        to: "/piso/marmore/michelangelo",
        imgSrc: pisoMarmoreMichelangelo,
        preco: "199.99",
        title: "Michelangelo",
        id: 7,
        idModel: 'PMMI2407',
      },
      {
        to: "/piso/marmore/mont-blanc-caramel",
        imgSrc: pisoMarmoreMontBlancCaramel,
        preco: "199.99",
        title: "Mont Blanc Caramel",
        id: 8,
        idModel: 'PMMO2407',
      },
    ],
  },
];

export default categories;
