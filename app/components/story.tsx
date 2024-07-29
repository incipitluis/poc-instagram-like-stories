import { Button } from "@/components/ui/button";
import Image from "next/image";

const Story = ({
  img,
  username,
  openVideo,
  videoUrl,
  isViewed,
}: {
  img: string;
  username: string;
  openVideo: (url: string) => void;
  videoUrl: string;
  isViewed: boolean;
}) => {
  const handleClick = () => {
    openVideo(videoUrl);
  };
  return (
    <div className="flex flex-col">
      <Button
        variant={"instagram"}
        size={"instagram"}
        className={`bg-gradient-to-tr from-yellow-500 to-red-600 ${
          isViewed ? "opacity-50" : "opacity-100"
        }`}
        onClick={handleClick}
      >
        <div className="h-14 w-14 rounded-full overflow-hidden mx-auto bg-white p-1">
          <Image
            height={56}
            width={56}
            src={img}
            alt="user avatar"
            className="rounded-full overflow-hidden"
          />
        </div>
      </Button>
      <div className="text-xs w-16 text-center truncate">
        <p>{username}</p>
      </div>
    </div>
  );
};

export default Story;
