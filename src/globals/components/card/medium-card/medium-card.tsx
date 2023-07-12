import Image from "next/image";

type Props = {
  img: string;
  title: string;
};

const MediumCard = ({ img, title }: Props) => {
  return (
    <div className="lg:cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} fill className="rondued-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
