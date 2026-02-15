import type { IScroller } from "@/types/types";
import getTmdbImage from "@/utils/getTmdbImages";
import { useState } from "react";
const trailers = [
  {
    id: 1,
    title: "Scream 7",
    subtitle: "Prepare To Scream",
    image:
      "https://image.tmdb.org/t/p/original/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg",
  },
  {
    id: 2,
    title: "GOAT",
    subtitle: "It's game time! GOAT is now playing!",
    image:
      "https://image.tmdb.org/t/p/original/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
  },
  {
    id: 3,
    title: "Hoppers",
    subtitle: "Hoppy Valentines",
    image:
      "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  },
  {
    id: 4,
    title: "Supergirl",
    subtitle: "You had me at woof.",
    image:
      "https://image.tmdb.org/t/p/original/q719jXXEzOoYaps6babgKnONONX.jpg",
  },
  {
    id: 5,
    title: "Supergirl",
    subtitle: "You had me at woof.",
    image:
      "https://image.tmdb.org/t/p/original/q719jXXEzOoYaps6babgKnONONX.jpg",
  },
  {
    id: 6,
    title: "Supergirl",
    subtitle: "You had me at woof.",
    image:
      "https://image.tmdb.org/t/p/original/q719jXXEzOoYaps6babgKnONONX.jpg",
  },
];

function LatestTrailer({
  data,
  isLoading,
}: {
  data?: IScroller[] | undefined;
  isLoading?: boolean;
}) {
  const [bgImage, setBgImage] = useState(trailers[0].image);

  if (isLoading) {
    return <div className="h-96 w-full bg-gray-800 animate-pulse"></div>;
  }

  return (
    <div
      className=" relative overflow-hidden transition-all duration-500"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10  width-stack ">
        {/* Top Section */}
        <h2 className={`text-white mr-5 font-semibold text-2xl mt-10`}>
          Latest Trailers
        </h2>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-16 py-6">
          {data?.map((movie) => (
            <div
              key={movie.id}
              onMouseEnter={() =>
                setBgImage(getTmdbImage(movie.backdrop_path, "original"))
              }
              className="w-75 h-42 relative rounded-xl shrink-0 overflow-hidden cursor-pointer group"
            >
              <img
                src={getTmdbImage(movie.backdrop_path, "original")}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                  ▶
                </div>
              </div>

              {/* Text */}
              <div className=" w-full text-white absolute bottom-0 left-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                <h3 className="text-white text-sm font-semibold">
                  {movie.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestTrailer;
