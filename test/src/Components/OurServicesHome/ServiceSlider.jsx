import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import { ServicesHomeSlider } from "../../constants/db";
import CountUp, { useCountUp } from "react-countup";

export default function ServiceSlider({ height }) {
  useCountUp({
    ref: "counter",
    end: 100,
    scrollSpyOnce: false,
    scrollSpyDelay: 1000,
  });

  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper w-full h-full  rounded-3xl "
        style={{ height: height ? `${height}px` : "auto" }}
      >
        {ServicesHomeSlider.map((item, index) => (
          <SwiperSlide className=" w-full h-full" key={index}>
            <img
              src={item.ServicesSlider}
              className=" h-full object-cover absolute inset-0 rounded-3xl zoom-out"
              alt={`Slide ${index}`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 text-white rounded-3xl capitalize">
              <h1 className="text-2xl font-bold text-start ">
                At Alphaa Financial Solutions, we offer a comprehensive range of
                financial services
              </h1>
              <h4 className="mt-4 text-xl text-start ">
                We have the expertise to guide you through the process.
              </h4>
              <div className="mt-4 text-center font-bold text-3xl">
                {" "}
                <CountUp end={100} scrollSpyOnce  /> +
              </div>
              <h6 className="mt-2 text-base text-center ">Simplify the loan</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
