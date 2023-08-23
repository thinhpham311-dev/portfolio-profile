import {Sora} from "@next/font/google"

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

import TopLeftImg from "./TopLeftImg"
import Nav from "./Nav"
import Header from "./Header"


const Layout = ({children}) => {
  return <div className={`page bg-site h-[100vh] text-white bg-cover bg-no-repeat ${sora.variable}`}>
    <div className=" bg-gradient-to-r from-primary/10 via-black/30 to-black/10 h-full">
    <TopLeftImg/>
    <Header/>
    {children}
    <Nav/>
    </div>
  </div>
};

export default Layout;
