const DetailedOverviewSkeleton = () => {
  return (
    <div className="py-10 bg-center bg-no-repeat bg-red-200">
      <section className="width-stack flex animate-pulse">
        {/* Poster Skeleton */}
        <div>
          <div className="rounded-sm min-w-75 min-h-127.5 bg-gray-700" />
        </div>

        {/* Right Content */}
        <div className="pl-10 flex flex-col justify-center text-white w-full">
          {/* Title */}
          <div>
            <div className="h-10 w-3/4 bg-gray-600 rounded mb-3" />

            {/* Meta Info */}
            <div className="flex gap-2 mt-2">
              <div className="h-6 w-14 bg-gray-500 rounded" />
              <div className="h-6 w-40 bg-gray-500 rounded" />
              <div className="h-6 w-16 bg-gray-600 rounded" />
            </div>
          </div>

          {/* Score Section */}
          <div className="mt-6 flex items-center">
            <div className="size-17 rounded-full bg-gray-600 flex items-center justify-center">
              <div className="size-15 rounded-full bg-gray-700" />
            </div>

            <div className="ml-2">
              <div className="h-4 w-12 bg-gray-600 rounded mb-1" />
              <div className="h-4 w-12 bg-gray-600 rounded" />
            </div>

            <div className="ml-4 h-10 w-40 bg-gray-600 rounded-4xl" />
          </div>

          {/* Action Icons */}
          <ul className="mb-5 space-x-5 flex mt-4">
            <li className="size-11.5 bg-gray-600 rounded-full" />
            <li className="size-11.5 bg-gray-600 rounded-full" />
            <li className="size-11.5 bg-gray-600 rounded-full" />
            <li className="flex items-center gap-2">
              <div className="size-4 bg-gray-600 rounded" />
              <div className="h-4 w-24 bg-gray-600 rounded" />
            </li>
          </ul>

          {/* Tagline */}
          <div className="h-5 w-1/2 bg-gray-600 rounded mb-5" />

          {/* Overview */}
          <div className="h-6 w-32 bg-gray-600 rounded mb-3" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-600 rounded" />
            <div className="h-4 w-full bg-gray-600 rounded" />
            <div className="h-4 w-3/4 bg-gray-600 rounded" />
          </div>

          {/* Creator Section (TV) */}
          <ol className="mt-5 flex gap-5">
            {[1, 2].map((i) => (
              <li key={i} className="flex flex-col min-w-80.75">
                <div className="h-4 w-32 bg-gray-600 rounded mb-2" />
                <div className="h-3 w-16 bg-gray-600 rounded" />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default DetailedOverviewSkeleton;
