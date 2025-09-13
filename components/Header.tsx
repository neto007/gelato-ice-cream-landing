import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const IceCreamIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.39 16.73C17.34 16.65 12.63 8.84 12.63 8.84C12.47 8.58 12.24 8.45 12 8.45C11.76 8.45 11.53 8.58 11.37 8.84C11.37 8.84 6.66 16.65 6.61 16.73C6.22 17.39 6.66 18.22 7.41 18.22L16.59 18.22C17.34 18.22 17.78 17.39 17.39 16.73Z" />
        <path d="M12 3C10.13 3 8.42 4.04 7.5 5.5C8.77 6.44 10.32 7 12 7C13.68 7 15.23 6.44 16.5 5.5C15.58 4.04 13.87 3 12 3Z" />
        <path d="M6 6C4.34 6 3 7.34 3 9C3 10.34 3.83 11.44 5 11.82C5.55 13.63 6.96 15.11 8.75 15.8C8.5 14.5 8.75 13.06 9.61 11.79C9.79 11.56 10.23 11.52 10.45 11.74C11.13 12.43 11.5 13.43 11.5 14.5C11.5 15.33 11.23 16.11 10.78 16.75C11.12 16.9 11.51 17 12 17C12.49 17 12.88 16.9 13.22 16.75C12.77 16.11 12.5 15.33 12.5 14.5C12.5 13.43 12.87 12.43 13.55 11.74C13.77 11.52 14.21 11.56 14.39 11.79C15.25 13.06 15.5 14.5 15.25 15.8C17.04 15.11 18.45 13.63 19 11.82C20.17 11.44 21 10.34 21 9C21 7.34 19.66 6 18 6C16.89 6 15.93 6.58 15.41 7.45C14.55 7.17 13.58 7 12.5 7H11.5C10.42 7 9.45 7.17 8.59 7.45C8.07 6.58 7.11 6 6 6Z" />
    </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const navLinks = [
    { name: "Picolés", href: "#picoles" },
    { name: "Potes", href: "#potes" },
    { name: "Milk Shakes", href: "#milkshakes" },
    { name: "Tortas", href: "#tortas" },
    { name: "Sobre", href: "#sobre" },
    { name: "Preços", href: "#precos" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 h-24 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <IceCreamIcon className="h-10 w-10 text-primary" />
          <span className="text-3xl font-bold text-secondary tracking-wider">GELIKE</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-on-surface-variant font-medium text-lg hover:text-primary transition-colors duration-300 ease-in-out">
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleCart}
            className="relative bg-primary text-on-primary font-bold py-3 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5M17 18a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            Carrinho
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-on-secondary text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-on-surface focus:outline-none">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-surface-variant py-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant font-medium text-lg hover:text-primary transition-colors duration-300 ease-in-out">
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { toggleCart(); setIsMenuOpen(false); }}
              className="bg-primary text-on-primary font-bold py-3 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5M17 18a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              Carrinho ({totalItems})
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;