import Image from "next/legacy/image";
import Link from "next/link";

// components
import { SectionTitle } from "../shared/SharedTextGroup";

const DoctorsConnection = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid md:grid-cols-12 items-center gap-6">
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="flex -space-x-1.5 xl:-space-x-2.5 mb-2 xl:mb-3">
            {["A", "B", "C", "+"].map((item, i) => (
              <p
                key={i}
                className={`h-6 xl:h-11 w-6 xl:w-11 text-xs xl:text-xl font-lato text-tertiary-500 font-bold rounded-full flex justify-center items-center ${
                  i === 0 || i === 3 ? "bg-primary-200" : "bg-primary-100"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          <SectionTitle label="Over 500+ Doctors Connected With Medicare" />
          <p className="text-tertiary-500 text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-6">
            Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro
            convallis commodo velante, tiam ltricies lputate. Aenean facilisis
            sodales est neciMorbi vitapurus on Est facilisisro convallis commodo
            velante, tiam ltricies lputate. Aenean facilisis sodales est
            neciMorbi vitapurus on Est facilisisro convallis commodo velante,
            tiam ltricies lputate
          </p>
          <Link href="/doctors">
            <button className="relative overflow-hidden btn-slide-outline-primary text-primary-600 hover:text-white text-xxxs xxs:text-xs xl:text-base font-medium border border-primary-600 rounded-[10px] px-3 xl:px-4 py-1.5 xl:py-3 mt-4 xl:mt-8 transition-all duration-500">
              See All Doctors
            </button>
          </Link>
        </div>
        <div className="md:col-span-7 max-h-[580px] order-2 md:order-1">
          <Image
            src="/images/home/connections.webp"
            alt="doctors connection section"
            height={489}
            width={640}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorsConnection;
