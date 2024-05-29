interface ICardAdv {
    children: React.ReactNode;
    className: string;
}

const CardAdv = ({children, className}: ICardAdv) => {
    return (
        <div className={` p-9 flex flex-col gap-5 bg-[#F8F8F8] rounded-[24px] ${className}`}>
            {children}
        </div>
    )
}

export default CardAdv;