
export interface Flavor {
  name: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  price: number;
  id: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (flavor: Flavor, quantity: number) => void;
  addToCart: (flavor: Flavor) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  toggleCart: () => void;
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  bgColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}