import React from 'react';

export const Input = ({type, label, name}) => {
    return (
        <div className="w-full">
            <label className="relative block">
            <input type={type} name={name} className="focus:border-accent peer/published px-4 text-lg focus:text-white transition-all duration-300  outline-none w-full h-[50px] bg-transparent border-opacity-50	border-white border-2 rounded-lg" />
            <span className="text-lg text-white  absolute left-0 top-1/2 -translate-y-1/2 mx-2 px-2 transition-all duration-300 peer-focus/published:transition-all peer-focus/published:duration-300 peer-focus/published:top-0 peer-focus/published:left-2 peer-focus/published:rounded-lg peer-focus/published:text-white peer-focus/published:bg-accent peer-focus/published:text-sm">{label}</span>
            </label>    
        </div>
    );
}

export const InputArea = ({label, name}) => {
    return (
        <div className="w-full">
            <label className="relative block">
            <textarea name={name} className="focus:border-accent peer/published px-4 py-3 text-lg focus:text-white transition-all duration-300  outline-none w-full h-[150px] bg-transparent border-opacity-50	border-white border-2 rounded-lg" ></textarea>
            <span className="text-lg text-white  absolute left-0 top-2 mx-2 px-2 transition-all duration-300 peer-focus/published:transition-all peer-focus/published:duration-300 peer-focus/published:-top-2 peer-focus/published:left-2 peer-focus/published:rounded-lg peer-focus/published:text-white peer-focus/published:bg-accent peer-focus/published:text-sm">{label}</span>
            </label>    
        </div>
    )
}
