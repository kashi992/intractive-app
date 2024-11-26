import React, { useState } from "react";
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
import img6 from "../../../assets/images/pdf.png";
import thumbnail1 from "../../../assets/images/thumbnail.png";
import dummy1 from "../../../assets/videos/dumy.mp4";
import dummy2 from "../../../assets/videos/dumy.mp4";
import dummy3 from "../../../assets/videos/dumy.mp4";
import dummy4 from "../../../assets/videos/dumy.mp4";
import dummy5 from "../../../assets/videos/dumy.mp4";
import dummy6 from "../../../assets/videos/dumy.mp4";
import LeftChevron from "../../../assets/images/LeftChevron";

const HeroSlider = () => {
  const [viewState, setViewState] = useState("slider"); // States: "slider", "thumbnails", "video"
  const [selectedSlide, setSelectedSlide] = useState(null); // Selected slide object
  const [activeVideo, setActiveVideo] = useState(null); // Selected video object

  const slides = [
    {
      id: 1,
      image: img1,
      title: "The Vision",
      videos: [{ id: 1, video: dummy1, thumbnail: thumbnail1 }],
    },
    {
      id: 2,
      image: img2,
      title: "Construction Methodology",
      videos: [
        { id: 1, video: dummy2, thumbnail: thumbnail1 },
        { id: 2, video: dummy3, thumbnail: thumbnail1 },
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
    },
    {
      id: 4,
      image: img4,
      title: "Maintenance Facility",
      videos: [
        { id: 1, video: dummy1, thumbnail: thumbnail1 },
        { id: 2, video: dummy3, thumbnail: thumbnail1 },
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
    },
    {
      id: 6,
      image: img5,
      title: "Systems Engineering",
      videos: [{ id: 1, video: dummy6, thumbnail: img6 }],
    },
    {
      id: 7,
      image: img6,
      title: "Executive Summary",
      // videos: [{ id: 1, video: dummy6, thumbnail: img6 }],
    },
  ];

  const handleSlideClick = (slide) => {
    setSelectedSlide(slide); // Set the selected slide
    setViewState("thumbnails"); // Switch to thumbnails view
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
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                onClick={() => handleSlideClick(slide)} // Open thumbnails view
              >
                <div className="sliderContent">
                  <p className="">{slide.title}</p>
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
            <div className="backButton absolute top-8 left-0 text-2xl flex items-center gap-2 hover:border-b-2 border-black" onClick={handleBackToSlider}>
            <LeftChevron className="w-4" iconClr="#000"/> <span>Back</span> 
            </div>
            <h2 className="text-5xl font-bold text-center">{selectedSlide.title}</h2>
            <div className="thumbnails grid grid-cols-2 gap-8 items-center">
              {selectedSlide.videos.map((video) => (
                <div
                  key={video.id}
                  className="thumbnail"
                  onClick={() => handleThumbnailClick(video)} // Open video view
                >
                  <img src={video.thumbnail} alt={`Thumbnail ${video.id}`} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        )}

        {viewState === "video" && (
          <div className="videoView">
            <button className="backButton" onClick={handleBackToThumbnails}>
              Back to Thumbnails
            </button>
            <h2>{activeVideo.title || selectedSlide.title}</h2>
            <video src={activeVideo.video} controls autoPlay />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSlider;
