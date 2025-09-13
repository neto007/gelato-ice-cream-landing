import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  paymentMethod: 'credit' | 'debit' | 'pix' | 'cash';
}

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    neighborhood: '',
    city: 'São Paulo',
    zipCode: '',
    paymentMethod: 'pix'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular processamento do pedido
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setOrderComplete(true);
    setIsSubmitting(false);
    clearCart();
    
    // Fechar checkout após 3 segundos
    setTimeout(() => {
      setOrderComplete(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  if (orderComplete) {
    return (
      <>
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface rounded-3xl p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-secondary mb-4">Pedido Confirmado!</h2>
            <p className="text-on-surface-variant mb-4">
              Seu pedido foi recebido e será entregue em 20-30 minutos.
            </p>
            <p className="text-primary font-bold text-xl">
              Total: R$ {totalPrice.toFixed(2)}
            </p>
            <div className="mt-6 text-sm text-on-surface-variant">
              Você receberá atualizações por WhatsApp
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Checkout Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-surface rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-outline">
            <h2 className="text-2xl font-bold text-secondary">Finalizar Pedido</h2>
            <button 
              onClick={onClose}
              className="text-on-surface hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Resumo do Pedido */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Resumo do Pedido</h3>
              <div className="bg-surface-variant/30 rounded-2xl p-4 space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="text-on-surface">{item.quantity}x {item.name}</span>
                    <span className="font-semibold text-primary">R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-outline pt-3 flex justify-between items-center text-lg font-bold">
                  <span className="text-secondary">Total:</span>
                  <span className="text-primary">R$ {totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Dados Pessoais */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-secondary mb-4">Dados Pessoais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-xl border border-outline bg-surface-variant/20 focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-xl border border-outline bg-surface-variant/20 focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone/WhatsApp"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-xl border border-outline bg-surface-variant/20 focus:border-primary focus:outline-none transition-colors md:col-span-2"
                />
              </div>
            </div>

            {/* Endereço de Entrega */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-secondary mb-4">Endereço de Entrega</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Rua, número e complemento"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-xl border border-outline bg-surface-variant/20 focus:border-primary focus:outline-none transition-colors md:col-span-2"
                />
                <input
                  type="text"
                  name="neighborhood"
                  placeholder="Bairro"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-xl border border-outline bg-surface-variant/20 focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="CEP"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-xl border border-outline bg-surface-variant/20 focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-xl border border-outline bg-surface-variant/20 focus:border-primary focus:outline-none transition-colors md:col-span-2"
                />
              </div>
            </div>

            {/* Forma de Pagamento */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Forma de Pagamento</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'pix', label: 'PIX', icon: '💳' },
                  { value: 'credit', label: 'Crédito', icon: '💳' },
                  { value: 'debit', label: 'Débito', icon: '💳' },
                  { value: 'cash', label: 'Dinheiro', icon: '💵' }
                ].map((method) => (
                  <label key={method.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={formData.paymentMethod === method.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-xl border-2 text-center transition-all ${
                      formData.paymentMethod === method.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-outline bg-surface-variant/20 text-on-surface'
                    }`}>
                      <div className="text-2xl mb-1">{method.icon}</div>
                      <div className="font-semibold text-sm">{method.label}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Botões */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-transparent border-2 border-outline text-on-surface font-bold py-4 px-6 rounded-full hover:bg-surface-variant/50 transition-all duration-300"
              >
                Voltar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-on-primary font-bold py-4 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processando...' : 'Confirmar Pedido'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;