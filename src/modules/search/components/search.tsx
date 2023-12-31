import { InfoCard } from "@/globals/components/card/info-card";
import { SearchPageData } from "@/globals/types/types";
import { formatDate } from "@/globals/utils/helper";
import { useRouter } from "next/router";
import { FILTER_OPTIONS } from "../constants";

type Props = {
  searchResults: SearchPageData[];
};

const Search = ({ searchResults }: Props) => {
  const router = useRouter();

  const { location = "", startDate, endDate, noOfGuests = "" } = router.query;

  const formattedStartDate = formatDate(startDate as string);
  const formattedEndDate = formatDate(endDate as string);

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  console.log(searchResults);

  return (
    <section className="flex">
      <div className="flex-grow pt-14 px-6">
        <p className="text-xs">
          300+ Stay - {range} - for {noOfGuests} guests
        </p>

        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in {location}
        </h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          {FILTER_OPTIONS.map((option) => (
            <button key={option.id} type="button" className="button">
              {option.text}
            </button>
          ))}
        </div>

        {/* info card */}
        <div className="flex flex-col">
          {searchResults
            ?.filter((result, index) => index !== 1)
            ?.map((result) => (
              <InfoCard key={result.title} info={result} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
