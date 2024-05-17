import * as React from "react";
import axios from "axios";
import clsx from "clsx";

export function SpotifyCard({ display }: { display: string }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/getSpotify.json");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    // <a
    //   target="_blank"
    //   rel="noopener noreferer"
    //   href={
    //     data?.isPlaying
    //       ? data.songUrl
    //       : "https://open.spotify.com/user/vwg28n9kqnigrvv34x96si8a6"
    //   }
    //   className={clsx(
    //     display,
    //     "cursor-pointer",
    //     "relative w-fit max-w-xs",
    //     "m-auto p-4",
    //     "items-center gap-4",
    //     "border__color rounded-md",
    //     "lg:w-52"
    //   )}
    // >
    //   <div className="w-16">
    //     {data?.isPlaying ? (
    //       <Image
    //         className="h-auto w-auto"
    //         src={data.albumImageUrl}
    //         alt={data.album}
    //         width={64}
    //         height={64}
    //         priority
    //       />
    //     ) : (
    //       <SiSpotify size={64} color={"#1ED760"} />
    //     )}
    //   </div>

    //   <div className="flex-1">
    //     <p className="font-medium leading-tight">
    //       {data?.isPlaying ? data.title : "Not Listening"}
    //     </p>
    //     <p className="mt-1 text-xs">
    //       {data?.isPlaying ? data.artist : "Spotify"}
    //     </p>
    //   </div>
    //   <div className="absolute bottom-1.5 right-1.5">
    //     <SiSpotify size={20} color={"#1ED760"} />
    //   </div>
    // </a>
    <>spotify</>
  );
}
