import React from "react";
import Image from "next/image";
import phone from "@/assets/Calling.svg";
import MyForm from "@/components/ui/MyForm/MyForm";
import { COMPANY_PHONE } from "@/constants/info";

export default function ContactSection() {
    return (
        <div className={"d-f flex-wrap jc-sp ai-s quection_contact_parent gap30"}>
            <div className={"quection_contact"}>
                <p className={"text6"}>ОСТАЛИСЬ ВОПРОСЫ ?</p>
                <p className={"text_company"}>Или нужна консультация?<br/> Заполните форму или позвоните нам</p>
                <div className={"text1_yellow mt-10 ai-cen jc-cen d-f gap10"}>
                    <Image src={phone} alt="phone" className={"img_contact"}/> 
                    <span className={"ml-10"}>{COMPANY_PHONE}</span>
                </div>
            </div>
            <MyForm className={"max_width380"}/>
        </div>
    );
}
