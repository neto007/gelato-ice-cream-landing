import React from 'react';
import { StrawberryCone, ChocolateCone, VanillaCone } from './IceCreamIllustrations';

// Constantes para melhor organização
const ANIMATION_DELAYS = {
  title: '0.2s',
  subtitle: '0.4s',
  deliveryInfo: '0.5s',
  buttons: '0.6s',
  strawberry: '0s',
  chocolate: '0.2s',
  vanilla: '0.4s'
};

const DELIVERY_INFO = [
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    text: "20-30 minutos"
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    text: "Toda a cidade"
  },
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    text: "Frete grátis acima de R$ 100"
  }
];

const NAVIGATION_BUTTONS = [
  { href: "#picoles", text: "Picolés", bgColor: "bg-primary", textColor: "text-on-primary", hoverColor: "hover:bg-primary/90" },
  { href: "#potes", text: "Potes", bgColor: "bg-secondary", textColor: "text-on-secondary", hoverColor: "hover:bg-secondary/90" },
  { href: "#milkshakes", text: "Milk Shakes", bgColor: "bg-tertiary", textColor: "text-on-tertiary", hoverColor: "hover:bg-tertiary/90" },
  { href: "#tortas", text: "Tortas", bgColor: "bg-primary-container", textColor: "text-on-primary-container", hoverColor: "hover:bg-primary-container/90" }
];

// Componente para o fundo decorativo
const BackgroundDecoration: React.FC = () => (
  <div className="absolute top-0 left-0 w-full h-full opacity-50">
    <svg width="100%" height="100%" viewBox="0 0 1440 560" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-236 560C-236 560 211.5 540.5 488.5 423C765.5 305.5 628 83 912 24.5C1196 -34 1440 5.5 1440 5.5V560H-236Z" fill="#FCD0E4"/>
    </svg>
  </div>
);

// Componente para informações de entrega
const DeliveryInfoItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-surface-variant/50 rounded-full px-4 py-2">
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
    </svg>
    <span className="text-on-surface font-semibold">{text}</span>
  </div>
);

// Componente para botões de navegação
const NavigationButton: React.FC<{
  href: string;
  text: string;
  bgColor: string;
  textColor: string;
  hoverColor: string;
}> = ({ href, text, bgColor, textColor, hoverColor }) => (
  <a 
    href={href} 
    className={`${bgColor} ${textColor} ${hoverColor} font-bold text-lg py-3 px-6 rounded-full transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg transform hover:-translate-y-1`}
  >
    {text}
  </a>
);

// Componente para um picolé individual
const IceCreamCone: React.FC<{
  Component: React.ComponentType<{ className: string }>;
  position: string;
  zIndex: string;
  height: string;
  rotation: string;
  animationDelay: string;
}> = ({ Component, position, zIndex, height, rotation, animationDelay }) => (
  <div 
    className={`${zIndex} hover:z-30 transform transition-transform duration-500 hover:scale-110 hover:-translate-y-4 flex-1 flex justify-center items-end`}
    style={{ animationDelay }}
  >
    <Component className={`${height} transform ${rotation} transition-all duration-700 hover:scale-110 animate-bounce-slow`} />
  </div>
);

// Componente principal do Hero
const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-24 bg-surface overflow-hidden">
      <BackgroundDecoration />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Seção de conteúdo textual */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Título principal */}
            <h1 
              className="text-5xl md:text-7xl font-bold text-secondary drop-shadow-sm leading-tight opacity-0 animate-fade-in-up" 
              style={{ animationDelay: ANIMATION_DELAYS.title }}
            >
              GELIKE<br/>Sorveteria
            </h1>
            
            {/* Subtítulo */}
            <p 
              className="text-on-surface mt-6 text-xl md:text-2xl max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in-up" 
              style={{ animationDelay: ANIMATION_DELAYS.subtitle }}
            >
              Picolés, Potes de Massas, Milk Shakes e Tortas de Sorvete. Sabores únicos para todos os momentos!
            </p>
            
            {/* Informações de entrega */}
            <div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up" 
              style={{ animationDelay: ANIMATION_DELAYS.deliveryInfo }}
            >
              {DELIVERY_INFO.map((info, index) => (
                <DeliveryInfoItem key={index} icon={info.icon} text={info.text} />
              ))}
            </div>
            
            {/* Botões de navegação */}
            <div 
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up" 
              style={{ animationDelay: ANIMATION_DELAYS.buttons }}
            >
              {NAVIGATION_BUTTONS.map((button, index) => (
                <NavigationButton key={index} {...button} />
              ))}
            </div>
          </div>
          
          {/* Seção dos picolés */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative flex justify-between items-end h-[18rem] md:h-[28rem] px-4">
              <IceCreamCone
                Component={StrawberryCone}
                position=""
                zIndex="z-10"
                height="h-[16rem] md:h-[28rem]"
                rotation="-rotate-12"
                animationDelay={ANIMATION_DELAYS.strawberry}
              />
              <IceCreamCone
                Component={ChocolateCone}
                position=""
                zIndex="z-20"
                height="h-[16rem] md:h-[28rem]"
                rotation="rotate-6"
                animationDelay={ANIMATION_DELAYS.chocolate}
              />
              <IceCreamCone
                Component={VanillaCone}
                position=""
                zIndex="z-10"
                height="h-[16rem] md:h-[28rem]"
                rotation="rotate-12"
                animationDelay={ANIMATION_DELAYS.vanilla}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;