import Story from "../story";
import stories from "./stories.json";

type StoryProps = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  video: string;
};
type StoriesSectionProps = {
  openVideo: (url: string, storyId: number) => void;
  viewedStories: Record<number, boolean>;
};

export default function StoriesSection({
  openVideo,
  viewedStories,
}: StoriesSectionProps) {
  return (
    <div className="flex flex-row p-4 space-x-6 overflow-hidden overflow-x-scroll scrollbar-hide scroll-smooth shadow-md">
      {stories.users.map((story: StoryProps) => (
        <Story
          key={story.id}
          img={story.avatar}
          username={story.first_name}
          openVideo={(url: string) => openVideo(url, story.id)}
          videoUrl={story.video}
          isViewed={viewedStories[story.id] || false}
        />
      ))}
    </div>
  );
}
