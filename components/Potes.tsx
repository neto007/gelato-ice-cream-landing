import React from 'react';
import { useCart } from '../contexts/CartContext';
import { POTES } from '../constants';
import { Flavor } from '../types';

interface PoteCardProps {
  pote: Flavor;
}

const PoteCard: React.FC<PoteCardProps> = ({ pote }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(pote);
  };

  return (
    <div className="bg-surface-variant/50 rounded-3xl p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img 
        src={pote.imageUrl} 
        alt={pote.name} 
        className="hover:animate-pulse transition-all duration-500 hover:scale-105"
        style={{
          filter: 'drop-shadow(0 0 0 transparent)',
          transition: 'all 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))';
          e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
          e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
        }}
      />
      <h3 className="text-2xl font-bold text-secondary">{pote.name}</h3>
      <p className="text-on-surface-variant mt-2 text-md mb-3">{pote.description}</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <span className="text-3xl font-bold text-primary">R$ {pote.price.toFixed(2)}</span>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleAddToCart}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

const Potes: React.FC = () => {
  return (
    <section id="potes" className="py-20 bg-surface-variant/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
            Potes de Massas
          </h2>
          <p className="text-on-surface text-xl md:text-2xl max-w-3xl mx-auto">
            Sorvetes cremosos em potes de 500ml para você saborear em casa com a família.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {POTES.map((pote) => (
            <PoteCard key={pote.id} pote={pote} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Potes;