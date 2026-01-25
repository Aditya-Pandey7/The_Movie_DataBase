import "./index.css";
import { useParams } from "react-router-dom";

import DetailedOverview from "./components/detailedOverview/DetailedOverview";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import DetailedOverviewSkeleton from "./components/skeletons/detailedOverviewSkeleton";

import { useFetchCredits, useFetchDetails } from "@/hooks/hooks";

type RouteParams = {
  type: "tv" | "movie";
  id: string;
};

function Detailedpage() {
  const { type, id } = useParams<RouteParams>();
  const safeType = type === "movie" || type === "tv" ? type : "movie";
  const { data: detailedData, isLoading } = useFetchDetails(safeType, id);
  const credits = useFetchCredits(safeType, id);

  return (
    <div>
      {isLoading ? (
        <DetailedOverviewSkeleton />
      ) : (
        detailedData && (
          <DetailedOverview type={safeType} detailedData={detailedData} />
        )
      )}

      {detailedData && (
        <ContentWrapper detailedData={detailedData} credits={credits} />
      )}
    </div>
  );
}

export default Detailedpage;
