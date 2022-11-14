import Image from "next/legacy/image";

// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";

const FeaturedServices = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 lg:py-10 xl:py-16"
    >
      <SectionHeader label="Services" center />
      <SectionTitle label="Our Most Services" center />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6 xl:mt-10">
        {data.map(({ id, title, info, icon }) => {
          return (
            <div
              key={id}
              className="text-center rounded-[20px] border border-primary-100 px-4 py-5 cursor-pointer hover:-translate-y-2 hover:shadow-[0px_0px_20px_15px_#F0F2F7] transition-all duration-500"
            >
              <div className="relative h-16 xl:h-20 w-16 xl:w-20 mx-auto">
                <Image src={icon} layout="fill" alt="service logo" />
              </div>

              <p className="text-primary-800 font-semibold md:text-lg xl:text-xl mt-4 mb-2">
                {title}
              </p>
              <p className="text-tertiary-300 text-xs xl:text-sm">{info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedServices;
