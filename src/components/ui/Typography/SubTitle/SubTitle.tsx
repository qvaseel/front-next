import "./SubTitle.css"

interface ISubTitle {
    children: React.ReactNode;
}

const SubTitle = ({children}: ISubTitle) => {
    const text = children;
    return (
        <>
            <p className="font-inter font-normal text-[17px] max-sm:text-base max-[360px]:text-sm text-[#4D4D4D]">{children}</p>
        </>
    )
}

export default SubTitle;