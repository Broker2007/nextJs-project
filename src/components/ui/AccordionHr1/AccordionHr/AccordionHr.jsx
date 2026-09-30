"use client"
import React, { useState } from "react";
import AccordionItemHr from "@/components/ui/AccordionHr1/AccordionItemHr/AccordionItemHr";

const AccordionHr = ({ list }) => {
    const [openId, setId] = useState(0);

    return (
        <ul className="accordion-hr mt-50">
            {list.map((item, id) => {
                return (
                    <AccordionItemHr
                        onClick={() => setId(id)}
                        item={item}
                        isOpen={id === openId}
                        length={list.length}
                        key={id}
                    />
                );
            })}
        </ul>
    );
};

export default AccordionHr