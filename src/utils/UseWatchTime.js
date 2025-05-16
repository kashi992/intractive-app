import { useEffect, useRef } from "react";

const UseWatchTime = (videoRef, videoId) => {
  const watchStartRef = useRef(null);
  const watchedTimeRef = useRef(0);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime ?? 0;
    const lastTime = watchStartRef.current ?? currentTime;
    const delta = currentTime - lastTime;

    if (delta > 0) {
      watchedTimeRef.current += delta;
      watchStartRef.current = currentTime;
    }
  };

  const handleSendWatchTime = async () => {
    const watchTime = watchedTimeRef.current;
    const duration = videoRef.current?.duration;

    try {
      const ipRes = await fetch("https://ipinfo.io/json?token=0451d8a1ae05e5");
      const ip = (await ipRes.json()).ip;

      await fetch("https://db30bn6w66.execute-api.us-east-1.amazonaws.com/prod/trackWatchTime", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoId,
          watchTime,
          videoDuration: duration,
          ip,
          timestamp: new Date().toISOString(),
        }),
      });

      console.log(`[WatchTime] Submitted: ${videoId}, ${watchTime}s`);
    } catch (err) {
      console.error("Watch time submission error:", err);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleSendWatchTime);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleSendWatchTime);
      handleSendWatchTime(); // also on unmount
    };
  }, [videoId]);
};

export default UseWatchTime;
