import { useState } from "react"
import { Input, InputArea } from "../../components/Input"
import { Button } from "../../components/Button"
import { BsSendFill } from "react-icons/bs"

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

import { sendContactForm, validate } from "../../utils"
import Message from "../../components/Message"


const initialFields = {
  fullname: "",
  subject: "",
  email: "",
  note: ""
}

const Contact = () => {
  const [setting, setSetting] = useState({ loading: false, error: "", status: "" })
  const [inputFields, setInputFields] = useState(initialFields)
  const [validates, setValidates] = useState([])

  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setInputFields({ ...inputFields, [name]: value })
    setValidates({...validates, [name]: ""})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validateErrors = validate(inputFields);
    if (Object.keys(validateErrors).length > 0) {
      setValidates(validateErrors)
      return;
    } 
      try {
        setSetting({ loading: true, status: "success", error: "Send to successfully" })
        await sendContactForm(inputFields)
      } catch (error) {
        setSetting({ loading: false, status: "error", error: error.message })
      } finally {
        setTimeout(() => {
          setSetting({ loading: false, status: "", error: "" })
        }, 1000)
      }
  }

  const { loading, error, status } = setting

  return <div className="h-full w-full flex items-center justify-center relative">
    <div className="xl:w-[30%] w-[90%] rounded-lg bg-[rgba(65,47,123,0.15)] h-full px-10 py-3">
      <motion.h2 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-center mb-1">Contact</motion.h2>
      <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="text-white/60 text-center mb-5">Thank you for giving me your information</motion.p>
      {error && error !== "" ? <Message msgStatus={`bg-${status}`}>{error}</Message> : <></>}
      <motion.form onSubmit={handleSubmit} variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit="hidden">
        <div className="mb-7 relative">
          <Input type="text" label="Fullname*" value={inputFields.fullname} placeholder="Enter Fullname" inputChangeHandler={inputChangeHandler} name="fullname" />
          {validates && <p className="text-sm text-accent absolute left-0 -bottom-5">{validates.fullname}</p>}
        </div>
        <div className="mb-7 relative">
          <Input type="text" label="Subject*" value={inputFields.subject} placeholder="Enter Subject" inputChangeHandler={inputChangeHandler} name="subject" />
          {validates && <p className="text-sm text-accent absolute left-0 -bottom-5">{validates.subject}</p>}
        </div>
        <div className="mb-7 relative">
          <Input type="text" label="Email*" value={inputFields.email} placeholder="Enter Email" inputChangeHandler={inputChangeHandler} name="email" />
          {validates && <p className="text-sm text-accent absolute left-0 -bottom-5">{validates.email}</p>}
        </div>
        <div className="mb-7" >
          <InputArea label="Note" value={inputFields.note} placeholder="Enter Note" inputChangeHandler={inputChangeHandler} name="note" />
        </div>
        <div className="mb-7 w-full">
          <Button type="submit" isDisabled={loading} isLoading={loading} styles="w-full text-white bg-accent hover:text-white hover:bg-accent/50 py-2 px-3">  Send <BsSendFill className="ml-2" /></Button>
        </div>
      </motion.form>
    </div>
  </div>;
};

export default Contact;
