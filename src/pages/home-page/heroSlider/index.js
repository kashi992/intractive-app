import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./index.css"; // For custom styles
import { useNavigate } from "react-router-dom";

const HeroSlider = () => {
  const navigate = useNavigate(); // Reference to the video element
  const slides = [
    {
      id: 1,
      image: "https://cpb-uglsolution-videos.s3-accelerate.amazonaws.com/heroLogo1.png",
      title: "The Vision",
      path: "/vision",
    },
    {
      id: 2,
      image: "https://cpb-uglsolution-videos.s3-accelerate.amazonaws.com/heroLogo4.png",
      title: "Safety",
      path: "/safety",
    },
    {
      id: 3,
      image: "https://cpb-uglsolution-videos.s3-accelerate.amazonaws.com/heroLogo6.png",
      title: "Systems Engineering",
      path: "/system-engineering",
    },
    {
      id: 4,
      image: "https://cpb-uglsolution-videos.s3-accelerate.amazonaws.com/heroLogo4.png",
      title: "Sydney Metro Facility",
      path: "/sydney-metro-facility",
    },
    {
      id: 5,
      image: "https://cpb-uglsolution-videos.s3-accelerate.amazonaws.com/heroLogo3.png",
      title: "Interface and Integration",
      path: "/interface-and-integration",
    },
    {
      id: 6,
      image: "https://cpb-uglsolution-videos.s3-accelerate.amazonaws.com/heroLogo2.png",
      title: "Construction Methodology",
      path: "/construction-methodology",
    },
    {
      id: 7,
      image: "https://cpb-uglsolution-videos.s3-accelerate.amazonaws.com/heroLogo5.png",
      title: "Community",
      path: "/community",
    },
    {
      id: 8,
      image: "https://cpb-uglsolution-videos.s3-accelerate.amazonaws.com/heroLogo6.png",
      title: "Social Inclusion",
      path: "/social-inclusion",
    },
  ];

  const handleSlideClick = (slide) => {
    navigate(slide.path);
  };

  return (
    <section className="heroWrap">
      <div className="container">
      <Swiper
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={4}
            slidesPerGroup={2}
            spaceBetween={80}
            loop={false}
            pagination={true}
            navigation
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="heroSwiper"
            breakpoints={{
              // when window width is <= 499px
              0: {
                slidesPerView: 1,
                spaceBetweenSlides: 30,
                centeredSlides: false,
                slidesPerGroup: 1,
              },
              575: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false
              },
              // when window width is <= 999px
              999: {
                slidesPerView: 3,
                spaceBetween: 60,
                centeredSlides: false,
              },
              // when window width is <= 999px
              1200: {
                spaceBetween: 80,
                slidesPerGroup: 3,
              },
              1680: {
                slidesPerView: 4,
                spaceBetween: 80,
                slidesPerGroup: 3,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 80,
                slidesPerGroup: 3,
              }
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                onClick={() => handleSlideClick(slide)} // Open thumbnails view
              >
                <div className="sliderContent">
                  <h2 className="sf">{slide.title}</h2>
                  <div className="slideImg">
                    <img src={slide.image} alt={`Slide ${slide.id}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
