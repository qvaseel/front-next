import "./Text.css"

interface IText {
    children: TrustedHTML;
}

const Text = ({children}: IText) => {
    const text = children;
    return (
        <>
            <p className="font-inter font-normal text-[20px] text-[#1F1F1F]" dangerouslySetInnerHTML={{__html: text}}/>
        </>
    )
}

export default Text;