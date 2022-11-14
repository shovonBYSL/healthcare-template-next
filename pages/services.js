import { useEffect, useState } from "react";

// components
import Preloader from "../components/shared/Preloader";
import TestimonialSlider from "../components/shared/slider/TestimonialSlider";
import SummaryCard from "../components/shared/SummaryCard";
import BasicLayout from "../layouts/BasicLayout";
import CommonBanner from "../components/shared/CommonBanner";
import AllServices from "../components/services/AllServices";
import ServicesProcess from "../components/services/ServicesProcess";
import ContactForm from "../components/shared/ContactForm";

// data
import {
  servicesBannerData,
  servicesData,
  servicesProcessData,
} from "../data/servicesData";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (servicesBannerData && servicesData && servicesProcessData) {
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <BasicLayout head="Services">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <CommonBanner data={servicesBannerData} />
          <AllServices data={servicesData} />
          <SummaryCard />
          <ServicesProcess data={servicesProcessData} />
          <ContactForm />
          <TestimonialSlider />
        </>
      )}
    </BasicLayout>
  );
};

export default Services;
