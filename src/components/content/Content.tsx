import Header from "./components/header/Header";
import Scroller from "./components/scroller/Scroller";
import type { IContentProps } from "./type";
function Content<T>({
  value,
  onChange,
  title,
  selector,
  data,
}: IContentProps<T>) {
  const result = data?.results;
  console.log("result ", result);
  return (
    <section className="py-7">
      <div className="width-stack">
        <Header
          title={title}
          value={value}
          onChange={onChange}
          selector={selector}
        />
        <Scroller data={result} />
      </div>
    </section>
  );
}

export default Content;
