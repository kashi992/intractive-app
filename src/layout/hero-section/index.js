import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./index.scss"; // For custom styles
import img1 from "../../assets/images/heroLogo1.png";
import img2 from "../../assets/images/heroLogo2.png";
import img3 from "../../assets/images/heroLogo3.png";
import img4 from "../../assets/images/heroLogo4.png";
import img5 from "../../assets/images/heroLogo5.png";

const HeroSlider = () => {
  const slides = [
    { id: 1, image: img1, title: "The Vision" },
    { id: 2, image: img2, title: "Construction Methodology" },
    { id: 3, image: img3, title: "Interfacing with AI" },
    { id: 4, image: img4, title: "Maintenance Facility" },
    { id: 5, image: img5, title: "Connection to Country Sustainability" },
  ];

  return (
    <section className="heroWrap">
      <div className="container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={5} // Show 3 slides
          spaceBetween={0} // Space between slides
          coverflowEffect={{
            rotate: 0, // Rotate angle
            stretch: 0, // Space between slides in the z-axis
            depth: 150, // Depth of slides
            modifier: 1, // Effect multiplier
            slideShadows: false, // Enable shadow
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="heroSwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <p>{slide.title}</p>
              <div className="slideImg">
              <img src={slide.image} alt={`Slide ${slide.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
