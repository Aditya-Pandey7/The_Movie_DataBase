import { lazy, Suspense } from "react";
import trendingBG from "../../../../../public/trending-bg.svg";
import Header from "./components/header/Header";
const Scroller = lazy(() => import("./components/scroller/Scroller"));
import type { IContentProps } from "./type";
import type { IScroller } from "@/types/types";
import ScrollerSkeleton from "./components/scroller/ScrollerSkeleton";
function Content<T extends IScroller>({
  value,
  onChange,
  title,
  selector,
  data,
  isLoading,
}: IContentProps<T>) {
  const result = data?.results;
  return (
    <section className="py-7 ">
      <div
        className="width-stack bg-no-repeat  bg-position-[50%_80%] "
        style={
          title === "Trending"
            ? { backgroundImage: `url(${trendingBG})` }
            : undefined
        }
      >
        <Header
          title={title}
          value={value}
          onChange={onChange}
          selector={selector}
        />
        <Suspense fallback={<ScrollerSkeleton />}>
          <Scroller data={result} isLoading={isLoading} />
        </Suspense>
      </div>
    </section>
  );
}

export default Content;
