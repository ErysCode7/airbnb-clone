import { MediumCard } from "@/globals/components/card/medium-card";
import { CardsData } from "@/globals/types/types";

type Props = {
  cardsData: CardsData[];
};

const Live = ({ cardsData }: Props) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {cardsData?.map((card) => {
          return <MediumCard key={card.title} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Live;
