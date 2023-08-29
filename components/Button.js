import React from 'react';

export const Button = ({type}) => {
    return (
        <button type={type} className="bg-white text-accent px-3 py-2">Send</button>
    );
}