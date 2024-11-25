import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import gsap from "gsap";
import "./index.scss"; // For custom styles
import img1 from "../../assets/images/heroLogo1.png";
import img2 from "../../assets/images/heroLogo2.png";
import img3 from "../../assets/images/heroLogo3.png";
import img4 from "../../assets/images/heroLogo4.png";
import img5 from "../../assets/images/heroLogo5.png";
import dummy1 from "../../assets/videos/dumy.mp4";
import dummy2 from "../../assets/videos/dumy.mp4";
import dummy3 from "../../assets/videos/dumy.mp4";
import dummy4 from "../../assets/videos/dumy.mp4";
import dummy5 from "../../assets/videos/dumy.mp4";

const HeroSlider = () => {
  const [activeSlideId, setActiveSlideId] = useState(null);

  const slides = [
    { id: 1, image: img1, title: "The Vision", video: dummy1 },
    { id: 2, image: img2, title: "Construction Methodology", video: dummy2 },
    { id: 3, image: img3, title: "Interfacing with AI", video: dummy3 },
    { id: 4, image: img4, title: "Maintenance Facility", video: dummy4 },
    {
      id: 5,
      image: img5,
      title: "Connection to Country Sustainability",
      video: dummy5,
    },
  ];

  const handleSlideChange = (swiper) => {
    // Apply GSAP animation to all slides
    swiper.slides.forEach((slide, index) => {
      const isActive = index === swiper.activeIndex;
      gsap.to(slide, {
        scale: isActive ? 1 : 0.8,
        zIndex: isActive ? 10 : 1,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  };

  const handleSlideClick = (id) => {
    setActiveSlideId(id); // Set the clicked slide ID to display its respective video
  };

  return (
    <section className="heroWrap">
      <div className="container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={4}
          spaceBetween={0}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          onSlideChange={handleSlideChange} // Trigger GSAP animation on slide change
          className="heroSwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              onClick={() => handleSlideClick(slide.id)} // Handle specific slide click
              className={activeSlideId === slide.id ? "active-slide" : ""}
            >
              <div className="flex gap-6">
                <div>
                <p>{slide.title}</p>
                <div className="slideImg">
                  <img src={slide.image} alt={`Slide ${slide.id}`} />
                </div>
                </div>
                {activeSlideId === slide.id && (
                  <div className="video-container">
                    <video
                      src={slide.video}
                      controls
                      autoPlay
                      className="video-element"
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
