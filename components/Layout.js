import {Sora} from "@next/font/google"

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

import TopLeftImg from "./TopLeftImg"
import Nav from "./Nav"
import Header from "./Header"
import Circles from './Circles';


const Layout = ({children}) => {
  return <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}`}>
    <div className="relative bg-gradient-to-r from-primary/10 via-black/30 to-black/10 h-full content-between flex flex-col">
    <TopLeftImg/>
    <Header/>
    {children}
    <Nav/>
    <Circles />
    </div>
  </div>
};

export default Layout;
