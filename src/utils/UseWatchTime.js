import { useEffect, useRef } from "react";

const UseWatchTime = (videoRef, videoId, shouldTrack = true) => {
  const watchStartRef = useRef(null);
  const watchedTimeRef = useRef(0);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime ?? 0;

    if (watchStartRef.current === null) {
      watchStartRef.current = currentTime;
      return;
    }

    const delta = currentTime - watchStartRef.current;

    if (delta > 0) {
      watchedTimeRef.current += delta;
      watchStartRef.current = currentTime;
    }

    console.log("⏰ timeupdate | delta:", delta, "| currentTime:", currentTime);
  };

  const handleSendWatchTime = async () => {
    const watchTime = watchedTimeRef.current;
    const video = videoRef.current;

    if (!watchTime || watchTime < 5) {
      console.warn("⏱ Skipping short watch time:", watchTime);
      return;
    }

    if (!video || !video.duration) {
      console.warn("❌ Video or duration not available.");
      return;
    }

    const duration = video.duration;

    try {
      const ipRes = await fetch("https://ipinfo.io/json?token=0451d8a1ae05e5");
      const ip = (await ipRes.json()).ip;

      const response = await fetch("https://db30bn6w66.execute-api.us-east-1.amazonaws.com/prod/trackWatchTime", {
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
      const result = await response.text();
      console.log("✅ Watch time API response:", response.status, result);
    } catch (err) {
      console.error("Watch time submission error:", err);
    }
  };

  useEffect(() => {
    if (!shouldTrack) return;

    const timeoutId = setTimeout(() => {
      const video = videoRef.current;
      if (!video) {
        console.warn("❌ useWatchTime: videoRef.current still null after delay!");
        return;
      }

      console.log("🟢 UseWatchTime activated for", videoId);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("ended", handleSendWatchTime);

      // Optional: Track tab close or page hide
      window.addEventListener("beforeunload", handleSendWatchTime);
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          handleSendWatchTime();
        }
      });

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("ended", handleSendWatchTime);
        window.removeEventListener("beforeunload", handleSendWatchTime);
        handleSendWatchTime(); // Final fallback
      };
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [videoId, shouldTrack]);
};

export default UseWatchTime;
