"use client"

import React, {useEffect, useRef, useState} from 'react';

import arrow from "@/assets/arrow1.svg"
import Image from "next/image";
import MySearch from "@/components/ui/MySearch/MySearch";

const useOutsideAlerter = (onOutsideClick)=> {
    const ref = useRef();

    useEffect(() => {
        function handleClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick();
            }
        }

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [onOutsideClick]);

    return ref;
}
const MySort = ({ categories,setSearch,search,onClickCategories,categoriesId,onClickSearch}) => {
    const [open, setOpen] = useState(null)

    const outsideAlerterRef = useOutsideAlerter(() => setOpen(false));
    return (
            <div className={"d-f ai-start gap25 action_contact container mt-50"}>
                <div className={"byk mt-5"}>
                    П
                </div>
                <div className={"w-100"}>

                        <div className={"d-f flex-wrap gap5"}>
                            <span className={"text_action d-f ai-cen"}>
                            Главная
                            </span>
                            <div className={"d-f ai-cen"}>
                                •
                            </div>
                            <span className={"text_action_active d-f ai-cen"}>
                                Продукция
                        </span>
                        </div>
                    <span className={"spanHr"}></span>
                    <div className={"d-f flex-wrap jc-sp ai-start"}>
                        <p className={"text3 mt-5"}>Продукция</p>
                    </div>
                    <div className={"filter"}>
                        <MySearch placeholder={"Поиск"} className={"inputSort inputField"} value={search} onChange={(e) => setSearch(e.target.value)} onClick={() => setSearch("")}/>
                        <div className={`width_cat`} onClick={()=>setOpen(!open)} ref={outsideAlerterRef}>
                            <p className={`${open && "active"} category_sort text-align-cen`}>{categories[categoriesId]}</p>
                            <ul className={`${!open ? "no_opacity":"opacity"} custom-select`}>
                                { categories.map((option, index) =>
                                    <li onClick={() => onClickCategories(index)} key={index} className={`${index===categoriesId ? "active" : "no_active"}`} >{option} <Image src={arrow} width={20} height={20} alt={"arrow"} className={`${index!==categoriesId && "arrow_sort"}`}/></li>
                                ) }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MySort;