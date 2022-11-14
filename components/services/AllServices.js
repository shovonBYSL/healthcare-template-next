import Image from "next/legacy/image";

const AllServices = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-y-10 xl:gap-y-16">
        {data.map(({ id, title, details, logo }) => {
          return (
            <div
              key={id}
              className="hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-10 md:h-14 xl:h-24 w-10 md:w-14 xl:w-24">
                <Image src={logo} alt="services logo" layout="fill" />
              </div>
              <p className="text-tertiary-600 md:text-lg xl:text-2xl font-semibold mt-4 xl:mt-6 mb-1.5 xl:mb-2">
                {title}
              </p>
              <p className="text-tertiary-600 text-xs lg:text-sm xl:text-base">
                {details}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;
