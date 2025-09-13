import React from 'react';
import { useCart } from '../contexts/CartContext';
import { MILKSHAKES } from '../constants';
import { Flavor } from '../types';

interface MilkShakeCardProps {
  milkshake: Flavor;
}

const MilkShakeCard: React.FC<MilkShakeCardProps> = ({ milkshake }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(milkshake);
  };

  return (
    <div className="bg-surface-variant/50 rounded-3xl p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src={milkshake.imageUrl} alt={milkshake.name} className="w-48 rounded-2xl shadow-md mb-4 border-4 border-white" />
      <h3 className="text-2xl font-bold text-secondary">{milkshake.name}</h3>
      <p className="text-on-surface-variant mt-2 text-md mb-3">{milkshake.description}</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <span className="text-3xl font-bold text-primary">R$ {milkshake.price.toFixed(2)}</span>
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

const MilkShakes: React.FC = () => {
  return (
    <section id="milkshakes" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
            Milk Shakes
          </h2>
          <p className="text-on-surface text-xl md:text-2xl max-w-3xl mx-auto">
            Milk shakes cremosos e irresistíveis, perfeitos para refrescar o seu dia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MILKSHAKES.map((milkshake) => (
            <MilkShakeCard key={milkshake.id} milkshake={milkshake} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilkShakes;