"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = [
  "/screenshots/1.png",
  "/screenshots/2.png",
  "/screenshots/3.png",
  "/screenshots/4.png",
  "/screenshots/3.png",
  "/screenshots/2.png",
  "/screenshots/1.png",
  "/screenshots/2.png",
  "/screenshots/3.png",
  "/screenshots/4.png",
  "/screenshots/3.png",
  "/screenshots/2.png",
];

export const ScreenshotCarousel = () => {
  return (
    <div className="w-full py-12 px-2">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4.5 },
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true} // 🔁 Enables infinite loop
        spaceBetween={0}
        pagination={false}
        modules={[EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          scale: 0.95,
          stretch: 0,
          depth: 200,
          //   modifier: 1,
          slideShadows: false,
        }}
        className="max-w-6xl "
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-[200px] h-[420px]">
            <div className="w-full h-full">
              <img
                src={src}
                alt={`Mobile Screenshot ${index + 1}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
