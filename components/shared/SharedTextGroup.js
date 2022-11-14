const SectionHeader = ({ label, center, light }) => (
  <p
    className={`${
      light ? "text-primary-500" : "text-primary-600"
    } text-xs lg:text-sm xl:text-base font-semibold lg:font-bold tracking-widest ${
      center && "text-center"
    }`}
  >
    {label}
  </p>
);

const SectionTitle = ({ label, center }) => (
  <h2
    className={`text-tertiary-500 font-bold text-2xl lg:text-3xl xl:text-[40px] lg:leading-10 xl:leading-[60px] ${
      center && "text-center"
    }`}
  >
    {label}
  </h2>
);

const BannerTitleHeader = ({ label }) => (
  <h2 className="text-tertiary-500 font-semibold text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
    {label}
  </h2>
);

const BannerTitle = ({ label }) => (
  <h1 className="text-primary-600 font-bold text-2xl lg:text-3xl xl:text-5xl 2xl:text-[64px] lg:leading-10 xl:leading-[60px] 2xl:leading-[96px]">
    {label}
  </h1>
);

const BannerSubTitle = ({ label }) => (
  <p className="text-tertiary-600 text-xs lg:text-sm xl:text-lg mt-2 xl:mt-4 w-11/12">
    {label}
  </p>
);

export {
  SectionHeader,
  SectionTitle,
  BannerTitleHeader,
  BannerTitle,
  BannerSubTitle,
};
