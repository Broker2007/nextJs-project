"use client";
import { COMPANY_PHONE, COMPANY_PHONE_2, COMPANY_EMAIL } from "@/constants/info";
import Image from "next/image";
import location from "@/assets/Location.svg";
import mail from "@/assets/Message.svg";
import phone from "@/assets/Calling.svg";
import MyForm from "@/components/ui/MyForm/MyForm";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import ContactSection from "@/components/ContactSection/ContactSection";
// Динамический импорт YMaps и Map (отключаем SSR и загружаем по запросу)
const YMaps = dynamic(() => import("@pbe/react-yandex-maps").then((mod) => mod.YMaps), { ssr: false, loading: () => <p>Загрузка карты...</p> });
const Map = dynamic(() => import("@pbe/react-yandex-maps").then((mod) => mod.Map), { ssr: false });
const Placemark = dynamic(() => import("@pbe/react-yandex-maps").then((mod) => mod.Placemark), { ssr: false });

const Contact = () => {
    const [width, setWidth] = useState(450);
    const [height, setHeight] = useState(300);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        function handleWindowResize() {
            if (window.innerWidth <= 480) {
                setWidth(330);
                setHeight(280);
            } else {
                setWidth(450);
                setHeight(300);
            }
        }

        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <main className={"adaption_contact"}>
            <div className={"container mt-50"}>
                <div className={"d-f ai-end gap25 action_contact"}>
                    <div className={"byk"}>О</div>
                    <div className={"w-100"}>
                        <div className={"d-f flex-wrap gap5"}>
                            <span className={"text_action d-f ai-cen"}>Главная</span>
                            <div className={"d-f ai-cen"}>•</div>
                            <span className={"text_action_active d-f ai-cen"}>Контакты</span>
                        </div>
                        <span className={"spanHr"}></span>
                        <p className={"text3 mt-5"}>О КОМПАНИИ "ВЕКТОР"</p>
                    </div>
                </div>
                <div className={"d-f mt-70 flex-wrap jus_cont"}>
                    <div>
                        <div className={"d-f jc-s ai-cen gap25 "}>
                            <Image src={location} width={40} height={40} alt="location" />
                            <p className={"text_company"}>Тверская область г.Ржев ул.Центральная д.19</p>
                        </div>
                        <div className={"d-f jc-s ai-cen gap25 mt-30"}>
                            <Image src={phone} width={40} height={40} alt="phone" />
                            <p className={"text_company"}>{COMPANY_PHONE} <span className={"text_gray"}>(Отдел продаж)</span></p>
                        </div>
                        <div className={"d-f jc-s ai-cen gap25 mt-30"}>
                            <Image src={phone} width={40} height={40} alt="phone" />
                            <p className={"text_company"}>{COMPANY_PHONE_2} <span className={"text_gray"}>(Отдел продаж)</span></p>
                        </div>
                        <div className={"d-f jc-s ai-cen gap25 mt-30"}>
                            <Image src={mail} width={40} height={40} alt="mail" />
                            <p className={"text_company"}>{COMPANY_EMAIL}</p>
                        </div>
                    </div>
                    <div className={"d-f gap25 ai-start block2"}>
                        <div className={"map mb-45"}>
                            {!isMapLoaded && <p>Загрузка карты...</p>}
                            <YMaps query={{ apikey: "0792711d-4ca1-4518-8f0d-1acbd6ae8727" }}>
                                <Map
                                    defaultState={{ center: [56.269306, 34.285919], zoom: 10 }}
                                    width={width}
                                    height={height}
                                    onLoad={() => setIsMapLoaded(true)} // Устанавливаем флаг, когда карта загрузится
                                >
                                    <Placemark geometry={[56.269306, 34.285919]} />
                                </Map>
                            </YMaps>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container mt-100 form_adaption"}>
                <div className={"d-f ai-end gap25 mb-45 action2_contact "}>
                    <div className={"byk"}>
                        В
                    </div>
                    <div className={"w-100"}>
                        <span className={"spanHr"}></span>
                        <p className={"text3 mt-5"}>ВОПРОСЫ</p>
                    </div>
                </div>
                <ContactSection />

            </div>
        </main>
    );
};

export default Contact;
