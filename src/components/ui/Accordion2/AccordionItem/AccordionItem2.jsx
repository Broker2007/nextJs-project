"use client"

import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import cl from "./AccordionItem2.module.scss";
import arrow1 from "@/assets/arrow1.svg"
import Image from "next/image";

const AccordionItem2 = ({data, onClick,isOpen,accorRef, setAccorRef,windowSize,boolSlide}) => {

    const ref = useRef(null);
    const openItem = isOpen && boolSlide
    console.log(boolSlide,openItem)


    const clickArrow = () => {
        onClick()

        if (windowSize.innerWidth>=1200){
            console.log(windowSize.innerWidth,"ширина")
            if (isOpen === true){
                setAccorRef(500)
            }else{
                setAccorRef(410+ref.current.clientHeight +20)
            }
        }else{
            if (isOpen === true){
                setAccorRef(410)
            }else{
                setAccorRef(410+ref.current.clientHeight +20)
            }
        }


    }

    return (
        <li className={cl.accordion_item}>
            <button className={`${cl.accordion_header} d-f jc-sp`} onClick={() =>clickArrow() }>
                <p className={"text4"}>{data.accordion_title}</p>
                <Image alt="изображение" src={arrow1} className={`${cl.accordion_arrow} ${isOpen ? cl.active : cl.acc}`}/>
            </button>
            <span className={cl.spanHr}></span>
            {/*${isOpen ? "height_accordion_collapse" : "height_accordion_collapse_none"}*/}
            <div  className={`${cl.accordion_collapse}  d-f ai-cen`}
                  style={
                      openItem ? { height: ref.current.offsetHeight} : { height: "0px" }
                  }>
                <div className={`${cl.accordion_body} pt-25`}>
                    <p ref={ref} className={"pb-20 pt-20"}>
                        {data.accordion_description}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default AccordionItem2;