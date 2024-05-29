import { useState } from "react";
import Logo from "../../ui/Icons/Logo/Logo";
import Nav from "../Nav/Nav";
import Social from "../Social/Social";
import Button from "../../ui/Button/Button";
import MenuIcon from "../../ui/Icons/MenuIcon/MenuIcon";
import "./Navpanel.css"
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive';

const navAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}

const logoAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const Navpanel = () => {
    const isWideScreen = useMediaQuery({ minWidth: 922 });
    const [isOpen, setOpen] = useState(false);

    function Close() {
        setOpen(!isOpen)
    }
    return (
        <nav className="h-24 w-full flex justify-between items-center text-[17px]">
            <motion.div
                initial={'hidden'}
                animate={'visible'}
                transition={{
                    delay: 0.2,
                    duration: 1,
                }}
                variants={logoAnimation}
            >
                <Logo fill="white"/>
            </motion.div>
            {isWideScreen ? (
                <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    transition={{
                        duration: 0.75,
                    }}
                    variants={navAnimation}
                >
                    <Nav isOpen={isOpen}/>
                </motion.div>
            ) : (
                <div>
                    <Nav isOpen={isOpen}/>
                </div>
            )}
            {isWideScreen ? (
                <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    transition={{
                        duration: 0.75,
                    }}
                    variants={navAnimation}
                >
                    <Social/>
                </motion.div>
            ) : (
                <div>
                    <Social/>
                </div>
            )}
            <Button id="btn" className={`hidden max-[921px]:block right-0 z-50 mr-10 ${isOpen ? "pos_fix" : "pos_abs"} `} onClick={() => Close()}><MenuIcon isOpen={isOpen}/></Button>
        </nav>
    )
}

export default Navpanel;