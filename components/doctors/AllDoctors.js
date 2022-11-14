import Image from "next/legacy/image";
import Link from "next/link";

// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";

const AllDoctors = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <SectionHeader label="Helpful Doctors" center />
      <SectionTitle label="Advanced carefully doctors" center />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-x-6 xl:gap-y-10 mt-2 md:mt-4 xl:mt-10">
        {data.map(({ id, name, img, speciality, socialLinks }) => {
          return (
            <div
              key={id}
              className="group text-center rounded border border-transparent hover:border-primary-50 shadow-[0px_0px_25px_2px_#F0F2F7] hover:shadow-[0px_0px_20px_15px_#F0F2F7] px-2 xl:px-4 py-3 xl:py-5 transition-all duration-300"
            >
              <div className="relative mb-3 h-20 xxs:h-24 sm:h-32 lg:h-40 2xl:h-[227px] w-full object-cover group-hover:scale-105 transition-all duration-1000">
                <Image src={img} alt="doctor" layout="fill" objectFit="cover" />
              </div>
              <p className="text-tertiary-600 font-semibold text-xs xs:text-sm md:text-lg xl:text-xl 2xl:text-2xl">
                {name}
              </p>
              <p className="text-tertiary-600 text-xxs md:text-xs lg:text-sm xl:text-base">
                {speciality}
              </p>
              <div className="mt-2 xl:mt-4 flex items-center gap-2 w-max mx-auto">
                {socialLinks.map((item, i) => (
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    key={i}
                    href={item.path}
                    className="relative h-4 lg:h-5 xl:h-6 w-4 lg:w-5 xl:w-6 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Image
                      src={`/images/social/${item.name}Color.svg`}
                      alt="social icon"
                      layout="fill"
                    />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllDoctors;
