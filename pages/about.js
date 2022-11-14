import { useEffect, useState } from "react";

// components
import BasicLayout from "../layouts/BasicLayout";
import CommonBanner from "../components/shared/CommonBanner";
import Preloader from "../components/shared/Preloader";
import TestimonialSlider from "../components/shared/slider/TestimonialSlider";
import SummaryCard from "../components/shared/SummaryCard";
import BulletPointsGallery from "../components/shared/BulletPointsGallery";
import AboutUs from "../components/about_us/AboutUs";

// data
import {
  aboutUsBannerData,
  aboutUsData,
  ourEquipmentsData,
  ourFacilitiesData,
} from "../data/aboutUsData";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      aboutUsBannerData &&
      aboutUsData &&
      ourFacilitiesData &&
      ourEquipmentsData
    ) {
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <BasicLayout head="About Us">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <CommonBanner data={aboutUsBannerData} />
          <AboutUs data={aboutUsData} />
          <BulletPointsGallery data={ourFacilitiesData} />
          <SummaryCard />
          <BulletPointsGallery data={ourEquipmentsData} twoColulm />
          <TestimonialSlider />
        </>
      )}
    </BasicLayout>
  );
};

export default About;
