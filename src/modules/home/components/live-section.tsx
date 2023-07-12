import { CardsData } from "@/globals/types/types";

type Props = {
  cardsData: CardsData[];
};

const Live = ({ cardsData }: Props) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
    </section>
  );
};

export default Live;
