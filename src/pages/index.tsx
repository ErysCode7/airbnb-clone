import { ExploreData } from "@/globals/types/types";
import { Home } from "@/modules/home";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  exploreData: ExploreData[];
};

const HomePage: NextPage<Props> = ({ exploreData }) => {
  return (
    <>
      <Home exploreData={exploreData} />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const data = await response.json();

  return {
    props: {
      exploreData: data,
    },
  };
};
