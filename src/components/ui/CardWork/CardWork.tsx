import Image from "next/image";

interface ICardWork {
  img: string;
  name: string;
  text: string;
  link: string;
}

const CardWork = ({ img, name, text, link }: ICardWork) => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col rounded-3xl grow group cursor-pointer">
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <Image
          className="w-full h-full object-cover"
          src={img}
          alt="image of work"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-70 ">
        <h3 className="text-white font-bold text-2xl transition-all duration-150 ease-out group-target:opacity-0 group-hover:opacity-0">
          {name}
        </h3>
      </div>
      <div className="grow relative flex flex-col gap-2.5 p-5 text-white transition-all duration-150 ease-out bg-electric-violet bg-opacity-30 opacity-0 group-hover:bg-opacity-30 group-hover:opacity-100">
        <a
          className="absolute top-0 bottom-0 z-10 !w-0 sm:w-full group-hover:!w-full transition-all delay-200 "
          href={link}
          target="_blank"
        ></a>
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="text-[1.0625rem] font-medium grow">{text}</p>
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="8"
            viewBox="0 0 42 8"
            fill="none"
          >
            <path
              d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM41.3536 4.35355C41.5488 4.15829 41.5488 3.84171 41.3536 3.64644L38.1716 0.464463C37.9763 0.269201 37.6597 0.269201 37.4645 0.464463C37.2692 0.659725 37.2692 0.976308 37.4645 1.17157L40.2929 4L37.4645 6.82842C37.2692 7.02369 37.2692 7.34027 37.4645 7.53553C37.6597 7.73079 37.9763 7.73079 38.1716 7.53553L41.3536 4.35355ZM1 4.5L41 4.5L41 3.5L1 3.5L1 4.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
