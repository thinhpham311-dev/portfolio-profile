import React from 'react';

export const Button = ({type, children}) => {
    return (
        <button type={type} className="bg-white text-accent px-3 py-2 flex  items-center hover:text-white hover:bg-accent transition-all duration-300">{children}</button>
    );
}