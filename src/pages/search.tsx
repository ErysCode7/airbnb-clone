import { SearchPageData } from "@/globals/types/types";
import { Search } from "@/modules/search";
import type { GetServerSideProps, NextPage } from "next";

type Props = {
  searchResults: SearchPageData[];
};

const SearchPage: NextPage<Props> = ({ searchResults }) => {
  return (
    <>
      <Search searchResults={searchResults} />
    </>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`https://www.jsonkeeper.com/b/5NPS`);
  const data = await response.json();

  return {
    props: {
      searchResults: data,
    },
  };
};
