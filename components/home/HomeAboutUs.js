import Image from "next/legacy/image";

// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";

const HomeAboutUs = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid md:grid-cols-2 items-center gap-6">
        <div className="lg:w-4/5">
          <SectionHeader label="About Us" />
          <SectionTitle label="We are the best to take care of you" />
          <p className="text-tertiary-500 text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-6">
            Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro
            convallis commodo velante, tiam ltricies lputate. Aenean facilisis
            sodales est neciMorbi vitapurus on Est facilisisro convallis commodo
            velante, tiam ltricies lputate. Aenean facilisis sodales est
            neciMorbi vitapurus on Est facilisisro convallis commodo velante,
            tiam ltricies lputate
          </p>
        </div>
        <Image
          src="/images/home/about_us.webp"
          alt="about us section"
          height={600}
          width={640}
        />
      </div>
    </div>
  );
};

export default HomeAboutUs;
