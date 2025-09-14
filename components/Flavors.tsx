import React, { useState } from 'react';
import { TORTAS } from '../constants';
import { Flavor } from '../types';
import { useCart } from '../contexts/CartContext';

const FlavorCard: React.FC<{ flavor: Flavor }> = ({ flavor }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(flavor, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="bg-surface-variant/50 rounded-3xl p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src={flavor.imageUrl} alt={flavor.name} className="hover:scale-125 transition-transform duration-300 ease-in-out" />
      <h3 className="text-2xl font-bold text-secondary">{flavor.name}</h3>
      <p className="text-on-surface-variant mt-2 text-md mb-3">{flavor.description}</p>
      
      <div className="text-3xl font-bold text-primary mb-4">
        R$ {flavor.price.toFixed(2)}
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold hover:bg-primary/30 transition-colors"
        >
          -
        </button>
        <span className="text-xl font-semibold min-w-[2rem] text-center">{quantity}</span>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold hover:bg-primary/30 transition-colors"
        >
          +
        </button>
      </div>
      
      <button
        onClick={handleAddToCart}
        className="w-full bg-primary text-on-primary font-bold py-3 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

const Flavors: React.FC = () => {
  return (
    <section id="tortas" className="py-20 bg-surface-variant/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
            Tortas de Sorvete
          </h2>
          <p className="text-on-surface text-xl md:text-2xl max-w-3xl mx-auto">
            Tortas artesanais de sorvete para celebrar momentos especiais com sabores únicos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TORTAS.map((flavor) => (
            <FlavorCard key={flavor.id} flavor={flavor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;