"use client"

import cl from "./Accordion2.module.scss"
import Image from "next/image";
import {useState} from "react";
import AccordionItem2 from "@/components/ui/Accordion2/AccordionItem/AccordionItem2";

const Accordion2 = ({accordion_inf, accorRef, setAccorRef,windowSize,boolSlide}) => {

    const [openId, setOpenId] = useState(null)

    return (
        <ul className={cl.accordion}>
            {accordion_inf.map((data,index) => {
                return (

                    <AccordionItem2
                    setAccorRef = {setAccorRef}
                    windowSize = {windowSize}
                    accorRef = {accorRef}
                    onClick = {() => (index !== openId ? setOpenId(index) : setOpenId(null))}
                    data = {data}
                    isOpen={index===openId && boolSlide}
                    key = {index}
                    boolSlide = {boolSlide}
                    />

                )
            })}
        </ul>
    );
};

export default Accordion2;
