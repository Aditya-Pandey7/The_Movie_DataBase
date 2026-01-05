import { Logs, Heart, Bookmark, Play } from "lucide-react";
import getTmdbImage from "@/utils/getTmdbImages";
import { format } from "date-fns";
import type { ITvDetails } from "../../type";
function DetailedOverview({ detailedData }: { detailedData: ITvDetails }) {
  const averageVote = (vote: number | undefined) => {
    const value = Math.ceil((vote as number) * 10);
    return value;
  };
  return (
    <div className=" py-10 bg-center bg-no-repeat bg-red-500 ">
      <section className="width-stack  flex">
        <div className=" ">
          <img
            src={getTmdbImage(detailedData?.poster_path || "")}
            alt=""
            className="rounded-sm min-w-75 min-h-127.5"
          />
        </div>
        <div className="pl-10 flex flex-col justify-center text-white">
          <div>
            <h2 className="text-4xl font-semibold">
              {detailedData?.original_name || detailedData?.name}
              <span className="opacity-70 text-normal font-medium ml-2">
                ({format(new Date(detailedData?.first_air_date || ""), "yyyy")})
              </span>
            </h2>
            <div className="flex gap-2">
              <p className="border px-0.5 py-0 border-white text-muted-foreground font-semibold">
                U/A 16+
              </p>
              <p>
                {detailedData?.genres?.map((genre) => genre.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center ">
            <div className="circle primary-bg size-17  rounded-full text-xl font-semibold flex items-center justify-center">
              <div className="green-circle border-4 size-15 border-green-500 rounded-full flex items-center justify-center">
                <div>{averageVote(detailedData?.vote_average)}</div>
                <span className="font-semibold text-[10px] mb-2">%</span>
              </div>
            </div>
            <div className="font-bold ml-1 ">
              User
              <br />
              Score
            </div>
            <div className="primary-bg py-2  rounded-4xl text-[16px] font-semibold pl-3 pr-2">
              What's your
              <span className="border-b-2 border-blue-400 ml-1">Vibe</span>?
            </div>
          </div>
          <ul className="mb-5 space-x-5 flex mt-2">
            <li className="size-11.5  primary-bg   rounded-full flex justify-center items-center ">
              <Logs size={14} />
            </li>
            <li className="size-11.5   primary-bg rounded-full flex justify-center items-center ">
              {" "}
              <Heart size={14} />
            </li>
            <li className="size-11.5  primary-bg  rounded-full flex justify-center items-center ">
              <Bookmark size={14} />
            </li>
            <li className="flex justify-center items-center ml-1">
              <div>
                <Play size={16} />
              </div>
              <span className="ml-2 font-semibold">Play Trailer</span>
            </li>
          </ul>
          <div>
            <h3 className="text-xl  italic font-normal mb-5 text-muted-foreground">
              {detailedData.tagline}
            </h3>
            <h2 className="my-2 text-xl font-semibold">Overview</h2>
            <p className="text-[16px] font-normal">{detailedData.overview}</p>
            <ol className="mt-5 flex ">
              {detailedData.created_by.map((creator) => (
                <li key={creator.id} className="flex flex-col min-w-80.75">
                  <span className="font-semibold border-b text-sm w-fit">
                    {creator.name}
                  </span>
                  <span className="text-xs mt-1">Creator</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailedOverview;
