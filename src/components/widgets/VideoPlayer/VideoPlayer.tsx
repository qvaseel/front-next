import Image from "next/image";
import preview from "/public/video/preview.webp";
import play from "/public/video/play.svg";
import { useEffect, useRef, useState } from "react";

interface IVideoPlayer {
  sec: string;
}

const VideoPlayer = ({ sec }: IVideoPlayer) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  function playVideo() {
    if (videoPlayerRef.current) {
      setHidden(true);
      videoPlayerRef.current.play();
    }
  }

  useEffect(() => {
    const handlePlay = () => {
      setHidden(true);
    };

    const videoElement = videoPlayerRef.current;
    if (videoElement) {
      videoElement.addEventListener("play", handlePlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlay);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`${
          hidden ? "hidden" : ""
        } bg-black bg-opacity-50 rounded-full text-white text-base px-4 py-2 absolute z-40 top-6 left-6
                            max-[900px]:text-sm max-sm:text-xs max-sm:top-4 max-sm:left-4 max-[500px]:text-[8px] max-[500px]:px-2 max-[500px]:py-1 max-[500px]:top-2 max-[500px]:left-2`}
      >
        Время просмотра {sec} секунд
      </div>
      <button
        id="videobtn"
        className={`${
          hidden ? "hidden" : ""
        } w-[100px] h-[100px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#624AFF] z-[49] flex flex-col items-center justify-center cursor-pointer max-[900px]:w-[50px] max-[900px]:h-[50px] max-[400px]:w-[25px] max-[400px]:h-[25px]`}
        onClick={playVideo}
      >
        <Image
          src={play}
          alt="play"
          className="max-[900px]:w-[20px] max-[900px]:ml-[3px] max-[400px]:w-[10px]"
        />
      </button>
      <video
        ref={videoPlayerRef}
        id="videoplayer"
        className="w-full rounded-[20px]"
        poster={preview.src}
        controls
      >
        <source src="./video/tltProTeam.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
