import Head from "../components/shared/Head";
import Header from "../components/navigations/Header";
import Navbar from "../components/navigations/Navbar";
import Footer from "../components/navigations/Footer";
import ServiceSlider from "../components/shared/slider/ServiceSlider";

const BasicLayout = ({ children, head }) => {
  return (
    <div>
      <Head title={head ? head : "Medical"} />
      <Header />
      <Navbar />
      {children}
      <ServiceSlider />
      <Footer />
    </div>
  );
};

export default BasicLayout;
