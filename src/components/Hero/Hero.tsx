import { useState } from "react";
import Content from "../content/Content";
import Welcome from "../welcome/Welcome";
import { useFetchTrending } from "@/hooks/hooks";

function Hero() {
  const [time, setTime] = useState("day");
  const { data } = useFetchTrending(time);
  console.log("data : ", data);
  return (
    <section>
      <Welcome />
      <Content
        value={time}
        onChange={setTime}
        title="Trending"
        selector={[
          { label: "Today", value: "day" },
          { label: "This Week", value: "week" },
        ]}
        data={data}
      />
    </section>
  );
}

export default Hero;
