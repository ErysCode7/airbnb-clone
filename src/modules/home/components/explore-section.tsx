import { SmallCard } from "@/globals/components/card/small-card";
import { ExploreData } from "@/globals/types/types";

type Props = {
  exploreData: ExploreData[];
};

const Explore = ({ exploreData }: Props) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

      {/* SMALL CARD */}
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map((data) => {
          return <SmallCard key={data.img} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Explore;
