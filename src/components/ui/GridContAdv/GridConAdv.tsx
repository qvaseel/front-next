import "./style.css"
import CardAdv from '../CardAdv/CardAdv';

const GridContAdv = () => {
    return (
        <div className="grid gap-5 grid-cols-12 max-[910px]:flex flex-col">
            <CardAdv className="card1 col-span-12">
                <p className="text-[22px] max-[360px]:text-[20px] font-semibold leading-[32px]">Ускорение разработки</p>
                <p className="text-base leading-[22px] max-[360px]:text-[14px] max-[360px]:leading-normal max-w-[780px]">За 7 лет работы внутри компании разработаны фреймворки автоматизирующие проверку, встраивания и скорости вывода данных. Наши программные модули ускоряют процесс документирования и подключения фронтенд. Существенно снижают нагрузку на бэкенд приложений. Написали систему фильтров/сортировок, которая ускоряет процесс создания erp систем и маркетплейсов.</p>
            </CardAdv>
            <CardAdv className="card2 col-span-5 h-[405px] max-[910px]:h-auto">
                <p className="text-[22px] max-[360px]:text-[20px] font-semibold leading-[32px]">Отказоустойчивые системы</p>
                <p className="text-base leading-[22px] max-[360px]:text-[14px] max-[360px]:leading-normal max-w-[780px]">Мы не только создаём продукты из чужих языков программирования, но у нас есть свои продукты на основании которых создаём отказоустойчивые и производительные системы для бизнеса</p>
                <p className="text-base leading-[22px] max-[360px]:text-[14px] max-[360px]:leading-normal max-w-[780px]">Мы не аутсорсинговая команда, а промежуточная - между аутсорс и продуктовой компанией.</p>
            </CardAdv>
            <CardAdv className="card3 col-span-7">
                <p className="text-[22px] max-[360px]:text-[20px] font-semibold leading-[32px]">Выгоды для вас</p>
                <p className="text-base leading-[22px] max-[360px]:text-[14px] max-[360px]:leading-normal max-w-[780px]">Какие выгоды для вас? Внедрение наших фреймворков в ваши проекты даёт</p>
                <p className="text-base leading-[22px] max-[360px]:text-[14px] max-[360px]:leading-normal max-w-[780px]">- 20% времени разработки любого проекта</p>
                <p className="text-base leading-[22px] max-[360px]:text-[14px] max-[360px]:leading-normal max-w-[780px]">+60% к отказаустойчивости.</p>
                <p className="text-base leading-[22px] max-[360px]:text-[14px] max-[360px]:leading-normal max-w-[780px]">Это не просто цифры, а результаты тестов наших фреймворков.</p>
            </CardAdv>
        </div>
    )
}

export default GridContAdv;