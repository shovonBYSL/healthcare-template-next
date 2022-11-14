import Image from "next/legacy/image";

// data
import { appointmentHours } from "../../data/appointmentData";

const OpeningHours = () => {
  return (
    <div className="px-4 xl:px-6 py-7 border bg-tertiary-10 rounded-[10px] h-full w-full mx-auto">
      <div className="relative h-16 2xl:h-20 w-16 2xl:w-20 mx-auto">
        <Image
          src="/images/icons/appointmentHours.svg"
          alt="appointment icon"
          layout="fill"
        />
      </div>
      <p className="text-tertiary-600 2xl:text-xl font-bold text-center mt-2 mb-6">
        Opening Hours
      </p>
      <div className="space-y-3 xl:px-4 max-w-xs xl:max-w-sm mx-auto">
        {appointmentHours.map(({ id, day, timing }) => {
          return (
            <div key={id} className="grid grid-cols-2 gap-4">
              <p className="text-tertiary-600 text-xs 2xl:text-base xl:font-medium">
                {day}
              </p>
              <p className="text-tertiary-200 text-xs 2xl:text-base font-semibold text-end">
                {timing}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpeningHours;
