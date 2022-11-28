import Image from "next/legacy/image";

const Locations = ({ data }) => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29189.52096269558!2d-104.99969492613215!3d39.73582207520166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1669615671334!5m2!1sen!2sbd"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[150px] md:h-[250px] lg:h-[360px] w-full object-cover"
      />
      <div
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        className="container py-6 md:py-10 xl:py-16"
      >
        <div className="flex flex-wrap md:flex-nowrap justify-evenly text-center">
          {data.locations.map(({ id, city, address }) => {
            return (
              <div
                key={id}
                className={`w-full max-w-xs md:max-w-full mx-auto py-4 ${
                  id === 1 &&
                  "border-y md:border-x sm:border-y-0 border-tertiary-100"
                }`}
              >
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
