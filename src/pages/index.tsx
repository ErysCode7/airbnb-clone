import { CardsData, ExploreData } from "@/globals/types/types";
import { Home } from "@/modules/home";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  exploreData: ExploreData[];
  cardsData: CardsData[];
};

const HomePage: NextPage<Props> = ({ exploreData, cardsData }) => {
  return (
    <>
      <Home exploreData={exploreData} cardsData={cardsData} />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const [exploreData, cardsData] = await Promise.all([
    fetch("https://www.jsonkeeper.com/b/4G1G").then((response) =>
      response.json()
    ),
    fetch("https://www.jsonkeeper.com/b/VHHT").then((response) =>
      response.json()
    ),
  ]);

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
