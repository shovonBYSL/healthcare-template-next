import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

// data
import { summaryData } from "../../data/summaryData";

const SummaryCard = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 lg:py-10 xl:py-16"
    >
      <div className="bg-primary-600 text-white text-center px-10 py-6 md:py-10 lg:py-12 xl:py-16 rounded-md lg:rounded-xl xl:rounded-2xl flex flex-wrap justify-around gap-y-7">
        {summaryData.map(({ id, label, number }) => {
          return (
            <div key={id} className="xxs:min-w-[120px]">
              <h2 className="font-bold text-xl md:text-2xl lg:text-4xl xl:text-[40px] mb-2 xl:leading-[52px]">
                <CountUp end={number} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h2>
              <p className="font-semibold text-xxs md:text-sm lg:text-lg xl:text-xl">
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummaryCard;
