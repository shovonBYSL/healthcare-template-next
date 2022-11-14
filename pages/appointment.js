import { useEffect, useState } from "react";

// components
import Preloader from "../components/shared/Preloader";
import BasicLayout from "../layouts/BasicLayout";
import CommonBanner from "../components/shared/CommonBanner";
import TestimonialSlider from "../components/shared/slider/TestimonialSlider";
import AppointmentDetails from "../components/appointment/AppointmentDetails";
import AppointmentForm from "../components/appointment/AppointmentForm";

// data
import {
  appointmentBannerData,
  appointmentDetailsData,
} from "../data/appointmentData";

const Appointment = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (appointmentBannerData && appointmentDetailsData) {
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <BasicLayout head="Appointment">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <CommonBanner data={appointmentBannerData} />
          <AppointmentForm />
          <AppointmentDetails data={appointmentDetailsData} />
          <TestimonialSlider />
        </>
      )}
    </BasicLayout>
  );
};

export default Appointment;
