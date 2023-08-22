import Image from 'next/image'

const Avatar = ({_w, _h, source}) => {
  return <Image src={source} width={_w} height={_h} alt="" className="translate-z-0"/>;
};

export default Avatar;
