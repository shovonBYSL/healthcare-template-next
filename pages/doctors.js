import { useEffect, useState } from "react";

// components
import Preloader from "../components/shared/Preloader";
import TestimonialSlider from "../components/shared/slider/TestimonialSlider";
import SummaryCard from "../components/shared/SummaryCard";
import BasicLayout from "../layouts/BasicLayout";
import CommonBanner from "../components/shared/CommonBanner";
import BulletPointsGallery from "../components/shared/BulletPointsGallery";
import AllDoctors from "../components/doctors/AllDoctors";

// data
import {
  allDoctors,
  doctorsBannerData,
  doctorsSkillsData,
} from "../data/doctorsData";

const Doctors = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (doctorsBannerData && doctorsSkillsData && allDoctors) {
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <BasicLayout head="Doctors">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <CommonBanner data={doctorsBannerData} />
          <AllDoctors data={allDoctors} />
          <SummaryCard />
          <BulletPointsGallery data={doctorsSkillsData} reversed />
          <TestimonialSlider />
        </>
      )}
    </BasicLayout>
  );
};

export default Doctors;
