import TelegramIcon from "../../ui/Icons/TelegramIcon/TelegramIcon";
import WhatsUpIcon from "../../ui/Icons/WhatsUpIcon/WhatsUpIcon";
import "./Social.css"

const Social = () => {
    return (
        <div className="flex justify-between gap-4 max-[921px]:hidden">
            <div className="phone_link pt-[6px]">
                <a href="tel:+79620255517" className="link text-[15px] w-[175px] overflow-hidden text-white border rounded-full px-4 py-2 ">+7 (962) 025-55-17</a>
            </div>
                
            <a href="https://t.me/AndreyTalpGroup" target="_blank"><TelegramIcon styleFill={{fill: 'white'}} styleStroke={{fill:"#624AFF"}}/></a>
            <a href="https://api.whatsapp.com/send/?phone=79620255517" target="_blank"><WhatsUpIcon styleFill={{fill: 'white'}} styleStroke={{fill:"#624AFF"}}/></a>
        </div>
    )
}

export default Social;