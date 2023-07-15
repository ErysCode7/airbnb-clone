import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

type Props = {};

type SelectionRange = {
  selection: {
    startDate: Date;
    endDate: Date;
  };
};

const Header = (props: Props) => {
  const router = useRouter();

  const dateToday = new Date();

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(dateToday);
  const [endDate, setEndDate] = useState(dateToday);
  const [noOfGuests, setNoOfGuests] = useState<number>(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: SelectionRange | any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });

    // setSearchInput("");
  };

  return (
    <header className="sticky top-0 bg-white z-50 grid grid-cols-3 shadow-md p-5 md:px-10">
      {/* LOGO */}
      <div
        onClick={() => router.push("/")}
        className="relative h-10 lg:cursor-pointer"
      >
        <Image
          src={"https://links.papareact.com/qd3"}
          alt={"logo"}
          fill
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* SEARCH */}
      <form
        onSubmit={handleSearch}
        className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm"
      >
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          name="search-input"
          id="search-input"
          placeholder={`Start your Search`}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 lg:cursor-pointer md:mx-2" />
      </form>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline lg:cursor-pointer md:text-sm lg:text-base">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 lg:cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto my-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={dateToday}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              name="no-of-guest"
              id="no-of-guest"
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(parseInt(e.target.value))}
            />
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={resetInput}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={handleSearch}
              className="flex-grow text-red-500"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
