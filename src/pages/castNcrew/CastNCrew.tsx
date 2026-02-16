import { useFetchCredits, useFetchDetails } from "@/hooks/hooks";
import CastColumn from "./components/castColumn/CastColumn";
import CrewColumn from "./components/crewColumn/CrewColumn";
import { useNavigate, useParams } from "react-router-dom";
import getTmdbImage from "@/utils/getTmdbImages";
import { format } from "date-fns";
import LoadingDialog from "@/components/loadingDialog/LoadingDialog";
import type { IMovieDetails, ITvDetails } from "@/pages/detailedpage/type";
import { useTheme } from "@/context/theme/ThemeContext";

function CastNCrew() {
  const { theme } = useTheme();
  const { type, id } = useParams<{ type: "movie" | "tv"; id: string }>();
  const navigate = useNavigate();
  const typeSafe: "movie" | "tv" =
    type === "movie" || type === "tv" ? type : "movie";

  const { data, isLoading } = useFetchCredits(typeSafe, id);
  const { data: detailsData, isLoading: isDetailsLoading } = useFetchDetails(
    typeSafe,
    id,
  );

  const title =
    typeSafe === "movie"
      ? (detailsData as IMovieDetails)?.title
      : (detailsData as ITvDetails)?.name;

  const releaseDate =
    typeSafe === "movie"
      ? (detailsData as IMovieDetails)?.release_date
      : (detailsData as ITvDetails)?.first_air_date;

  const year = releaseDate ? format(new Date(releaseDate), "yyyy") : "";

  if (isLoading || isDetailsLoading)
    return <LoadingDialog open={isLoading || isDetailsLoading} />;
  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      {/* Header */}
      <div className=" bg-linear-to-r from-black/80 to-black/40 text-white flex items-center">
        <div className="width-stack  mx-auto w-full  flex items-center gap-4">
          <img
            src={getTmdbImage(detailsData?.poster_path || "")}
            className="rounded w-14.5 h-21.75 object-cover my-4"
          />
          <div>
            <h1 className="text-xl font-semibold">
              The {title} <span className="opacity-70">({year})</span>
            </h1>
            <p
              className="text-sm opacity-70 font-bold cursor-pointer hover:underline"
              onClick={() => navigate(-1)}
            >
              &larr; Back to main
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="width-stack-xy mx-auto px-6 py-10 flex gap-12">
        <CastColumn data={data?.cast ?? []} />
        <CrewColumn data={data?.crew ?? []} />
      </section>
    </div>
  );
}

export default CastNCrew;
