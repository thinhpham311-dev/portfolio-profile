import Social from './Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] xl:py-[10px] py-[20px]">
    <div className="container mx-auto xl:flex block xl:justify-between justify-center items-center ">
    <div className="logo font-bold">
    <h3 className="xl:text-[30px] text-center">Thinh Pham</h3>
    </div>
      <Social/>
    </div>
    </header>;
};

export default Header;
