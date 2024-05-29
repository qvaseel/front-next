import "./CardDir.css"

interface ICardDir {
    id: string;
    className: string;
    title: string;
    descr: string;
}

const CardDir = ({id, className, title, descr}: ICardDir) => {
    return (
        <div className={`w-[285px]  p-6 flex flex-col gap-5 bg-[#F8F8F8] rounded-[24px] ${className}`}>
            <span className="w-9 font-semibold text-lg rounded-full text-center py-[3px] px-3">{id}</span>
            <div className="flex flex-col gap-3">
                <p className="font-bold text-lg uppercase w-[160px]">{title}</p>
                <p className="text-base leading-6">{descr}</p>
            </div>
        </div>
    )
}

export default CardDir;