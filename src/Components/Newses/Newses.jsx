import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import News from "./News";
const Newses = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <div>
      <div className="max-w-2xl space-y-3 mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold">News Feeds</h1>
        <p>
          Strategically curated news plays an instrumental role in fostering
          growth and development. Keeping abreast of industry trends and
          insightful updates can provide valuable insights to propel your
          business forward.
        </p>
      </div>
      <div className="my-5">
        <Marquee pauseOnHover={true} speed={100}>
          <div className=" flex gap-5">
            {newses.map((news) => (
              <News key={news.id} news={news}></News>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Newses;
