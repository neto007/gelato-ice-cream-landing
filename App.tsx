import React from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Picoles from './components/Picoles';
import Potes from './components/Potes';
import MilkShakes from './components/MilkShakes';
import Flavors from './components/Flavors';
import SpecialOffer from './components/SpecialOffer';
import About from './components/About';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-on-background">
        <Header />
        <main>
          <Hero />
          <Picoles />
          <Potes />
          <MilkShakes />
          <Flavors />
          <SpecialOffer />
          <About />
          <Pricing />
          <Gallery />
          <FAQ />
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
};

export default App;