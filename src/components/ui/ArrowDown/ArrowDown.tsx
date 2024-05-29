import Image from "next/image";
import arrow_down from "/public/images/svg/arrow_down.svg"

const ArrowDown = () => {
    return (
        <div className="w-full py-6">
            <a href="#advantages" className="w-8 block mx-auto ">
                <Image className="animate-bounce" src={arrow_down} alt="arrow down" />
            </a>
        </div>
    )
}

export default ArrowDown;