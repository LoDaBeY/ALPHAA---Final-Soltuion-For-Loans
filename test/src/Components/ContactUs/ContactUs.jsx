import { FaGitlab } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import callcenter from "../../assets/close-up-person-working-call-center-1024x683.jpg";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="pt-16 pb-16 px-5 bg-white font-cairo">
      <div className=" flex justify-between gap-8 items-center container mx-auto flex-col md:flex-row">
        <div className=" w-full md:w-1/3 flex flex-col">
          <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
          <p className="text-zinc-600 text-base py-5">
            Please feel free to ask if you have any further questions.
          </p>
          <div className="space-y-4 mb-9">
            <p className="flex items-center gap-2">
              <span className="text-orange-500">
                <FaLocationDot />
              </span>{" "}
              <span className="ml-2 font-bold">Sydney, Australia</span>
            </p>
            <Link
              className="flex items-center mt-2 gap-2"
              to={"callto:0468328227"}
            >
              <span className="text-orange-500 font-bold">
                <FaPhone />
              </span>
              <span className="ml-2 font-bold ">0468328227</span>
            </Link>
            <p className="flex items-center mt-2 gap-2">
              <span className="text-orange-500 font-bold text-xl">
                <FaClock />
              </span>
              <span className="ml-2 font-bold">Mon - Fri: 9:00am - 5:00pm</span>
            </p>
            <p className="flex items-center mt-2 gap-2">
              <span className="text-orange-500 font-bold text-xl">
                <FaClock />
              </span>
              <span className="ml-2 font-bold">Weekend Appointments Only</span>
            </p>
          </div>

          <div className="flex  gap-2 mb-5">
            <a
              href="#"
              className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
            >
              <FaGitlab size={20} />
            </a>
            <a
              href="#"
              className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="#"
              className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
            >
              <FaWordpress size={20} />
            </a>
            <a
              href="#"
              className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
            >
              <FaViber size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-end">
          <img
            alt="Contact Phone"
            src={callcenter}
            className="rounded-lg w-full md:w-2/3 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
