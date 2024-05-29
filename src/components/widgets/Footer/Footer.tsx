import Layout from "../../Layout/Layout";
import Logo from "../../ui/Icons/Logo/Logo";
import TelegramIcon from "../../ui/Icons/TelegramIcon/TelegramIcon";
import WhatsUpIcon from "../../ui/Icons/WhatsUpIcon/WhatsUpIcon";

const links = [
    {name: 'Портфолио', link: '#projects'},
    {name: 'Наша команда', link: '#liders'},
    {name: 'Сервисы', link: '#directions'},
    {name: 'Контакты', link: '#createProject'}
]

const contacts = [
    {title: 'Телефон', value: '+7 (962) 025-55-17', link: "tel:+79620255517"},
    {title: 'Почта', value: 'support@fxed.tech', link: "mailto:support@fxed.tech"},
    {title: 'Адрес', value: 'Самарская область, Тольятти, Победы, 7', link: "https://yandex.ru/maps/-/CDVYRA38"},
]

const Footer = () => {
    return (
        <div className="border-t border-[#EDEDED] py-10 px-8 max-[666px]:py-5">
            <Layout id="footer">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center pb-8 border-b border-[#EDEDED] max-[676px]:hidden">
                        <Logo fill="#624AFF"/>
                        <ul className="flex gap-8">
                            {links.map((item, index) => (
                                <a key={index} href={item.link} className="hover:underline">
                                    <li key={index}>{item.name}</li>
                                </a>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between items-center pt-8 max-[666px]:pt-2 max-[900px]:flex-col max-[900px]:gap-5 max-[900px]:items-start">
                        <div className="flex gap-10 text-[15px] max-[775px]:text-[12px] max-[666px]:flex-col max-[666px]:gap-3">
                            {contacts.map((item, index) => (
                                <div key={index} className="flex flex-col gap-3 max-[666px]:gap-1">
                                    <p className=" text-[#979797] m-0 p-0">
                                        {item.title}
                                    </p>
                                    <a href={item.link} target="_blank" className=" text-black m-0 p-0">
                                        {item.value}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a href="https://t.me/AndreyTalpGroup" target="_blank"><TelegramIcon styleFill={{fill: '#624AFF'}} styleStroke={{fill:"white"}}/></a>
                            <a href="https://api.whatsapp.com/send/?phone=79620255517" target="_blank"><WhatsUpIcon styleFill={{fill: '#624AFF'}} styleStroke={{fill:"white"}}/></a>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Footer;