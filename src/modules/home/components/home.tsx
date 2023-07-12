import { ExploreData } from "@/globals/types/types";
import Banner from "./banner";
import Explore from "./explore";

type Props = {
  exploreData: ExploreData[];
};

const Home = ({ exploreData }: Props) => {
  return (
    <div>
      {/* BANNER HERO */}
      <Banner />

      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore exploreData={exploreData} />
      </div>
    </div>
  );
};

export default Home;
