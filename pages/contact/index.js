import {Input, InputArea} from "../../components/Input"
import {Button} from "../../components/Button"
import {RiSendPlaneFill} from "react-icons/ri"

const Contact = () => {
  return <div className="h-full w-full flex items-center justify-center"> 
      <form className="xl:w-[35%] w-[90%] rounded-lg bg-[rgba(65,47,123,0.15)] h-full p-12">
        <h2 className="h2 text-center mb-10">Contact</h2>
        <div className="mb-5">
          <Input type="text" label="Fullname" name="fullname"/>
        </div>
        <div className="mb-5">
          <Input type="text" label="Email" name="email"/>
        </div>
        <div className="mb-5" >
          <InputArea label="Note" name="note"/>
        </div>
        <div className="mb-5">
         <Button type="submit"><RiSendPlaneFill/></Button>
        </div>
      </form>
  </div>;
};

export default Contact;
