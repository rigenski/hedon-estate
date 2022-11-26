import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "@/styles/globals.css";
import "@/styles/components.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
