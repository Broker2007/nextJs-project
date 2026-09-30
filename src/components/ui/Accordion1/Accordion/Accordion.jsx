"use client"

import cl from "./Accordion.module.scss"
import Image from "next/image";
import {useState} from "react";
import AccordionItem from "@/components/ui/Accordion1/AccordionItem/AccordionItem";

const Accordion = ({list}) => {

    const [openId, setOpenId] = useState(null)

    return (
        <ul className={cl.accordion}>
            {list.map((data,index) => {
                return (

                    <AccordionItem
                    onClick = {() => (index === openId ?setOpenId(null):setOpenId(index))}
                    data = {data}
                    isOpen={index===openId}
                    key = {index}
                    />
                )
            })}
        </ul>
    );
};

export default Accordion;
