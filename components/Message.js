import React from 'react';
import {Button} from './Button'
import {AiOutlineClose} from "react-icons/ai"

const Message = (props) => {

    return (
        <div className={`border-2 p-5 xl:w-[30%] w-[70%] fixed top-[50px] left-1/2 -translate-x-1/2 rounded-lg ${props.msgStatus} z-50 flex justify-between items-center`}>
            {props.children}
        </div>
    );
}

export default Message
