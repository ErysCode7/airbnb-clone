import Image from "next/image";

type Props = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

const LargeCard = ({ buttonText, description, img, title }: Props) => {
  return (
    <div className="relative py-16 lg:cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={title}
          fill
          objectFit="cover"
          className="rounded-2xl" 
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button
          className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 active:scale-95"
          type="button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
