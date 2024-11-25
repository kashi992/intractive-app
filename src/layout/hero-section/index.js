import React, { useState, useRef } from "react";
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
import dummy1 from "../../assets/videos/dumy.mp4";
import dummy2 from "../../assets/videos/dumy.mp4";
import dummy3 from "../../assets/videos/dumy.mp4";
import dummy4 from "../../assets/videos/dumy.mp4";
import dummy5 from "../../assets/videos/dumy.mp4";
import playbtn from "../../assets/images/playBtn.png";
import LoginForm from "../login-form";

const HeroSlider = () => {
  const [activeSlideId, setActiveSlideId] = useState(null); // Active slide ID
  const [videoVisible, setVideoVisible] = useState(false); // Controls visibility of the video container
  const [isPlaying, setIsPlaying] = useState(false); // Controls playback state
  const videoRef = useRef(null); // Reference to the video element
  const swiperRef = useRef(null); // Reference to the Swiper instance
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const handleSlideClick = (index) => {
    setActiveSlideId(slides[index].id); // Set the active slide ID
    swiperRef.current.slideTo(index); // Center the clicked slide
    // setVideoVisible(false); // Hide video container
    // setIsPlaying(false); // Reset video playback state
    console.log("videoVisible1", videoVisible)
    console.log("isPlaying1", isPlaying)
  };

  const handleImgClick = (id) => {
    if (id === activeSlideId) {
      setVideoVisible(true); // Show video container only for the active slide
      console.log("videoVisible2", videoVisible)
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
      setIsPlaying(true); // Set playback state to true
      console.log("isPlaying2", isPlaying)
    }
  };

  const handleCloseVideo = () => {
    setVideoVisible(false); // Hide video container
    setIsPlaying(false); // Reset playback state
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = 0; // Reset video to the beginning
      console.log("videoVisible3", videoVisible)
      console.log("isPlaying3", isPlaying)
    }
  };
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  return (
    <>
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <section className="heroWrap">
          <div className="container">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={5}
              spaceBetween={100}
              loop={false}
              initialSlide={0}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="heroSwiper"
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
              breakpoints={{
                // when window width is <= 499px
                0: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 50,
                  centeredSlides: false
                },
                // when window width is <= 999px
                999: {
                  slidesPerView: 5,
                  spaceBetweenSlides: 100,
                  centeredSlides: true
                }
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={slide.id}
                  onClick={() => handleSlideClick(index)} // Handle slide click
                  className={activeSlideId === slide.id ? "active-slide" : ""}
                >
                  <div className="sliderContent">
                    <p>{slide.title}</p>
                    <div
                      className="slideImg"
                      onClick={() => handleImgClick(slide.id)} // Handle slideImg click
                    >
                      <img src={slide.image} alt={`Slide ${slide.id}`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Video Player */}
            <div
              key={activeSlideId}
              className={`custom-video-container  ${videoVisible && activeSlideId ? "__video" : ""}`}
            >
              <div className="video-thumbnail">
                <video
                  ref={videoRef} // Attach videoRef to this video element
                  src={slides.find((slide) => slide.id === activeSlideId)?.video}
                  className="video-element"
                />
                {!isPlaying && (
                  <button className="play-button" onClick={handlePlay}>
                    <img src={playbtn} alt="Play Button" />
                  </button>
                )}
              </div>
              <p className="min-[1370px]:text-[25px] text-[16px] leading-tight text-white text-center min-[1680px]:my-12 min-[1370px]:my-6 my-4">Hear from our Project Director Scott Hunter and Cathy Hayes</p>
              <a className="close-button" onClick={handleCloseVideo}>
                Back to Menu
              </a>
            </div>
          </div>
        </section>
      )}
    </>

  );
};

export default HeroSlider;
