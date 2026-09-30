import cl from './MyButtonFrom.module.scss';
import Image from "next/image";
import upload from "@/assets/Upload.png"
const MyButtonForm = ({children,loading,...props}) => {
    return (
        <button {...props} className={cl.MyButtonForm}>
            {children}
            {loading === 'loading' ? (
                <span className="loading-icon perpetuum-mobile"></span>
            ) : loading === 'error' ? (
                <Image alt="изображение" src={upload} width={18} height={18}/>
            ) : (
                <Image alt="изображение" src={upload} width={18} height={18}/>
            )}


        </button>
    );
};

export default MyButtonForm;