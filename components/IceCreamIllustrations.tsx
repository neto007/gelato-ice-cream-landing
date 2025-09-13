import React from 'react';

export const StrawberryCone: React.FC<{className?: string}> = ({className}) => (
    <div className={className}>
        <img 
            src="/assets/main/uva.svg" 
            alt="Picolé de uva" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
        />
    </div>
);

export const ChocolateCone: React.FC<{className?: string}> = ({className}) => (
    <div className={className}>
        <img 
            src="/assets/main/Flocos.svg" 
            alt="Picolé de Flocos" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
        />
    </div>
);

export const VanillaCone: React.FC<{className?: string}> = ({className}) => (
    <div className={className}>
        <img 
            src="/assets/main/chocolate.svg" 
            alt="Picolé de Baunilha" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
        />
    </div>
);
