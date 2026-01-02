import { Search } from "lucide-react";

function Searchbar() {
  return (
    <section className="py-3">
      <div className="width-stack flex gap-2 items-center ">
        <Search size={20} strokeWidth={3} />
        <input
          className="w-full italic ring-0  focus:outline-none focus:ring-0 text-muted-foreground caret-black"
          type="text"
          placeholder="Search for a movie , tv show, person..."
        />
      </div>
    </section>
  );
}

export default Searchbar;
