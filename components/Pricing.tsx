import React from 'react';
import { PRICING_PACKAGES } from '../constants';
import { PricingPackage } from '../types';

const PricingCard: React.FC<{ plan: PricingPackage }> = ({ plan }) => (
  <div className={`rounded-4xl p-8 flex flex-col ${plan.bgColor} ${plan.textColor}`}>
    <h3 className="text-3xl font-bold">{plan.name}</h3>
    <p className="text-5xl font-bold my-4">{plan.price}</p>
    <ul className="space-y-2 text-lg flex-grow">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <svg className="h-6 w-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a href="#contact" className={`mt-8 block w-full text-center font-bold text-lg py-4 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 ${plan.buttonColor} ${plan.buttonTextColor}`}>
      Encomendar Torta
    </a>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">Tamanhos de Tortas</h2>
          <p className="text-xl text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Do individual ao familiar - temos o tamanho perfeito para cada ocasião.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map(plan => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;