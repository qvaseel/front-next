import { motion } from "framer-motion"
import CardDir from "@/components/ui/CardDir/CardDir"
import { enum_directions_cards } from "../../../types/directions";

const cardsAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

const CardsDir = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{
            duration: 1.2,
            delay: 0.1,
            }}
            variants={cardsAnimation}
            className="flex justify-between overflow-x-auto gap-5 pb-3"
        >
            {enum_directions_cards.map((item, index) => (
            <CardDir
                key={index}
                id={item.id}
                title={item.title}
                descr={item.descr}
                className={item.style}
            />
            ))}
        </motion.div>
    )
}

export default CardsDir;