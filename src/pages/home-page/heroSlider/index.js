import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./index.css";
import img1 from "../../../assets/images/heroLogo1.png";
import img2 from "../../../assets/images/heroLogo2.png";
import img3 from "../../../assets/images/heroLogo3.png";
import img4 from "../../../assets/images/heroLogo4.png";
import img5 from "../../../assets/images/heroLogo5.png";
import img6 from "../../../assets/images/heroLogo6.png";
import thumbnail1 from "../../../assets/images/thumbnail.png";
import vis1 from "../../../assets/images/visionThumb.png";
import collabThumb1 from "../../../assets/images/collabThumb1.png";
import cm2 from "../../../assets/images/constructionMethology2.JPEG";
import crossIcon from "../../../assets/images/crossIcon.png";
import crossBlack from "../../../assets/images/crossBlack.png";

// Video URLs
const dummy1 = "https://cpb-uglsolution-videos.s3.us-east-1.amazonaws.com/dumy.mp4";
const constructionMyVideo = "https://cpb-uglsolution-videos.s3.us-east-1.amazonaws.com/Rozelle_Anim_preview_6.mp4";
const mfv1 = "https://cpb-uglsolution-videos.s3.us-east-1.amazonaws.com/dharug_country_2_1.mp4";
const collabVideo1 = "https://cpb-uglsolution-videos.s3.us-east-1.amazonaws.com/241216_SydneyMetro_test_v04b.mp4";

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
    },
    {
      id: 2,
      image: img4,
      title: "Safety",
      videos: [{ id: 1, video: dummy1, thumbnail: thumbnail1, thumbnail_one: false }],
    },
    {
      id: 3,
      image: img3,
      title: "Interface and Integration",
      videos: [{ id: 1, video: collabVideo1, thumbnail: collabThumb1, thumbnail_one: true }],
    },
    {
      id: 4,
      image: img2,
      title: "Construction Methodology",
      videos: [{ id: 1, video: constructionMyVideo, thumbnail: cm2, text: "4D Construction Methodology", thumbnail_one: true }],
    },
    {
      id: 5,
      image: img6,
      title: "Social Inclusion",
      videos: [{ id: 1, video: dummy1, thumbnail: thumbnail1, thumbnail_one: true }],
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
    setIsPlaying(false); // Stop video playback
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
      setIsPlaying(true);
    }
  };

  return (
    <section className="heroWrap">
      <div className="container">
        {viewState === "slider" && (
          <Swiper
            grabCursor
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
              0: { slidesPerView: 1, slidesPerGroup: 1, centeredSlides: false },
              575: { slidesPerView: 3, spaceBetween: 50, centeredSlides: false },
              999: { slidesPerView: 3, spaceBetween: 60, centeredSlides: false },
              1200: { slidesPerView: 4, spaceBetween: 80, slidesPerGroup: 3 },
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
                    <img src={slide.image} alt={Slide ${slide.id}} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {viewState === "thumbnails" && selectedSlide && (
          <div className="thumbnailsView h-full relative flex flex-col justify-center">
            <div className="thumbnails grid relative lg:grid-cols-2 grid-cols-1 gap-8 items-center">
              <button className="backButton" onClick={handleBackToSlider}>
                <img src={crossIcon} alt="Back" className="w-10 h-10" />
              </button>
              {selectedSlide.videos.map((video) => (
                <div
                  key={video.id}
                  className="thumbnail cursor-pointer"
                  onClick={() => handleThumbnailClick(video)}
                >
                  <LazyLoadImage
                    src={video.thumbnail}
                    alt={Thumbnail ${video.id}}
                    effect="blur"
                    className="w-full h-auto"
                  />
                  <p className="text-center text-white mt-2">{video.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewState === "video" && activeVideo && (
          <div className="videoView">
            <video ref={videoRef} className="w-full h-auto" src={activeVideo.video} controls />
            <button className="backButton" onClick={handleBackToThumbnails}>
              <img src={crossIcon} alt="Back" className="w-10 h-10" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSlider;