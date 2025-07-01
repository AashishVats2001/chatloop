"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const pricingPlans = [
  {
    name: "Premium",
    price: 59,
    duration: "Year",
    features: [
      "real time sync",
      "unlimited attachment",
      "customize theme",
      "priority email support",
    ],
  },
  {
    name: "Professional",
    price: 69,
    duration: "Year",
    features: [
      "24/7 On-site Support",
      "real time sync",
      "customize theme",
      "priority email support",
    ],
  },
  {
    name: "Standard",
    price: 79,
    duration: "Year",
    features: [
      "24/7 On-site Support",
      "unlimited attachment",
      "customize theme",
      "priority email support",
    ],
  },
  {
    name: "Extreme",
    price: 49,
    duration: "Year",
    features: [
      "24/7 On-site Support",
      "real time sync",
      "customize theme",
      "priority email support",
    ],
  },
];

const pricing = [...pricingPlans, ...pricingPlans];

export const PricingCarousel = () => {
  return (
    <div className="w-full py-12 px-2">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={false}
        loop={true} // 🔁 Enables infinite loop
        spaceBetween={30}
        pagination={false}
        modules={[EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          scale: 1,
          stretch: 0,
          depth: 0,
          //   modifier: 1,
          slideShadows: false,
        }}
        className="max-w-6xl "
      >
        {pricing.map((plan, index) => (
          <SwiperSlide key={index} className="">
            <div className="bg-white rounded-lg shadow-md text-center px-6 h-full flex flex-col items-center justify-between">
              <div className="flex flex-col ">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-gray py-6 border-b-[1px] border-border-light">
                  {plan.name}
                </h3>

                <div className="font-semibold text-primary flex justify-center items-center gap-1 py-3 border-b-[1px] border-border-light">
                  <span className="text-secondary text-sm md:text-base lg:text-lg">
                    $
                  </span>
                  <span className="text-primary text-4xl md:text-5xl lg:text-6xl">
                    {plan.price}
                  </span>
                  <span className="text-secondary text-sm md:text-base lg:text-lg">
                    {plan.duration}
                  </span>
                </div>

                <ul className="space-y-4 text-sm md:text-base text-text-gray py-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-2 px-4 mb-5 rounded-md hover:to-primary transition-all cursor-pointer">
                Select Plan
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
