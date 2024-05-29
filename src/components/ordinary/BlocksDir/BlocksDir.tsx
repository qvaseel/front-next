import { motion } from "framer-motion"
import BlockDir from "@/components/ui/BlockDir/BlockDir";

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

const BlocksDir = () => {
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        variants={cardsAnimation}
        className="flex justify-between overflow-x-auto gap-5 pb-3 flex-wrap max-[1295px]:flex-nowrap"
      >
        <BlockDir title="#Для владельца">
            <p className="text-base text-[#4D4D4D] w-[93%] leading-6">За счёт гибкой кастомизации решения под ваши бизнес-задачи и цели, получаете уникальные конкурентные преимущества.</p>
        </BlockDir>
        <BlockDir title="#Финансовому директору">
            <ul className="flex flex-col gap-3 text-base text-[#4D4D4D] list-disc pl-6">
                <li className="marker:text-[#624AFF]">Эффективное управление денежными потоками;</li>
                <li className="marker:text-[#624AFF]">Снижение рисков кассовых разрывов;</li>
                <li className="marker:text-[#624AFF]">Снижение рисков кассовых разрывов;</li>
                <li className="marker:text-[#624AFF]">Сокращение времени на подготовку отчётности</li>
            </ul>
        </BlockDir>
        <BlockDir title="#Для тех.директора">
            <p className="text-base text-[#4D4D4D] w-[93%] leading-6">Сокращение затрат на поддержку разнородных систем за счет единого решения. Интеграции с популярными SaaS (1c, Bitrix, AMO CRM).</p>
        </BlockDir>
        <BlockDir title="#Для малого бизнеса">
            <p className="text-base text-[#4D4D4D] w-[93%] leading-6">Небольшие производственные цеха , где вся отчетность ведется в таблицах и на коленке. Снимаем административную нагрузку  и вы занимаетесь развитием бизнеса, а не контролем за ним.</p>
        </BlockDir>
        <BlockDir title="#Для всех">
            <p className="text-base text-[#4D4D4D] w-[93%] leading-6">Приходим командой, вы нам показываете проблемы, мы создаём цифровое решение и уходим, оставляя вас современной технологичной компанией.</p>
        </BlockDir>
        <BlockDir title="#Для всех">
            <p className="text-base text-[#4D4D4D] w-[93%] leading-6">Отсутствие зависимости от нас. Вы можете уйти в любой момент, после каждого этапа. У вас на руках останутся все исходники, а технологии на которых мы работаем очень популярны и вы без труда найдете замену.</p>
        </BlockDir>
      </motion.div>
    )
}

export default BlocksDir;