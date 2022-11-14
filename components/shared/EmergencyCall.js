import Image from "next/legacy/image";

const EmergencyCall = () => {
  return (
    <div className="text-center">
      <div className="relative h-16 lg:h-24 2xl:h-40 w-16 lg:w-24 2xl:w-40 mx-auto">
        <Image
          src="/images/icons/phoneIcon.svg"
          alt="phone icon"
          layout="fill"
          className="animate-pulse"
        />
      </div>
      <p className="text-tertiary-600 font-semibold md:text-lg 2xl:text-2xl mt-4">
        HOTLINE NUMBER
      </p>
      <p className="text-tertiary-600 font-semibold text-2xl md:text-3xl 2xl:text-[40px] xl:leading-[60px]">
        +95552 88559
      </p>
      <p className="text-tertiary-500 text-xs xl:text-sm mt-4  max-w-[474px] mx-auto">
        “Was here this past weekend and the staff was great I really do
        appreciate this hospital staff nurses and doctors where great and
      </p>
    </div>
  );
};

export default EmergencyCall;
