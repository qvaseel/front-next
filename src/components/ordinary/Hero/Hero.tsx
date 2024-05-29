import Image from "next/image"
import illustration from "/public/images/svg/illustration.svg"
import airplane from "/public/images/svg/airplane.svg"
import message from '/public/images/svg/message.svg'
import { motion } from "framer-motion"
import "./Hero.css"

const textAnimation = {
    hidden: {
        x: -500,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    }
}

const image1Animation = {
    hidden: {
        x: -300,
        y: 150,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
    }
}

const image2Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const image3Animation = {
    hidden: {
        y: 150,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}

const Hero = () => {
    return (
        <div className="flex w-full justify-between h-[591px] max-lg:h-[500px] max-sm:h-[400px]">
            <motion.div 
                initial={'hidden'}
                animate={'visible'}
                transition={{
                    duration: 0.75,
                }}
                variants={textAnimation}
                className="max-w-xl max-lg:max-w-md pt-2"
            >
                <motion.h1 className="font-bold text-7xl max-lg:text-6xl max-sm:text-5xl max-[360px]:text-4xl text-white font-oswald leading-[100%] mb-10  max-[360px]:mb-6">
                    Автоматизируем малый и средний бизнес
                </motion.h1>
                <p className="font-normal text-[23px] text-white mb-14 max-sm:text-[18px] max-[360px]:mb-10">Разработка ERP и маркетплейсов</p>
                <div className="hero_link w-fit">
                    <a className="overflow-hidden w-full bg-white text-[17px] font-medium px-8 py-3 rounded-full max-[360px]:text-[12px]" href="#createProject">Обсудить проект</a>
                </div>
            </motion.div>
            <div className="relative h-[84%] flex flex-col items-center">
                <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    transition={{
                        duration: 0.75,
                    }}
                    variants={image3Animation}
                    className="w-full my-auto"
                >
                    <Image className="w-full my-auto max-[904px]:hidden" src={illustration} alt="image for background"/>
                </motion.div>
                
                <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    transition={{
                        duration: 0.75,
                    }}
                    variants={image1Animation}
                    className="absolute left-2 -top-4 max-lg:hidden"
                >
                    <Image className="w-28" src={airplane} alt="image for background" />
                </motion.div>
                <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    transition={{
                        duration: 0.75,
                    }}
                    variants={image3Animation}
                    className="absolute -left-16 bottom-14 max-lg:hidden"
                >
                    <Image className="w-20" src={message} alt="image for background" />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;