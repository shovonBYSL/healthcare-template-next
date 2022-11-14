// components
import OpeningHours from "../shared/OpeningHours";

const AppointmentDetails = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid grid-cols-12 gap-4 xl:gap-6">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 p-6 xl:p-10 border rounded-[10px]">
          <p className="text-tertiary-500 font-bold text-2xl 2xl:text-4xl mb-10">
            {data.title}
          </p>
          <div className="space-y-6">
            {data.points.map(({ id, title, info }) => {
              return (
                <div key={id}>
                  <p className="text-tertiary-600 font-semibold 2xl:text-xl mb-2">
                    {title}
                  </p>
                  <p className="text-tertiary-100 text-xs 2xl:text-base">
                    {info}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <OpeningHours />
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
