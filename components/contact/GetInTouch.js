import Image from "next/legacy/image";

// components
import EmergencyCall from "../shared/EmergencyCall";
import GetInTouchForm from "../shared/GetInTouchForm";

const GetInTouch = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <div className="max-w-3xl rounded-[10px] border px-6 xl:px-12 py-8 xl:py-16 h-full">
            <GetInTouchForm
              title={{
                black: "Need Help ?",
                colored: " Leave your message Below",
              }}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <p className="text-tertiary-600 font-semibold text-xl xl:text-2xl mb-2">
            {data.title}
          </p>
          <p className="text-tertiary-500 text-xs xl:text-sm mb-6">
            {data.info}
          </p>
          <div className="space-y-4">
            {data.contact.map(({ id, icon, label }) => {
              return (
                <div key={id} className="flex items-center gap-4">
                  <div className="relative h-10 xl:h-12 w-10 xl:w-12 shrink-0">
                    <Image src={icon} alt="icon" layout="fill" />
                  </div>
                  <p className="text-tertiary-500 font-semibold text-sm xl:text-base">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="border rounded-[10px] p-6 mt-6">
            <EmergencyCall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
