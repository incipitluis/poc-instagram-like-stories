"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

type FullScreenVideoProps = {
  videoUrl: string;
  closeVideo: () => void;
};

export default function FullScreenVideo({
  videoUrl,
  closeVideo,
}: FullScreenVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handlePointerDown = (event: React.PointerEvent) => {
    if (containerRef.current) {
      containerRef.current.setPointerCapture(event.pointerId);
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(event.pointerId);
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleClose = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      closeVideo();
    }, 500);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    const timer = setTimeout(() => {
      closeVideo();
    }, 20000);

    return () => clearTimeout(timer);
  }, [videoUrl, closeVideo]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black ${
        isFadingOut ? "fade-out" : "fade-in"
      }`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-1 bg-red-500 animate-progress"
          ></div>
        </div>
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          playsInline
        ></video>
      </div>
      <Button
        onClick={handleClose}
        className="absolute bottom-4 left-4 text-white"
      >
        Close
      </Button>
    </div>
  );
}
