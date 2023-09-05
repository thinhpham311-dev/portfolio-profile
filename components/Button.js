import React from 'react';
import {VscLoading} from "react-icons/vsc"

export const Button = (props) => {
    return (
        <button disabled={props.isDisabled} type={props.type} className={`${props.styles} flex justify-center items-center transition-all duration-300`}>
          {props.isLoading && <VscLoading className="animate-spin mr-3"/>}
        {props.children}
        </button>
    );
}