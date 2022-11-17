import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { toast } from "react-toastify";
import ReactDatePicker from "react-datepicker";
import { HiOutlineChevronDown } from "react-icons/hi";

// data
import { allDoctors } from "../../data/doctorsData";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessageData = { name, email, phone, message };
    toast.success("Thanks for your message");
    console.log(userMessageData);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const Icon = ({ img }) => (
    <div className="absolute top-1/2 right-1 xs:right-3 -translate-y-1/2 flex">
      <Image
        src={`/images/icons/${img}.svg`}
        alt="icon"
        height={24}
        width={24}
      />
    </div>
  );

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <h4 className="text-tertiary-500 font-semibold text-2xl mb-2">
        Appointment Form
      </h4>
      <hr />
      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Patient Name*"
              className="col-span-2 md:col-span-1 w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2.5 2xl:p-4 text-xs xl:text-base outline-0 transition-all duration-300"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Phone*"
              className="col-span-2 md:col-span-1 w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2.5 2xl:p-4 text-xs xl:text-base outline-0 transition-all duration-300"
            />

            <div className="relative">
              <select className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2.5 2xl:p-4 text-xs xl:text-base outline-0 transition-all duration-300">
                <option value="">Appointment for*</option>
                {allDoctors.map((item, i) => (
                  <option key={i} value={i}>
                    {item.speciality}
                  </option>
                ))}
              </select>
              <HiOutlineChevronDown className="text-xl text-tertiary-300 absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            <div className="relative">
              <ReactDatePicker
                minDate={new Date()}
                selected={startDate}
                closeOnScroll={true}
                onChange={(date) => setStartDate(date)}
                placeholderText="Date*"
                className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2.5 2xl:p-4 text-xs xl:text-base outline-0 transition-all duration-300"
              />
              <Icon img="calendar" />
            </div>

            <div className="relative">
              <select className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2.5 2xl:p-4 text-xs xl:text-base outline-0 transition-all duration-300">
                <option value="">Choose Doctor*</option>
                {allDoctors.map((item, i) => (
                  <option key={i} value={i}>
                    {item.name}
                  </option>
                ))}
              </select>
              <HiOutlineChevronDown className="text-xl text-tertiary-300 absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            <div className="relative">
              <select className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2.5 2xl:p-4 text-xs xl:text-base outline-0 transition-all duration-300">
                <option value="">Prepared Time*</option>
                {[
                  "2:00 PM",
                  "3:00 PM",
                  "4:00 PM",
                  "5:00 PM",
                  "6:00 PM",
                  "7:00 PM",
                  "8:00 PM",
                  "9:00 PM",
                ].map((item, i) => (
                  <option key={i} value={i}>
                    {item}
                  </option>
                ))}
              </select>
              <Icon img="watch" />
            </div>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email (optional)"
              className="col-span-2 w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2.5 2xl:p-4 text-xs xl:text-base outline-0 transition-all duration-300"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              rows="4"
              placeholder="Your Message..."
              className="col-span-2 w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2.5 2xl:p-4 text-xs xl:text-base outline-0 resize-none transition-all duration-300"
            />
            <button
              type="submit"
              className="z-10 relative overflow-hidden btn-slide-secondary col-span-2 w-max mx-auto lg:mx-0 px-6 py-2.5 rounded-lg text-white text-xs md:text-sm xl:text-base shadow-[0px_8px_16px_0px_rgba(145,158,171,0.16)]"
            >
              Make an Appointment
            </button>
          </form>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <div className="px-4 xl:px-6 py-7 xl:py-16 border rounded-[10px] w-full mx-auto">
            <div className="relative h-16 2xl:h-20 w-16 2xl:w-20 mx-auto">
              <Image
                src="/images/icons/consultation.svg"
                alt="appointment icon"
                layout="fill"
              />
            </div>
            <p className="text-tertiary-600 2xl:text-xl font-bold text-center mt-2 mb-3">
              Book your Consultation
            </p>
            <p className="text-tertiary-80 text-sm 2xl:text-base text-center">
              You can book a first consultation meeting which is free of charge,
              to talk about what you are looking for.
            </p>
            <Link
              href="tel:+95552 88559"
              className="flex items-center gap-1.5 px-8 py-3 rounded-[10px] w-max mx-auto bg-primary-700 mt-12"
            >
              <div className="relative h-6 2xl:h-8 w-6 2xl:w-8">
                <Image src="/images/icons/phone.svg" alt="icon" layout="fill" />
              </div>
              <p className="text-white font-semibold lg:text-lg 2xl:text-2xl">
                +95552 88559
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
