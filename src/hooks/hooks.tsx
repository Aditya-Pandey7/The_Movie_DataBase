import { useQuery } from "@tanstack/react-query";
import { fetchFromTMDB } from "../api/confige";
import type { IMovie, IScroller, ITmdbResponse } from "@/types/types";
import type { IMovieDetails, ITvDetails } from "@/pages/detailedpage/type";

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

type TMDBType = "movie" | "tv" | "person";

type DetailedData = { movie: IMovieDetails; tv: ITvDetails; person: unknown };
export function useFetchDetails<T extends TMDBType>(type: T, id?: string) {
  return useQuery<DetailedData[T]>({
    queryKey: ["details", type, id],
    queryFn: () => fetchFromTMDB(`/${type}/${id}`, { language: "en-US" }),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// hook to fetch credits
import type { ICreditsResponse } from "@/pages/detailedpage/components/contentWrapper/components/seriesCast/type";

type TMDBMediaType = "movie" | "tv";

export function useFetchCredits(type: TMDBMediaType, id?: string) {
  return useQuery<ICreditsResponse>({
    queryKey: ["credits", type, id],
    queryFn: () =>
      fetchFromTMDB(`/${type}/${id}/credits`, {
        language: "en-US",
      }),
    enabled: !!id,
    staleTime: 1000 * 60 * 10, // 10 min cache
  });
}
