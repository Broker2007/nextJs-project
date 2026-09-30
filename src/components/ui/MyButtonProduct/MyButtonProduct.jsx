import cl from "@/components/ui/MyButton/MyButton.module.scss"
import Link from "next/link";
import 'animate.css';

const MyButton = ({classes,link,children,linkBool=true,onClick}) => {
    return (
        <>
            {linkBool ?
                <Link href={link} className={`${cl.button} ${classes}`}>
                    <span>{children}</span>
                </Link>
                :
                <div className={`${cl.button} ${classes}`} onClick={() => onClick()}>
                    <span>{children}</span>
                </div>
            }
        </>
    );
};

export default MyButton;