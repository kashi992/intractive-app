import React, { useState, useRef } from "react";
import crossIcon from "../../../assets/images/crossIcon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import playBtn from "../../../assets/images/playBtn.png";
import { useNavigate } from "react-router-dom";

const ConstructionMethodology = () => {
    const [viewState, setViewState] = useState("thumbnail"); // States: "thumbnail", "video"
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(''); // Controls playback state
    const videoRef = useRef(null);
    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Play the video
            setIsPlaying(true); // Set playback state to true
        }
    };

    return (
        <>
            {viewState === "thumbnail" && (
                <div className="thumbnailsView h-full relative flex flex-col justify-center">
                    <div className="thumbnails grid relative grid-cols-1 gap-8 items-center mx-auto">
                        {/* Back Button */}
                        <div
                            className="backButton absolute top-0 right-0 md:translate-x-[150%] md:translate-y-[0%] translate-y-[-150%] flex items-center justify-end cursor-pointer"
                            onClick={() => navigate("/home")}
                        >
                            <img
                                src={crossIcon}
                                alt="Back"
                                className="min-[1680px]:w-[80px] min-[1680px]:h-[80px] min-[1370px]:h-[50px] min-[1370px]:w-[50px] w-[40px] h-[40px] rounded-full"
                            />
                        </div>

                        {/* Thumbnail */}
                        <div
                            className={`thumbnail cursor-pointer`}
                            onClick={() => setViewState("video")}
                        >
                            <div className="relative mx-auto w-full">
                                <LazyLoadImage
                                    src="https://cpb-uglsolution-videos.s3.us-east-1.amazonaws.com/Construction_Sequence_Thumbnail.jpg"
                                    alt="Thumbnail vision"
                                    className="w-full min-[1680px]:h-[600px] min-[1370px]:h-[450px] md:h-[350px] h-fit object-cover"
                                    effect="blur"
                                />
                                <img
                                    src={playBtn}
                                    alt="Play"
                                    className="absolute top-0 left-0 bottom-0 right-0 pointer-events-none m-auto min-[1370px]:w-[110px] w-[80px]"
                                />
                            </div>
                            <p className="sf min-[1680px]:text-[30px] min-[1370px]:text-[24px] text-[18px] text-white text-center min-[1370px]:mt-5 mt-2 font-bold">
                            The Bays - 4D Construction Methodology
                            </p>
                        </div>
                    </div>
                    <h2 className="min-[1680px]:text-[40px] min-[1370px]:text-[30px] text-[20px] text-[#4ec0b0] md:text-3xl text-xl font-bold text-center min-[1600px]:mt-6 min-[1370px]:mt-4 lg:mt-3 mt-4">
                    Construction Methodology
                    </h2>
                </div>
            )}

            {viewState === "video" && (
                <div className="videoView h-full relative flex flex-col justify-center">
                    <div className="relative min-[1680px]:w-[65%] min-[1200px]:w-[55%] w-full mx-auto">
                        {/* Video Player */}
                        <video
                        ref={videoRef}
                            className="w-full h-full custom-video-player"
                            src="https://cpb-uglsolution-videos.s3.us-east-1.amazonaws.com/Construction_Sequence_feb2025.mp4"
                            controls
                            onClick={() => setIsPlaying(false)}
                            poster="https://cpb-uglsolution-videos.s3.us-east-1.amazonaws.com/Construction_Sequence_Thumbnail.jpg"
                        />
                        {!isPlaying && (
                            <div className={`absolute top-0 right-0 left-0 bottom-0 h-ull w-full flex flex-col`} onClick={handlePlay}>
                                <img
                                    src={playBtn}
                                    alt=""
                                    className="min-[1370px]:w-[110px] md:w-[80px] w-[55px] m-auto"
                                />
                            </div>
                        )}
                        {/* Back Button */}
                        <button
                            className="absolute right-0 min-[1200px]:top-0 top-[-70px] z-10 min-[1200px]:translate-x-[150%]"
                            onClick={() => setViewState("thumbnail")}
                        >
                            <img
                                src={crossIcon}
                                alt="Back"
                                className="min-[1680px]:w-[80px] min-[1680px]:h-[80px] min-[1370px]:h-[50px] min-[1370px]:w-[50px] w-[40px] h-[40px] rounded-full"
                            />
                        </button>
                    </div>

                    {/* Video Title and Description */}
                    <h2 className="sf min-[1370px]:text-4xl text-2xl text-center font-semibold min-[1370px]:mt-6 mt-2 min-[1370px]:mb-3 mb-1 text-[#50beb1]">
                    Construction Methodology
                    </h2>
                    <p className="text-center text-white min-[1680px]:text-[20px] font-semibold text-[18px]">
                    Hear from our Project Director Scott Hunter and Cathy Hayes
                    </p>
                </div>
            )}
        </>
    );
};

export default ConstructionMethodology;
