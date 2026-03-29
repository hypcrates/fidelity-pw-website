'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function Slider(): React.ReactElement {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop
      autoplay={{ delay: 5000 }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        const nav = swiper.params.navigation;
        if (nav && typeof nav !== 'boolean') {
          nav.prevEl = prevRef.current;
          nav.nextEl = nextRef.current;
        }
      }}
      className="w-full"
    >
      <SwiperSlide>
        <video
          className="object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/assets/images/slider/Banner-02.mp4"
        />
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="bg-cover bg-center aspect-[1440/600] bg-gray-900 brightness-80"
          style={{
            backgroundImage: 'url(/assets/images/slider/Banner-03.png)',
          }}
        />
      </SwiperSlide>

      {/* Setas */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-black/80"
      >
        &#8592;
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-black/80"
      >
        &#8594;
      </div>
    </Swiper>
  );
}
