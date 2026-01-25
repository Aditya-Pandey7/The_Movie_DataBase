import type { DetailedData } from "@/pages/detailedpage/type";
import { Facebook, Instagram, Link, Play } from "lucide-react";

interface MovieInfoProps {
  detailedData: DetailedData;
}

function MovieInfo({ detailedData }: MovieInfoProps) {
  const isMovie = "budget" in detailedData;

  return (
    <aside className="w-95">
      {/* Social Icons */}
      <div className="flex gap-4 mb-6">
        <div className="size-8 rounded-full border flex items-center justify-center">
          <Facebook size={16} />
        </div>
        <div className="size-8 rounded-full border flex items-center justify-center">
          <Instagram size={16} />
        </div>
        <div className="size-8 rounded-full border flex items-center justify-center">
          <Play size={16} />
        </div>
        <div className="size-8 rounded-full border flex items-center justify-center">
          <Link size={16} />
        </div>
      </div>

      {/* Facts */}
      <div className="space-y-4 text-sm">
        <div>
          <p className="font-semibold">Status</p>
          <p className="text-gray-600">{detailedData.status}</p>
        </div>

        <div>
          <p className="font-semibold">Original Language</p>
          <p className="text-gray-600">{detailedData.original_language}</p>
        </div>

        {/* Movie-only fields */}
        {isMovie && (
          <>
            <div>
              <p className="font-semibold">Budget</p>
              <p className="text-gray-600">
                ${detailedData.budget?.toLocaleString() || "N/A"}
              </p>
            </div>

            <div>
              <p className="font-semibold">Revenue</p>
              <p className="text-gray-600">
                ${detailedData.revenue?.toLocaleString() || "N/A"}
              </p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default MovieInfo;
