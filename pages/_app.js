import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";

// global style files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

// local style files
import "../styles/global.css";
import "../styles/buttons.css";
import "../styles/animations.css";
import "../styles/navigations.css";
import "../styles/swiperSlider.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <ToastContainer theme="dark" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
