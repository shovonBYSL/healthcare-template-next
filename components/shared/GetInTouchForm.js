import { useState } from "react";
import { toast } from "react-toastify";

const GetInTouchForm = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessageData = { name, email, subject, message };
    toast.success("Thanks for your message");
    console.log(userMessageData);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <p className="text-tertiary-500 font-semibold md:text-lg xl:text-2xl">
        {title.black} <span className="text-primary-600">{title.colored}</span>
      </p>
      <form onSubmit={handleFormSubmit} className="my-6 xl:mb-9 space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2 md:p-4 text-xs lg:text-sm xl:text-base outline-0 transition-all duration-300"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2 md:p-4 text-xs lg:text-sm xl:text-base outline-0 transition-all duration-300"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Subject"
          className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2 md:p-4 text-xs lg:text-sm xl:text-base outline-0 transition-all duration-300"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          rows="5"
          placeholder="Write Message here.."
          className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2 md:p-4 text-xs lg:text-sm xl:text-base outline-0 resize-none transition-all duration-300"
        />
        <button
          type="submit"
          className="z-10 relative overflow-hidden btn-slide-secondary  px-6 py-2 rounded-lg text-white text-xs md:text-sm xl:text-base"
        >
          Get In Touch
        </button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
