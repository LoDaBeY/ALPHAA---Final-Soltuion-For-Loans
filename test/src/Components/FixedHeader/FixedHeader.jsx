import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

export default function FixedHeader() {
  return (
    <div className=" w-full bg-[--DarkBGAndText] text-[#EEEBEA] shadow-md p-4 flex  items-center z-50 font-cairo">
      <div className="  lg:w-10/12 leading-snug flex justify-center md:justify-start lg:justify-end flex-wrap   items-center space-y-1 space-x-3  mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-orange-500">
            <FaLocationDot />
          </span>
          <span className="text-base font-medium">Sydney, Australia</span>
        </div>
        <Link className="flex items-center gap-2" to={"callto:046832827"}>
          <span className="text-orange-500 font-bold">
            <FaPhone />
          </span>
          <span className="text-base font-medium">046832827</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-orange-500 text-sm">
            <FaClock />
          </span>
          <span className="text-base font-medium">Mon - Fri: 9:00am - 5:00pm</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">
            {" "}
            <FaClock />
          </span>
          <span className="text-base font-medium">Weekends Appointments Only</span>
        </div>
      </div>
    </div>
  );
}
