import Image from "next/image";
import img1 from "/public/images/awards/webp/1.webp";
import img2 from "/public/images/awards/webp/3.webp";
import img3 from "/public/images/awards/webp/5.webp";
import img4 from "/public/images/awards/webp/2.webp";
import img5 from "/public/images/awards/webp/4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [];

  for (let i = 0; i < 12; i++) {
    slides.push();
  }
  return (
    <div className="relative">
      <button className="swiper-button-prev after:-left-[60px] after:ml-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:text-[#624AFF] after:cursor-pointer after:z-10"></button>
      <button className="swiper-button-next after:-right-[60px] after:mr-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:text-[#624AFF] after:cursor-pointer after:z-10"></button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        <SwiperSlide>
          <Image src={img1} alt="image of award" className="scale-90" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} alt="image of award" className="scale-90" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} alt="image of award" className="scale-90" />
        </SwiperSlide>
        <SwiperSlide className="mt-4 max-xl:mt-3">
          <Image src={img4} alt="image of award" className="scale-105" />
        </SwiperSlide>
        <SwiperSlide className="mt-4 max-xl:mt-3">
          <Image src={img5} alt="image of award" className="scale-105" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
