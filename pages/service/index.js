import Circles from "../../components/Circles"
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider"


const Services = () => {
  return <div className="h-full xl:py-36 relative flex items-center">
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
          <h2 className="h2">My services <span className="text-accent">.</span></h2>
          <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="w-full xl:w-[calc(100%-30vw)] p-5">
          <ServiceSlider/>
        </div>
      </div>
    </div>
    <Bulb/>
  </div>;
};

export default Services;
