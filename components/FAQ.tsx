import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { FAQItem } from '../types';

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-outline">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="text-xl font-medium text-on-surface">{item.question}</h3>
        <svg
          className={`h-6 w-6 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-on-surface-variant pb-6 pr-6">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">Perguntas Frequentes</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;