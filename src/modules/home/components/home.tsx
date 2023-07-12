import { LargeCard } from "@/globals/components/card/large-card";
import { CardsData, ExploreData } from "@/globals/types/types";
import Banner from "./banner";
import Explore from "./explore-section";
import Live from "./live-section";

type Props = {
  exploreData: ExploreData[];
  cardsData: CardsData[];
};

const Home = ({ exploreData, cardsData }: Props) => {
  return (
    <div>
      {/* BANNER HERO */}
      <Banner />

      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        {/*  EXPLORE */}
        <Explore exploreData={exploreData} />

        {/*  LIVE */}
        <Live cardsData={cardsData} />

        {/*  Large Card */}
        <section>
          <LargeCard
            img={"https://links.papareact.com/4cj"}
            title={"The Greatest Outdoors"}
            description={"Wishlists curated by Airbnb."}
            buttonText={"Get Inspired"}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
