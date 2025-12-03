// src/components/HeroSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    img: "https://i.ibb.co.com/C3DPL6DT/pexels-jozef-feher-356581-1800314.jpg",
    title: "Keep Your Pet Cozy This Winter",
    subtitle: "Warm sweaters and blankets for your furry friends.",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/WvGhFDD9/pexels-mikhail-nilov-6530735.jpg",
    title: "Winter Adventures Await",
    subtitle: "Protect paws and fur from the cold.",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/LXyWCYbw/pexels-pixabay-248273.jpg",
    title: "Snuggle Season",
    subtitle: "Because pets love warmth too.",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[60vh] mt-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
                <h2 className="mb-3 text-4xl font-bold md:text-5xl drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-lg md:text-xl">{slide.subtitle}</p>
                <button className="mt-6 text-white transition btn btn-success">
                  Explor Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev opacity-0 md:opacity-100 text-white!" />
        <div className="swiper-button-next opacity-0 md:opacity-100 text-white!" />
      </Swiper>
    </div>
  );
}
