
import { Flavor, PricingPackage, FAQItem } from './types';

// PICOLÉS (GELATO)
export const PICOLES: Flavor[] = [
  {
    id: "acerola-picole",
    name: "Picolé de Acerola",
    description: "Picolé refrescante de acerola com vitamina C natural.",
    imageUrl: "/assets/picoles/acerola.svg",
    bgColor: "bg-red-200",
    price: 8.99
  },
  {
    id: "blue-ice-picole",
    name: "Picolé Blue Ice",
    description: "Picolé refrescante sabor blue ice com cor azul vibrante.",
    imageUrl: "/assets/picoles/blue-ice.svg",
    bgColor: "bg-blue-200",
    price: 9.99
  },
  {
    id: "laranja-picole",
    name: "Picolé de Laranja",
    description: "Picolé cítrico de laranja com pedaços da fruta.",
    imageUrl: "/assets/picoles/laranja.svg",
    bgColor: "bg-orange-200",
    price: 8.99
  },
  {
    id: "limao-picole",
    name: "Picolé de Limão",
    description: "Picolé azedinho de limão siciliano super refrescante.",
    imageUrl: "/assets/picoles/limao.svg",
    bgColor: "bg-lime-200",
    price: 8.99
  },
  {
    id: "maracuja-picole",
    name: "Picolé de Maracujá",
    description: "Picolé tropical de maracujá com sementes crocantes.",
    imageUrl: "/assets/picoles/maracuja.svg",
    bgColor: "bg-yellow-200",
    price: 9.99
  },
  {
    id: "milho-verde-picole",
    name: "Picolé de Milho Verde",
    description: "Picolé cremoso de milho verde com sabor único e especial.",
    imageUrl: "/assets/picoles/Milho-verde.svg",
    bgColor: "bg-yellow-300",
    price: 10.99
  },
  {
    id: "morango-picole",
    name: "Picolé de Morango",
    description: "Picolé doce de morango com pedaços da fruta.",
    imageUrl: "/assets/picoles/morango.svg",
    bgColor: "bg-pink-200",
    price: 9.99
  },
  {
    id: "uva-picole",
    name: "Picolé de Uva",
    description: "Picolé doce de uva roxa com sabor intenso.",
    imageUrl: "/assets/picoles/uva.svg",
    bgColor: "bg-purple-200",
    price: 9.99
  }
];

// POTES DE MASSAS
export const POTES: Flavor[] = [
  {
    id: "diamante-negro-pot",
    name: "Pote Diamante Negro",
    description: "Sorvete premium de chocolate negro 70% cacau - 500ml.",
    imageUrl: "/assets/potes/Diamante-negro.svg",
    bgColor: "bg-gray-800/20",
    price: 26.99
  },
  {
    id: "leite-ninho-pot",
    name: "Pote Leite Ninho",
    description: "Sorvete cremoso sabor Leite Ninho com pedaços de biscoito - 500ml.",
    imageUrl: "/assets/potes/LeiteNinho.svg",
    bgColor: "bg-blue-100",
    price: 22.99
  },
  {
    id: "sonho-morango-pot",
    name: "Pote Sonho de Morango",
    description: "Sorvete de morango com pedaços da fruta e calda especial - 500ml.",
    imageUrl: "/assets/potes/SonhoDeMorango.svg",
    bgColor: "bg-pink-200",
    price: 21.99
  },
  {
    id: "abacaxi-pot",
    name: "Pote Abacaxi Tropical",
    description: "Sorvete refrescante de abacaxi com pedaços da fruta - 500ml.",
    imageUrl: "/assets/potes/abacaxi.svg",
    bgColor: "bg-yellow-200",
    price: 20.99
  },
  {
    id: "chocolate-belga-pot",
    name: "Pote Chocolate Belga",
    description: "Sorvete intenso de chocolate belga importado - 500ml.",
    imageUrl: "/assets/potes/chocolate-belga.svg",
    bgColor: "bg-yellow-800/20",
    price: 24.99
  },
  {
    id: "doce-leite-pot",
    name: "Pote Doce de Leite",
    description: "Sorvete cremoso de doce de leite argentino - 500ml.",
    imageUrl: "/assets/potes/doce-de-leite.svg",
    bgColor: "bg-amber-200",
    price: 23.99
  },
  {
    id: "maracuja-pot",
    name: "Pote Maracujá",
    description: "Sorvete azedinho de maracujá com sementes - 500ml.",
    imageUrl: "/assets/potes/maracuja.svg",
    bgColor: "bg-orange-200",
    price: 21.99
  },
  {
    id: "torta-alema-pot",
    name: "Pote Torta Alemã",
    description: "Sorvete sabor torta alemã com chocolate e cerejas - 500ml.",
    imageUrl: "/assets/potes/torta-alema.svg",
    bgColor: "bg-red-200",
    price: 25.99
  },
  {
    id: "uva-pot",
    name: "Pote Uva",
    description: "Sorvete de uva roxa com pedaços da fruta - 500ml.",
    imageUrl: "/assets/potes/uva.svg",
    bgColor: "bg-purple-200",
    price: 20.99
  },
  {
    id: "flocos-pot",
    name: "Pote Flocos",
    description: "Sorvete cremoso sabor flocos com cereais crocantes - 500ml.",
    imageUrl: "/assets/potes/Flocos.svg",
    bgColor: "bg-blue-200",
    price: 22.99
  },
  {
    id: "napolitano-pot",
    name: "Pote Napolitano",
    description: "Sorvete clássico três sabores: baunilha, chocolate e morango - 500ml.",
    imageUrl: "/assets/potes/napolitano.svg",
    bgColor: "bg-gradient-to-r from-yellow-200 via-yellow-800/20 to-pink-200",
    price: 24.99
  },
  {
    id: "trufado-pot",
    name: "Pote Trufado",
    description: "Sorvete premium com trufas de chocolate e avelã - 500ml.",
    imageUrl: "/assets/potes/trufado.svg",
    bgColor: "bg-amber-800/20",
    price: 27.99
  }
];

// MILK SHAKES
export const MILKSHAKES: Flavor[] = [
  {
    id: "chocolate-shake",
    name: "Milk Shake Chocolate",
    description: "Milk shake cremoso de chocolate com chantilly.",
    imageUrl: "https://picsum.photos/id/431/400/400",
    bgColor: "bg-yellow-800/20",
    price: 12.99
  },
  {
    id: "strawberry-shake",
    name: "Milk Shake Morango",
    description: "Milk shake de morango com pedaços da fruta.",
    imageUrl: "https://picsum.photos/id/1080/400/400",
    bgColor: "bg-pink-200",
    price: 12.99
  },
  {
    id: "vanilla-shake",
    name: "Milk Shake Baunilha",
    description: "Milk shake clássico de baunilha com calda de caramelo.",
    imageUrl: "https://picsum.photos/id/219/400/400",
    bgColor: "bg-yellow-100",
    price: 11.99
  },
  {
    id: "oreo-shake",
    name: "Milk Shake Oreo",
    description: "Milk shake de Oreo com biscoitos triturados.",
    imageUrl: "https://picsum.photos/id/43/400/400",
    bgColor: "bg-gray-200",
    price: 14.99
  }
];

// TORTAS DE SORVETE
export const TORTAS: Flavor[] = [
  {
    id: "trufa-cake",
    name: "Torta Trufa",
    description: "Torta de sorvete de trufa com chocolate belga e cobertura cremosa.",
    imageUrl: "/assets/tortas/Trufa.svg",
    bgColor: "bg-amber-800/20",
    price: 52.99
  },
  {
    id: "bombom-cake",
    name: "Torta Bombom",
    description: "Torta de sorvete sabor bombom com recheio de chocolate e avelã.",
    imageUrl: "/assets/tortas/bombom.svg",
    bgColor: "bg-yellow-800/20",
    price: 48.99
  },
  {
    id: "napolitano-cake",
    name: "Torta Napolitano",
    description: "Torta clássica três sabores: baunilha, chocolate e morango em camadas.",
    imageUrl: "/assets/tortas/napolitano.svg",
    bgColor: "bg-gradient-to-r from-yellow-200 via-yellow-800/20 to-pink-200",
    price: 45.99
  },
  {
    id: "abacaxi-cake",
    name: "Torta Abacaxi Tropical",
    description: "Torta refrescante de sorvete de abacaxi com pedaços da fruta.",
    imageUrl: "/assets/tortas/abacaxi.svg",
    bgColor: "bg-yellow-200",
    price: 46.99
  },
  {
    id: "chocolate-cake",
    name: "Torta Chocolate Premium",
    description: "Torta intensa de sorvete de chocolate com cobertura especial.",
    imageUrl: "/assets/tortas/chocolate.svg",
    bgColor: "bg-yellow-800/20",
    price: 49.99
  },
  {
    id: "flocos-cake",
    name: "Torta Flocos",
    description: "Torta cremosa de sorvete sabor flocos com cereais crocantes.",
    imageUrl: "/assets/tortas/flocos.svg",
    bgColor: "bg-blue-200",
    price: 47.99
  },
  {
    id: "floresta-negra-cake",
    name: "Torta Floresta Negra",
    description: "Torta sofisticada com sorvete de chocolate, cerejas e chantilly.",
    imageUrl: "/assets/tortas/floresta_negra.svg",
    bgColor: "bg-red-800/20",
    price: 54.99
  },
  {
    id: "maracuja-cake",
    name: "Torta Maracujá",
    description: "Torta tropical de sorvete de maracujá com sementes crocantes.",
    imageUrl: "/assets/tortas/maracuja.svg",
    bgColor: "bg-orange-200",
    price: 46.99
  }
];

// Para compatibilidade com código existente
export const FLAVORS = TORTAS;

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: "Fatia Individual",
    price: "R$ 8,99",
    features: ["1 Fatia Generosa", "Escolha do Sabor", "Cobertura Inclusa", "Serve 1 pessoa"],
    bgColor: "bg-primary-container",
    textColor: "text-on-primary-container",
    buttonColor: "bg-primary",
    buttonTextColor: "text-on-primary",
  },
  {
    name: "Torta Pequena",
    price: "R$ 89,99",
    features: ["Torta 15cm", "2 Sabores à Escolha", "Decoração Personalizada", "Serve 4-6 pessoas"],
    bgColor: "bg-secondary",
    textColor: "text-on-secondary",
    buttonColor: "bg-on-secondary",
    buttonTextColor: "text-secondary",
  },
  {
    name: "Torta Grande",
    price: "R$ 159,99",
    features: ["Torta 25cm", "3 Sabores à Escolha", "Decoração Premium", "Serve 10-12 pessoas"],
    bgColor: "bg-pink-100",
    textColor: "text-pink-900",
    buttonColor: "bg-pink-500",
    buttonTextColor: "text-white",
  },
];


export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Vocês fazem tortas sem lactose ou veganas?",
    answer: "Sim! Oferecemos tortas de sorvete veganas feitas com leite de coco e amêndoa. Consulte nossa seleção especial de tortas veganas.",
  },
  {
    question: "Com quanto tempo de antecedência devo encomendar?",
    answer: "Para tortas personalizadas, recomendamos pelo menos 48 horas de antecedência. Tortas do cardápio regular podem ser encomendadas com 24 horas.",
  },
  {
    question: "Vocês fazem entregas de tortas?",
    answer: "Sim! Entregamos tortas em toda a região metropolitana. Frete grátis para pedidos acima de R$ 100. Também oferecemos retirada na loja.",
  },
   {
    question: "Qual é a torta mais popular?",
    answer: "Nossa Torta Vulcão de Chocolate é absoluta campeã de vendas! A Torta Sonho de Morango também é muito procurada, especialmente no verão.",
  },
];