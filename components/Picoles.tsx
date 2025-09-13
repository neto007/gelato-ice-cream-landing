import React from 'react';
import { useCart } from '../contexts/CartContext';
import { PICOLES } from '../constants';
import { Flavor } from '../types';

interface PicoleCardProps {
  picole: Flavor;
}

const PicoleCard: React.FC<PicoleCardProps> = ({ picole }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(picole);
  };

  return (
    <div className="bg-surface-variant/50 rounded-3xl p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src={picole.imageUrl} alt={picole.name} className="hover:scale-125 transition-transform duration-300 ease-in-out" />
      <h3 className="text-2xl font-bold text-secondary">{picole.name}</h3>
      <p className="text-on-surface-variant mt-2 text-md mb-3">{picole.description}</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <span className="text-3xl font-bold text-primary">R$ {picole.price.toFixed(2)}</span>
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

const Picoles: React.FC = () => {
  return (
    <section id="picoles" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
            Picolés Artesanais
          </h2>
          <p className="text-on-surface text-xl md:text-2xl max-w-3xl mx-auto">
            Picolés cremosos e refrescantes, feitos com ingredientes selecionados para momentos especiais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PICOLES.map((picole) => (
            <PicoleCard key={picole.id} picole={picole} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Picoles;