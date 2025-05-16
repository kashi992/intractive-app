import { useEffect, useRef } from "react";

const UseWatchTime = (videoRef, videoId, shouldTrack = true) => {
  const watchStartRef = useRef(null);
  const watchedTimeRef = useRef(0);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime ?? 0;
    const lastTime = watchStartRef.current ?? currentTime;
    const delta = currentTime - lastTime;

    console.log("⏰ timeupdate | delta:", delta, "| currentTime:", currentTime);

    if (delta > 0) {
      watchedTimeRef.current += delta;
      watchStartRef.current = currentTime;
    }
  };

  const handleSendWatchTime = async () => {
    const watchTime = watchedTimeRef.current;
    const duration = videoRef.current?.duration;

    // Skip sending data if watch time is too short
    if (!watchTime || watchTime < 5) {
      console.warn("⏱ Skipping short watch time:", watchTime);
      return;
    }

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

      console.log("⏱ Sending watch time data:", {
        videoId,
        watchTime,
        duration,
      });
      console.log("📹 Ref status:", videoRef.current);
      console.log(`[WatchTime] Submitted: ${videoId}, ${watchTime.toFixed(2)}s`);
    } catch (err) {
      console.error("Watch time submission error:", err);
    }
  };

  useEffect(() => {
    if (!shouldTrack) return;

    setTimeout(() => {
      const video = videoRef.current;
      if (!video) {
        console.warn("❌ useWatchTime: videoRef.current still null after delay!");
        return;
      }

      console.log("🟢 UseWatchTime activated for", videoId);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("ended", handleSendWatchTime);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("ended", handleSendWatchTime);
        handleSendWatchTime(); // Also submit on unmount
      };
    }, 300); // Slight delay ensures videoRef is ready
  }, [videoId, shouldTrack]);
};

export default UseWatchTime;
