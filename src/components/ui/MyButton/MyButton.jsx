import cl from "./MyButton.module.scss"
import Link from "next/link";
import 'animate.css';

const MyButton = ({classes,link,children}) => {
    return (
                <Link href={link} className={`${cl.button} ${classes}`}>
                    <span>{children}</span>
                </Link>
    );
};

export default MyButton;