"use client"
import arrow1 from "@/assets/arrow1.svg";
import cl from "./AccordionItemHr.module.scss";
import Image from "next/image";
import MyButton from "@/components/ui/MyButton/MyButton";

const AccordionItemHr = ({ item, onClick, isOpen, length }) => {
    return (
        <li
            className={`accordion-hr-item ${isOpen ? "active" : ""}`}
            style={{
                width: isOpen ? `calc(100% - ${50 * (length - 1)}px)` : "",
            }}
        >
            <button className="accordion-hr-header" onClick={() => onClick()}>

                <span className={"accordion_span"}>{item.title} </span>
                <Image alt="изображение" src={arrow1} className={`${cl.accordion_arrow} ${isOpen && cl.active}`}/>

            </button>
            <div
                className="accordion-hr-body"
                style={{
                    width: isOpen ? `calc(100% - ${50 * length}px)` : "",
                }}
            >
                <div className={"d-f jc-sp"}>
                    <Image alt="изображение" src={item.image}/>
                    <div className={"ml-10"}>
                        <p className={"text6"}>{item.title}</p>
                        <p className={"text_company mt-25"}>{item.text}</p>
                        <MyButton isOpen={isOpen} bool_pos= {1}/>
                    </div>

                </div>

            </div>
        </li>
    );
};
export default AccordionItemHr