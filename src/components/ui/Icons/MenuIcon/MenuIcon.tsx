import "./MenuIcon.css"

interface IMenuIcon {
    isOpen: boolean;
}

const MenuIcon = ({isOpen}: IMenuIcon) => {
    return (
        <div id="nav-icon3" className={`${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default MenuIcon;