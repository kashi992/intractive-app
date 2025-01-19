import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./index.css"; // For custom styles
import img1 from "../../../assets/images/heroLogo1.png";
import img2 from "../../../assets/images/heroLogo2.png";
import img3 from "../../../assets/images/heroLogo3.png";
import img4 from "../../../assets/images/heroLogo4.png";
import img5 from "../../../assets/images/heroLogo5.png";
import img6 from "../../../assets/images/heroLogo6.png";
import img7 from "../../../assets/images/pdf.png";
import thumbnail1 from "../../../assets/images/thumbnail.png";
import dummy1 from "../../../assets/videos/dumy.mp4";
import constructionMyVideo from "../../../assets/videos/Rozelle_Anim_preview_6.mp4";
import dummy3 from "../../../assets/videos/dumy.mp4";
import dummy4 from "../../../assets/videos/dumy.mp4";
import dummy5 from "../../../assets/videos/dumy.mp4";
import dummy6 from "../../../assets/videos/dumy.mp4";
import mfv1 from "../../../assets/videos/dharug_country_2_1.mp4";
import collabVideo1 from "../../../assets/videos/241216_SydneyMetro_test_v04b.mp4";
import playBtn from "../../../assets/images/playBtn.png";
import pdfFile from "../../../assets/images/ExecutiveSummary.pdf"; // PDF file for download
import cm1 from "../../../assets/images/constructionMethology1.png";
import cm2 from "../../../assets/images/constructionMethology2.JPEG";
import crossIcon from "../../../assets/images/crossIcon.png";
import crossBlack from "../../../assets/images/crossBlack.png";
import vis1 from "../../../assets/images/visionThumb.png";
import collabThumb1 from "../../../assets/images/collabThumb1.png";
import CustomerEngineering from "../customer-engineer/index";
import { useRoutes } from "react-router-dom";

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
      videos: [{ id: 1, video: dummy1, thumbnail: vis1, text: "Scott Hunter & Cathy Hayes", thumbnail_one: true }],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
    {
      id: 2,
      image: img6,
      title: "Customer and Systems Engineering",
      videos: [{ id: 1, video: dummy6, thumbnail: thumbnail1, thumbnail_one: true }],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
    {
      id: 3,
      image: img4,
      title: "Sydney Metro Facility",
      videos: [
        { id: 1, video: mfv1, thumbnail: thumbnail1, thumbnail_one: false },
        { id: 2, video: dummy3, thumbnail: thumbnail1, thumbnail_one: false },
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
      image: img3,
      title: "Interface and Integration",
      videos: [
        { id: 1, video: collabVideo1, thumbnail: collabThumb1, thumbnail_one: true },
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
      image: img2,
      title: "Construction Methodology",
      videos: [
        { id: 1, video: constructionMyVideo, thumbnail: cm2, text: "The Bays - 4D Construction Methodology", thumbnail_one: true },
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
      image: img5,
      title: "Community",
      videos: [
        { id: 1, video: dummy4, thumbnail: thumbnail1, thumbnail_one: false },
        { id: 2, video: dummy5, thumbnail: thumbnail1, thumbnail_one: false },
      ],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
    {
      id: 8,
      image: img6,
      title: "Social Inclusion",
      videos: [{ id: 1, video: dummy6, thumbnail: thumbnail1, thumbnail_one: true }],
      videosContent: [
        {
          videoTitle:
            "Hear from our Project Director Scott Hunter and Cathy Hayes",
        },
      ],
    },
 
    // {
    //   id: 7,
    //   image: img7,
    //   title: "Executive Summary",
    // },
  ];

  const handleSlideClick = (slide) => {
    if (slide.id === 2) {
      setViewState("customerEngineering"); // Switch to CustomerEngineering view
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
    }
  };
  // const handlePause = () => {
  //   if (videoRef.current) {
  //     videoRef.current.pause(); // Play the video
  //     // setIsPlaying(false); // Set playback state to true
  //   }
  // };

  return (
    <section className="heroWrap">
      <div className="container">
        {viewState === "slider" && (
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
        )}

        {viewState === "thumbnails" && (
          <div className="thumbnailsView h-full relative flex flex-col justify-center">

            <div className="thumbnails grid relative lg:grid-cols-2 grid-cols-1 gap-8 items-center">
              <div
                className="backButton absolute min-[1680px]:top-[-110px] top-[-65px] min-[1680px]:right-[-50px] xl:right-[-35px] right-0 flex items-center justify-end cursor-pointer"
                onClick={handleBackToSlider}
              >
                <img src={crossIcon} alt="" className="min-[1680px]:w-[80px] min-[1680px]:h-[80px] min-[1370px]:h-[50px] min-[1370px]:w-[50px] w-[40px] h-[40px] rounded-full" />
                {/* <LeftChevron className="min-[1370px]:w-4 w-3" iconClr="#000" /> <span>Back</span> */}
              </div>
              {selectedSlide.videos.map((video) => (
                <div
                  key={video.id}
                  className={`thumbnail cursor-pointer ${video.thumbnail_one ? 'thumbnail_one' : ''}`}
                  onClick={() => handleThumbnailClick(video)} // Open video view
                >
                  <div className="relative mx-auto w-fit">
                    <LazyLoadImage
                      src={video.thumbnail}
                      alt={`Thumbnail ${video.id}`}
                      className={`w-full min-[1370px]:h-full h-[300px] object-cover ${video.thumbnail_one === true ? 'thumbImg' : ''}`}
                      effect="blur" // Blur effect while loading
                      style={{ aspectRatio: 827 / 465 }}
                    />
                    <img
                      src={playBtn}
                      alt=""
                      className="absolute top-0 left-0 bottom-0 right-0 pointer-events-none m-auto min-[1370px]:w-[110px] w-[80px]"
                    />
                  </div>
                  <p className="sf min-[1680px]:text-[30px] min-[1370px]:text-[24px] text-[18px] text-white text-center min-[1370px]:mt-5 mt-2 font-bold">{video.text}</p>
                </div>
              ))}
            </div>
            <h2 className="min-[1680px]:text-[40px] min-[1370px]:text-[30px] text-[20px] text-[#4ec0b0] md:text-3xl text-xl font-bold text-center min-[1600px]:mt-6 min-[1370px]:mt-4 lg:mt-3 mt-[50px]">
              {selectedSlide.title}
            </h2>
          </div>
        )}

        {viewState === "video" && (
          <div className="videoView h-full relative flex flex-col justify-center">
            <div className="relative min-[1680px]:w-[65%] min-[1200px]:w-[55%] w-full mx-auto">
              <video
                ref={videoRef}
                className="w-full h-full custom-video-player"
                src={activeVideo.video}
                onClick={() => setIsPlaying(false)}
                controls
              />
              {!isPlaying && (
                <div className={`play-button`} onClick={handlePlay}>
                  <img
                    src={playBtn}
                    alt=""
                    className="min-[1370px]:w-[110px] w-[80px]"
                  />
                </div>
              )}
              <button
                className="absolute right-0 min-[1200px]:top-0 top-[-70px] z-10 min-[1200px]:translate-x-[175%]"
                onClick={handleBackToThumbnails}
              >
                <img src={crossIcon} alt="" className="min-[1680px]:w-[80px] min-[1680px]:h-[80px] min-[1370px]:h-[50px] min-[1370px]:w-[50px] w-[40px] h-[40px] rounded-full" />
                {/* <CrossIcon className="min-[1370px]:w-16 w-10 opacity-80" iconClr="#fff"/> */}
              </button>
            </div>
            <h2 className="sf min-[1370px]:text-4xl text-2xl text-center font-semibold min-[1370px]:mt-6 mt-2 min-[1370px]:mb-3 mb-1 text-[#50beb1]">
              {activeVideo.title || selectedSlide.title}
            </h2>
            {selectedSlide.videosContent.map((data, index) => (
              <p
                key={index}
                className="text-center text-white min-[1680px]:text-[20px] font-semibold text-[18px]"
              >
                {data.videoTitle}
              </p>
            ))}

          </div>
        )}
        
      </div>
      {viewState === "customerEngineering" && (
          <div className="customerEngineeringView">
            <button
              onClick={() => setViewState("slider")}
              className="backButton absolute left-[20px] top-[20px] z-10 w-[45px]"
            >
          <img src={crossBlack} alt="" className="w-full" />
            </button>
            <CustomerEngineering />
          </div>
        )}
    </section>
  );
};

export default HeroSlider;
