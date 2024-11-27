import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./index.scss"; // For custom styles
import img1 from "../../../assets/images/heroLogo1.png";
import img2 from "../../../assets/images/heroLogo2.png";
import img3 from "../../../assets/images/heroLogo3.png";
import img4 from "../../../assets/images/heroLogo4.png";
import img5 from "../../../assets/images/heroLogo5.png";
import img6 from "../../../assets/images/heroLogo6.png";
import img7 from "../../../assets/images/pdf.png";
import thumbnail1 from "../../../assets/images/thumbnail.png";
import dummy1 from "../../../assets/videos/dumy.mp4";
import dummy2 from "../../../assets/videos/dumy.mp4";
import dummy3 from "../../../assets/videos/dumy.mp4";
import dummy4 from "../../../assets/videos/dumy.mp4";
import dummy5 from "../../../assets/videos/dumy.mp4";
import dummy6 from "../../../assets/videos/dumy.mp4";
import LeftChevron from "../../../assets/images/LeftChevron";
import playBtn from "../../../assets/images/playBtn.png";
import CrossIcon from "../../../assets/images/CrossIcon";
import pdfFile from "../../../assets/images/ExecutiveSummary.pdf"; // PDF file for download

const HeroSlider = () => {
  const [viewState, setViewState] = useState("slider"); // States: "slider", "thumbnails", "video"
  const [selectedSlide, setSelectedSlide] = useState(null); // Selected slide object
  const [activeVideo, setActiveVideo] = useState(null); // Selected video object
  const [isPlaying, setIsPlaying] = useState(false); // Controls playback state
  const videoRef = useRef(null); // Reference to the video element

  const slides = [
    {
      id: 1,
      image: img1,
      title: "The Vision",
      videos: [{ id: 1, video: dummy1, thumbnail: thumbnail1 }],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },

    {
      id: 2,
      image: img2,
      title: "Construction Methodology",
      videos: [
        { id: 1, video: dummy2, thumbnail: thumbnail1 },
        { id: 2, video: dummy3, thumbnail: thumbnail1 },
      ],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
    {
      id: 3,
      image: img3,
      title: "Collaboration",
      videos: [
        { id: 1, video: dummy4, thumbnail: thumbnail1 },
        { id: 2, video: dummy5, thumbnail: thumbnail1 },
      ],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
    {
      id: 4,
      image: img4,
      title: "Maintenance Facility",
      videos: [
        { id: 1, video: dummy1, thumbnail: thumbnail1 },
        { id: 2, video: dummy3, thumbnail: thumbnail1 },
      ],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
    {
      id: 5,
      image: img5,
      title: "Community + Sustainability",
      videos: [
        { id: 1, video: dummy4, thumbnail: thumbnail1 },
        { id: 2, video: dummy5, thumbnail: thumbnail1 },
      ],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
    {
      id: 6,
      image: img6,
      title: "Systems Engineering",
      videos: [{ id: 1, video: dummy6, thumbnail: thumbnail1 }],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
    {
      id: 7,
      image: img7,
      title: "Executive Summary",
    },
  ];

  const handleSlideClick = (slide) => {
    if (slide.id === 7) {
      // Trigger PDF download for id: 7
      const link = document.createElement("a");
      link.href = pdfFile;
      link.download = "Executive_Summary.pdf";
      link.click();
    } else {
      setSelectedSlide(slide); // Set the selected slide
      setViewState("thumbnails"); // Switch to thumbnails view
    }
  };

  const handleThumbnailClick = (video) => {
    setActiveVideo(video); // Set the active video
    setViewState("video"); // Switch to video view
  };

  const handleBackToSlider = () => {
    setSelectedSlide(null);
    setViewState("slider"); // Back to slider view
  };

  const handleBackToThumbnails = () => {
    setActiveVideo(null);
    setViewState("thumbnails"); // Back to thumbnails view
    setIsPlaying(false); // Back to thumbnails view
  };
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
      setIsPlaying(true); // Set playback state to true
      console.log("isPlaying2", isPlaying);
    }
  };
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Play the video
      setIsPlaying(false); // Set playback state to true
      console.log("isPlaying2", isPlaying);
    }
  };

  return (
    <section className="heroWrap">
      <div className="container">
        {viewState === "slider" && (
          <Swiper
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={5}
            spaceBetween={100}
            loop={false}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="heroSwiper"
            breakpoints={{
              // when window width is <= 499px
              0: {
                slidesPerView: 1.7,
                spaceBetweenSlides: 30,
                centeredSlides: false
              },
              575: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false
              },
              // when window width is <= 999px
              999: {
                slidesPerView: 4,
                spaceBetween: 100,
                centeredSlides: false
              },
              // when window width is <= 999px
              1200: {
                slidesPerView: 5,
                spaceBetween: 100,
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
        )}

        {viewState === "thumbnails" && (
          <div className="thumbnailsView h-full relative flex flex-col justify-center">
            <div
              className="backButton absolute md:top-8 top-2 left-0 min-[1370px]:text-2xl text-xl flex items-center gap-2 hover:border-b-2 border-black cursor-pointer"
              onClick={handleBackToSlider}
            >
              <LeftChevron className="min-[1370px]:w-4 w-3" iconClr="#000" /> <span>Back</span>
            </div>
            <h2 className="min-[1370px]:text-5xl md:text-3xl text-xl font-bold text-center md:mb-12 mb-4">
              {selectedSlide.title}
            </h2>
            <div className="thumbnails grid min-[1200px]:grid-cols-2 grid-cols-1 md:gap-8 gap-3 items-center">
              {selectedSlide.videos.map((video) => (
                <div
                  key={video.id}
                  className="thumbnail relative cursor-pointer min-[1680px]:h-[380px] min-[1370px]:h-[350px] md:h-[300px] h-[200px]"
                  onClick={() => handleThumbnailClick(video)} // Open video view
                >
                  <img
                    src={video.thumbnail}
                    alt={`Thumbnail ${video.id}`}
                    className="w-full h-full"
                  />
                  <img
                    src={playBtn}
                    alt=""
                    className="absolute top-0 left-0 bottom-0 right-0 pointer-events-none m-auto min-[1370px]:w-[110px] w-[80px]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {viewState === "video" && (
          <div className="videoView h-full relative flex flex-col justify-center">
            <div className="relative min-[1680px]:w-[65%] min-[1200px]:w-[60%] w-full mx-auto">
              <video
                ref={videoRef}
                className="w-full h-full"
                src={activeVideo.video}
                onClick={handlePause}
              />
              {!isPlaying && (
                <div className="play-button" onClick={handlePlay}>
                  <img
                    src={playBtn}
                    alt=""
                    className=""
                  />
                </div>
              )}
               <button
             className="absolute right-0 min-[1200px]:top-0 top-[-70px] z-10 min-[1200px]:translate-x-[175%]"
              onClick={handleBackToThumbnails}
            >
             <CrossIcon className="min-[1370px]:w-16 w-10 opacity-80" iconClr="#fff"/>
            </button>
            </div>
            <h2 className="sf min-[1370px]:text-4xl text-2xl text-center font-semibold min-[1370px]:mt-6 mt-2 min-[1370px]:mb-3 mb-1 text-[#50beb1]">
                {activeVideo.title || selectedSlide.title}
              </h2>
            {selectedSlide.videosContent.map((data, index) => (
              <p
                key={index}
                className="text-center text-white min-[1680px]:text-[25px] min-[1680px]:text-[20px] font-semibold text-[18px]"
              >
                {data.videoTitle}
              </p>
            ))}
           
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSlider;
