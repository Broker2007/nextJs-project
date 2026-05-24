"use client"

import React, {useRef} from 'react';
import cl from "./AccordionItem.module.scss";
import arrow1 from "@/assets/arrow1.svg"
import Image from "next/image";
const AccordionItem = ({data, onClick,isOpen}) => {
    return (
        <li className={cl.accordion_item}>
            <button className={`${cl.accordion_header} text4`} onClick={() => onClick()}>
                <p className={cl.text_header}>
                    {data.title}
                </p>
                <Image alt="изображение" src={arrow1} className={`${cl.accordion_arrow} ${isOpen && cl.active}`}/>
            </button>
            <span className={cl.spanHr}></span>
            <div className={`${cl.accordion_collapse}`} style = {
                isOpen ? {height: "300px"} : {height: "0px"}
            }>
                <div className={cl.accordion_body}>{data.text}</div>
            </div>
        </li>
    );
};

export default AccordionItem;