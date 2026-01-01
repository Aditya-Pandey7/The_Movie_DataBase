const baseUrl = "https://image.tmdb.org/t/p";
const getTmdbImage = (
  path: string | null,
  size: "w92" | "w154" | "w342" | "w500" | "w780" | "original" = "w342"
) => {
  if (!path) return "/placeholder.png";
  return `${baseUrl}/${size}${path}`;
};
export default getTmdbImage;
