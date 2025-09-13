import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://picsum.photos/id/102/600/600",
    "https://picsum.photos/id/103/600/600",
    "https://picsum.photos/id/104/600/600",
    "https://picsum.photos/id/106/600/600",
    "https://picsum.photos/id/107/600/600",
    "https://picsum.photos/id/108/600/600"
  ];

  return (
    <section id="gallery" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">#GELIKE</h2>
          <p className="text-xl text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Veja os momentos doces que nossos clientes compartilharam.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;