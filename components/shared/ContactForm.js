// components
import EmergencyCall from "./EmergencyCall";
import GetInTouchForm from "./GetInTouchForm";

const ContactForm = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid md:grid-cols-2 items-center gap-6 p-6 xl:p-10 border rounded-[10px]">
        <EmergencyCall />
        <GetInTouchForm
          title={{ black: "Get Consultation", colored: "Today!" }}
        />
      </div>
    </div>
  );
};

export default ContactForm;
