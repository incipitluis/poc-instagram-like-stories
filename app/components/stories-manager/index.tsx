"use client";

import { useState } from "react";
import StoriesSection from "../stories";
import FullScreenVideo from "../full-screen-video";

export default function StoriesManager() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [viewedStories, setViewedStories] = useState<Record<number, boolean>>(
    {}
  );

  const openVideo = (url: string, storyId: number) => {
    setVideoUrl(url);
    setIsVideoOpen(true);
    setViewedStories((prev) => ({
      ...prev,
      [storyId]: true,
    }));
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  return (
    <div>
      <StoriesSection openVideo={openVideo} viewedStories={viewedStories} />
      {isVideoOpen && (
        <FullScreenVideo videoUrl={videoUrl} closeVideo={closeVideo} />
      )}
    </div>
  );
}
