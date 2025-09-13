import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import Checkout from './Checkout';

const CartSidebar: React.FC = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={toggleCart}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-96 bg-surface shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-outline">
            <h2 className="text-2xl font-bold text-secondary">Seu Carrinho</h2>
            <button 
              onClick={toggleCart}
              className="text-on-surface hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🍦</div>
                <p className="text-on-surface-variant text-lg">Seu carrinho está vazio</p>
                <p className="text-on-surface-variant text-sm mt-2">Adicione alguns sabores deliciosos!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-surface-variant/30 rounded-2xl p-4">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary">{item.name}</h3>
                      <p className="text-primary font-bold">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold hover:bg-primary/30 transition-colors"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold min-w-[2rem] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold hover:bg-primary/30 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors ml-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-outline p-6 space-y-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-secondary">Total:</span>
                <span className="text-primary">R$ {totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full bg-primary text-on-primary font-bold py-4 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  Finalizar Pedido
                </button>
                <button 
                  onClick={clearCart}
                  className="w-full bg-transparent border-2 border-outline text-on-surface font-bold py-3 px-6 rounded-full hover:bg-surface-variant/50 transition-all duration-300"
                >
                  Limpar Carrinho
                </button>
              </div>
              
              <div className="text-center text-sm text-on-surface-variant">
                🚚 Entrega grátis acima de R$ 50,00
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Checkout Modal */}
      <Checkout 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </>
  );
};

export default CartSidebar;