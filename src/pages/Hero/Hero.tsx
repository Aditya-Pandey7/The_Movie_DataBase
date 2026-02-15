import { useState } from "react";

import {
  useFetchFreeToWatch,
  useFetchLatestTrailer,
  useFetchTrending,
  useFetchTvSeries,
} from "@/hooks/hooks";
import Searchbar from "./components/searchbar/Searchbar";
import Welcome from "@/components/welcome/Welcome";
import Content from "./components/content/Content";
import JoinToday from "./components/join/JoinToday";
import LatestTrailer from "./components/latestTrailer/LatestTrailer";

const trendingSelector = [
  { label: "Today", value: "day" },
  { label: "This Week", value: "week" },
];
const freeToWatchSelector = [
  { label: "Movie", value: "movie" },
  { label: "Tv", value: "tv" },
];
const tvSeriesSelector = [
  { label: "Airing Today", value: "airing_today" },
  { label: "On The Air", value: "on_the_air" },
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
];

function Hero() {
  const [time, setTime] = useState("day");
  const [freeToWatchType, setFreeToWatchType] = useState("movie");
  const [tvSeriesType, setTvSeriesType] = useState("airing_today");
  const { data: trendingData, isLoading: trendingLoading } =
    useFetchTrending(time);
  const { data: panelData, isLoading: freeToWatchLoading } =
    useFetchFreeToWatch(freeToWatchType);

  const { data: tvSeriesData, isLoading: tvSeriesLoading } =
    useFetchTvSeries(tvSeriesType);

  const { data: latestTrailerData, isLoading: latestTrailerLoading } =
    useFetchLatestTrailer();

  return (
    <section>
      <div>
        <Searchbar />
        <Welcome />
      </div>
      <Content
        isLoading={trendingLoading}
        value={time}
        onChange={setTime}
        title="Trending"
        selector={trendingSelector}
        data={trendingData}
      />
      <LatestTrailer
        data={latestTrailerData?.results}
        isLoading={latestTrailerLoading}
      />
      <Content
        isLoading={freeToWatchLoading}
        value={freeToWatchType}
        onChange={setFreeToWatchType}
        title="Free To Watch"
        selector={freeToWatchSelector}
        data={panelData}
      />
      <Content
        isLoading={tvSeriesLoading}
        value={tvSeriesType}
        onChange={setTvSeriesType}
        title="Tv Series"
        selector={tvSeriesSelector}
        data={tvSeriesData}
      />

      <JoinToday />
    </section>
  );
}

export default Hero;
