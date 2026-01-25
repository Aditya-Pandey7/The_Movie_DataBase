import type { useFetchCredits } from "@/hooks/hooks";
import type { DetailedData } from "../../type";
import MovieInfo from "./components/movieInfo/MovieInfo";
import SeriesCast from "./components/seriesCast/SeriesCast";

interface ContentWrapperProps {
  detailedData: DetailedData;
  credits: ReturnType<typeof useFetchCredits>;
}

function ContentWrapper({ detailedData, credits }: ContentWrapperProps) {
  return (
    <section className="width-stack-xy flex justify-between">
      <div className="overflow-hidden mr-7">
        <SeriesCast credits={credits} />
      </div>
      <div className="min-w-65">
        <MovieInfo detailedData={detailedData} />
      </div>
    </section>
  );
}

export default ContentWrapper;
