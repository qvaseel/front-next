import CardWork from "../CardWork/CardWork";

interface IColWork {
    startIndex: number;
    enum_works: { img: any; name: string; text: string; link: string }[];
}

const ColWork = ({startIndex, enum_works}: IColWork) => {
    return (
        <div className='flex flex-col gap-5 grow w-full sm:w-1/3 lg:w-1/4'>
            {[0, 1, 2].map(cardIndex => {
                const index = startIndex + cardIndex;
                if (index < enum_works.length) {
                    const work = enum_works[index];
                    return <CardWork key={index} img={work.img} name={work.name} text={work.text} link={work.link}/>;
                }
                return null;
            })}
        </div>
    )
}

export default ColWork;