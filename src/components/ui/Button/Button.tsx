interface IButton {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    id: string;
}

const Button = ({onClick, children, className, id}: IButton) => {
    return (
        <button id={id} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;