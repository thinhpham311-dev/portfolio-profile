import Social from './Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto flex justify-between items-center">
    <div className="logo font-bold">
    <h3 className="text-[30px]">Thinh Pham</h3>
    </div>
      <Social/>
    </div>
    </header>;
};

export default Header;
