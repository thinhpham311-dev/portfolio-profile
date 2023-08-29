import {useRef, useState} from "react"
import {Input, InputArea} from "../../components/Input"
import {Button} from "../../components/Button"
import {BsSendFill} from "react-icons/bs"

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

const Contact = () => {
  const inputRef = useRef()

  const handleSubmit = (e) => {
      e.preventDefault()
  }

  return <div className="h-full w-full flex items-center justify-center relative"> 
        <div className="xl:w-[30%] w-[90%] rounded-lg bg-[rgba(65,47,123,0.15)] h-full p-10">
        <motion.h2 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-center mb-1">Contact</motion.h2>
        <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="text-white/60 text-center mb-5">Thank you for giving me your information</motion.p>
      <motion.form onSubmit={handleSubmit} variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit="hidden">
        <div className="mb-5">
          <Input type="text" label="Fullname" name="fullname"/>
        </div>
        <div className="mb-5">
          <Input type="email" label="Email" name="email"/>
        </div>
        <div className="mb-5" >
          <InputArea label="Note" name="note"/>
        </div>
        <div className="mb-5 float-right">
         <Button type="submit">  Send <BsSendFill className="ml-2"/></Button>
        </div>
      </motion.form>
      </div>
  </div>;
};

export default Contact;
