import Image from "next/image"

const Circles = () => {
  return <div className="w-[200px] xl:w-[300px] absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-0">
    <Image src="/circles.png" height={200} width={260} alt="" className="w-full h-full" />
  </div>;
};

export default Circles;
