import Image from "next/image";
import "./LidersCard.css"

interface ILidersCard {
    img: any;
    name: string;
    lastname: string;
    position: string;
    position2: string;
}

const LidersCard = ({img, name, lastname, position, position2}: ILidersCard) => {
    return (
        <div className="flex flex-col w-50 items-center">
            <div
                className="teamImgWrapper mx-auto mb-2.5 flex h-[176px] w-[176px] items-center justify-center overflow-hidden rounded-[50%] bg-[#624AFF] m:h-[120px] m:w-[120px]">
                <picture className="w-[94%]">
                    <source src={img} type="image/webp" />
                    <Image className="rounded-[50%]  h-[165px]  object-cover" src={img}
                        alt="avatar" />
                </picture>
            </div>
            <p className="text-center text-[17px] font-bold text-[#1F1F1F] mb-2">
                <span className="text-[#624AFF]">{name}</span> {lastname}
            </p>
            <p className="text-center text-[15px] font-normal text-[#4D4D4D] w-[172px] leading-[18px]">{position}<br />{position2}</p>
        </div>
    )
}

export default LidersCard;