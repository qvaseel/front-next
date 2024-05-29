import "./Nav.css"
import { motion } from "framer-motion";

const links = [
    {name: 'Портфолио', link: '#projects'},
    {name: 'Наша команда', link: '#liders'},
    {name: 'Сервисы', link: '#directions'},
    {name: 'Контакты', link: '#createProject'}
]

interface INav {
    isOpen: boolean;
}

const Nav = ({isOpen}: INav) => {
    return (
        <ul className={`pt-2 list-none flex justify-between font-normal text-white gap-10 max-lg:gap-3 top-0 max-[921px]:-right-[220px] bottom-0 transition-transform duration-300 ease-linear
            max-[921px]:w-[220px] max-[921px]:px-6 max-[921px]:pt-28 max-[921px]:flex-col max-[921px]:fixed max-[921px]:justify-normal max-[921px]:bg-white max-[921px]:h-screen max-[921px]:text-black z-[15]
            ${isOpen ? "active" : ""}`}>
            {links.map(({name, link}, i) => (
                <motion.li
                    whileHover={{
                        y: -3,
                    }}
                    key={i}
                    className="px-3 pb-1"
                >
                    <a href={link}>{name}</a>
                </motion.li>
            ))}
        </ul>
    )
}

export default Nav;