import * as React from "react";
import axios from "axios";
import clsx from "clsx";
import type { SpotifyRespond } from "@/types/spotify";
import { SiSpotify } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ArrowUpRight } from "lucide-react";

const profilUrl =
  "https://open.spotify.com/user/31ylfld3yi6bdgs4ghg3tn6hb2ka?si=778a54b4b6514f03";

export const SpotifyCard: React.FC = (): React.ReactElement => {
  const [data, setData] = React.useState<SpotifyRespond | null>(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/spotify.json");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <a
            target="_blank"
            rel="noopener noreferer"
            href={data?.isPlaying ? data.songUrl : profilUrl}
            className={clsx(
              "cursor-pointer bg-card",
              "relative w-fit max-w-sm",
              "m-auto p-4",
              "items-center gap-4",
              "border border-border rounded-md",
              "lg:w-60 group-[[data-collapsed=true]]:hidden"
            )}
          >
            <div className="w-16">
              {data?.isPlaying ? (
                <div className="flex gap-3">
                  <img
                    className="h-14 w-14"
                    src={data.albumImageUrl}
                    alt={data.album}
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col space-y-1 w-20">
                    <p className="font-medium leading-none">{data.title}</p>
                    <p className="mt-1 text-xs">{data.artist}</p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-3">
                  <span>
                    <SiSpotify size={56} color={"#1ED760"} />
                  </span>
                  <div className="flex flex-col space-y-1 w-20">
                    <p className="font-medium leading-none">Not Listening</p>
                    <p className="mt-1 text-xs">Spotify</p>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute bottom-2 right-2">
              <SiSpotify size={20} color={"#1ED760"} />
            </div>
            <div className="absolute top-2 right-2">
              <ArrowUpRight size={16} />
            </div>
            
          </a>
        </TooltipTrigger>
        <TooltipContent>
          {data?.isPlaying
            ? `Now Playing ${data.title} - ${data.artist}`
            : "My Spotify Profile "}
        </TooltipContent>
      </Tooltip>
      <a
        target="_blank"
        rel="noopener noreferer"
        href={data?.isPlaying ? data.songUrl : profilUrl}
        className={clsx(
          "cursor-pointer",
          "max-w-sm",
          "m-auto p-2",
          "items-center gap-4",
          "border border-border rounded-md",
          "lg:w-60 group-[[data-collapsed=false]]:hidden"
        )}
      >
        <div className="flex">
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <SiSpotify size={24} color={"#1ED760"} />
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={10}>
              {data?.isPlaying
                ? `Now Playing ${data.title}`
                : "My Spotify Profile"}
            </TooltipContent>
          </Tooltip>
        </div>
      </a>
    </TooltipProvider>
  );
};
