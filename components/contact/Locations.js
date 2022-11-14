import Image from "next/legacy/image";

const Locations = ({ data }) => {
  return (
    <>
      <div className="relative h-36 md:h-52 xl:h-[360px] w-full">
        <Image
          src={data.map}
          alt="map"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        className="container py-6 md:py-10 xl:py-16"
      >
        <div className="flex flex-wrap md:flex-nowrap justify-evenly divide-y-[1px] sm:divide-x-[1px] sm:divide-y-0 divide-tertiary-100 text-center">
          {data.locations.map(({ id, city, address }) => {
            return (
              <div key={id} className="w-full max-w-xs mx-auto py-4">
                <p className="text-tertiary-600 xl:text-2xl font-semibold mb-2">
                  {city}
                </p>
                <p className="text-tertiary-600 text-xs xl:text-base whitespace-pre-line">
                  {address}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Locations;
