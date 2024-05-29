import "./BlockDir.css"

interface IBlockDir {
    title: string,
    children: React.ReactNode
}

const BlockDir = ({title, children}: IBlockDir) => {
    return(
        <div className="blockDir w-[386px] bg-[#F8F8F8] rounded-3xl p-6 flex flex-col gap-4">
            <span className="px-4 py-1 text-[14px] text-[#624AFF] bg-[#624AFF] bg-opacity-10 rounded-full w-fit">{title}</span>
            {children}
        </div>
    )
}

export default BlockDir;