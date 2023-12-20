import "../styles/globals.css";

//components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

//routers
import { useRouter } from "next/router";

//framer motion
import { AnimatePresence, motion } from "framer-motion";

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <ChakraProvider>
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </ChakraProvider>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
