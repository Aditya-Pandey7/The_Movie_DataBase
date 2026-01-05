import { useFetchDetails } from "@/hooks/hooks";
import "./index.css";
import { useParams } from "react-router-dom";

import DetailedOverview from "./components/detailedOverview/DetailedOverview";

function Detailedpage() {
  const { type, id } = useParams();

  const {
    data: detailedData,
    isLoading,
    isError,
  } = useFetchDetails(type as string, id as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <DetailedOverview detailedData={detailedData} />
    </div>
  );
}

export default Detailedpage;
