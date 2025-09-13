import React from 'react';

const SpecialOffer: React.FC = () => {
  return (
    <section id="special-offer" className="py-20 bg-primary-container">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-surface rounded-4xl p-8 md:p-12 shadow-lg">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">COBERTURA GRÁTIS!</h2>
            <p className="text-xl text-on-surface-variant mt-4">
              Nesta semana especial, ganhe uma cobertura premium gratuita em qualquer torta! Escolha entre chocolate, morango ou caramelo para deixar sua torta ainda mais irresistível.
            </p>
            <a href="#flavors" className="mt-8 inline-block bg-secondary text-on-secondary font-bold text-lg py-3 px-8 rounded-full hover:bg-secondary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Peça Sua Torta
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/assets/4c0adc12-b318-4831-b036-b00ee64d9b3f (1).svg" 
              alt="Delicious ice cream cake" 
              className="rounded-3xl shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
