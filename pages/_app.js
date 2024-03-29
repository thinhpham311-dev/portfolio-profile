import '../styles/globals.css';
import Layout from "./../components/Layout"
import Transition from "./../components/Transition"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <Layout>
    <AnimatePresence mode="wait">
      <motion.div key={router.route} className="flex-1">
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>
}

export default MyApp;
