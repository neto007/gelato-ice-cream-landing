import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/1025/800/600" 
              alt="Beautiful ice cream cakes display" 
              className="rounded-4xl shadow-xl w-full transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">Especialistas em Tortas</h2>
            <p className="text-lg text-on-surface-variant mt-6 leading-relaxed">
              A GELIKE se especializou na arte de criar tortas de sorvete artesanais que transformam qualquer ocasião em uma celebração especial. Combinamos camadas cremosas de sorvete premium com bases crocantes e coberturas irresistíveis, criando sobremesas que são verdadeiras obras de arte.
            </p>
            <p className="text-lg text-on-surface-variant mt-4 leading-relaxed">
              Cada torta é feita sob encomenda com ingredientes selecionados e muito carinho!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;