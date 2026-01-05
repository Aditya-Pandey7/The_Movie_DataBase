import { useQuery } from "@tanstack/react-query";
import { fetchFromTMDB } from "../api/confige";
import type { IMovie, IScroller, ITmdbResponse } from "@/types/types";
import type { ITvDetails } from "@/pages/detailedpage/type";

export const useFetchMovie = () => {
  return useQuery<ITmdbResponse<IMovie>>({
    queryKey: ["movies"],
    queryFn: () =>
      fetchFromTMDB("/movie/popular", { language: "en-US", page: 1 }),
  });
};

export const useFetchTrending = (time: string) => {
  return useQuery<ITmdbResponse<IScroller>>({
    queryKey: ["trending", time],
    queryFn: (): Promise<ITmdbResponse<IScroller>> =>
      fetchFromTMDB(`/trending/all/${time}`, { language: "en-US" }),
  });
};

export const useFetchFreeToWatch = (type: string) => {
  return useQuery<ITmdbResponse<IScroller>>({
    queryKey: ["freeToWatch", type],
    queryFn: (): Promise<ITmdbResponse<IScroller>> =>
      fetchFromTMDB(`/${type}/popular`, { language: "en-US", page: 1 }),
  });
};

export const useFetchSearchResults = (query: string) => {
  return useQuery<ITmdbResponse<IScroller>>({
    queryKey: ["searchResults", query],
    queryFn: (): Promise<ITmdbResponse<IScroller>> =>
      fetchFromTMDB("/search/multi", { language: "en-US", query, page: 1 }),
  });
};

export const useFetchDetails = (type: string, id: string) => {
  return useQuery<ITvDetails>({
    queryKey: ["details", type, id],
    queryFn: (): Promise<ITvDetails> =>
      fetchFromTMDB(`/${type}/${id}`, { language: "en-US" }),
  });
};
