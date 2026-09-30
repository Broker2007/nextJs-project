import React from 'react';
import Image from "next/image";
import close from "@/assets/close.svg";

const MySearch = ({ onClick,value,onChange,...props}) => {
    const lengt = value.length
    return (

        <div className={"position_input"}>
            <input {...props}  value={value} onChange={onChange}/>
            {
                lengt > 0 && <Image src={close} alt={'close'} width={15} height={15} className={"img_close"} onClick = {() => onClick()}/>
            }
        </div>
    );
};

export default MySearch;