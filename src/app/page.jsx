import { COMPANY_PHONE, COMPANY_PHONE_2, COMPANY_EMAIL } from "@/constants/info";
import cl from "./page.module.scss";
import bg from "../assets/bgc_main.jpg"
import svar from "../assets/svarshik.jpg"
import bg2 from "../assets/bgc_main2.jpg"
import image1 from "../assets/image1.png"
import image_Carousel1 from "../assets/bgc_min2.jpg"
import bgc_mainLine from "../../public/bgc_main_line.jpg"
import phone from "@/assets/Calling.svg"
import Image from "next/image";
import MyCarousel from "@/components/ui/MyCarousel/MyCarousel";
import MyButton from "@/components/ui/MyButton/MyButton";
import MyForm from "@/components/ui/MyForm/MyForm";
import Footer from "@/components/Footer/Footer";
import React from "react";

import ContactSection from "@/components/ContactSection/ContactSection";
export default function Home() {

    const slides = [
        {
            src: image_Carousel1,
            "alt": "Image 1 for carousel",
            action:
                {
                    title: "ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ",
                    accordion_inf: [
                        {
                            accordion_title: "Строительные металлоконструкции",
                            accordion_description:"Это могут быть каркасы зданий, мостов, мачт, вышек и других инженерных сооружений, которые используются для поддержки и укрепления зданий и сооружений."
                        },
                        {
                            accordion_title: "Промышленные конструкции",
                            accordion_description: "Используются для поддержки и обеспечения работоспособности различных промышленных оборудований, таких как конвейеры, бункеры, резервуары, складские стеллажи и многие другие."
                        },
                        {
                            accordion_title: "Специальные конструкции",
                            accordion_description: "Специальные конструкции: уникальные проекты, разрабатываемые под заказ."
                        },
                    ]
                }
        },
        {
            src: "/product/Image_Carousel2.jpg",
            "alt": "Image 1 for carousel",
            action:
                {
                    title: "МЕХАНИЧЕСКАЯ ОБРАБОТКА ДЕТАЛЕЙ",
                    accordion_inf: [
                        {
                            accordion_title: "Токарная обработка",
                            accordion_description: " Токарная обработка деталей представляет собой процесс металлообработки, при котором используются разные типы оборудования (токарные станки) и сменные насадки (резцы). В зависимости от выполняемой операции два эти компонента комбинируются."

                        },
                        {
                            accordion_title: "Фрезеровка",
                            accordion_description: "Механическая обработка заготовки режущим инструментом. Технология применяется для раскроя и фигурного вырезания изделий из листовых материалов, а также для глубокого снятия материала с изделия или гравирования на нём глубоких узоров"
                        },
                        {
                            accordion_title: "Сварка",
                            accordion_description: "Для соединения деталей в массовом и мелкосерийном производстве применяют сварку. При этом заготовки можно соединять углами, торцами, внахлест: предполагается нагрев материала до появления кромок или до температуры пластичности. Уже потом элементы соединяют в монолитную конструкцию."
                        },
                        {
                            accordion_title: "Покрытия и отделка",
                            accordion_description: "Покрытие и отделка металлоконструкций направлены на защиту от коррозии и негативных воздействий окружающей среды, а также на придание им красивого вида."
                        },
                    ]
                }
        }
    ]


    const bgc_main_line = {
        backgroundImage:`url(${bgc_mainLine.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 70px",
        backgroundSize: "cover",
        color:"white",
        objectFit: "cover",
        width: "100%",
        height: "200px",
    }
    const bgc_main = {
        backgroundImage:`url(${bg.src})`,
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "80px",
        backgroundRepeat: "no-repeat",
        
        backgroundPosition: "center center",
        backgroundSize: "cover",
        objectFit: "cover",
        color:"white",
        width: "100%",
        height: "520px",
    }

  return (
    <main className={"adaption_home"}>
        <div className={`container`}>
            <div className={`d-f jc-sp ai-s flex-wrap mt-100 `}>
                <div className={" pb-20 pt-20 pl-20 pr-20"}>
                    <p className={"text2"}>ООО «ВЕКТОР»</p>
                    <p className={"text3 mt-10 "}>Многолетний опыт работы в области металлоконструкций <br/>
                        и механической обработки деталей</p>
                </div>
                <div className={" pb-20 pt-20 pl-20 pr-20 max_width600"}>
                    <div className={"max_width600 text3"}>
                        <p className={" m-0"}>
                            Мы - эксперты в производстве металлоконструкций и механической обработке деталей.
                        </p>
                        <p className={"mt-10"}>
                            Зарекомендовали себя как надежный партнер в
                            строительстве, автомобилестроении, энергетике и машиностроении
                        </p>
                    </div>
                </div>
            </div>
            <div className={"mt-50 image_block_none"} style={bgc_main}>

            </div>
            {/*<Image alt="изображение" src={bg} className={`${cl.image_main} mt-50`}/>*/}
        </div>
        <div className={"bgc_gray1 mt-100 pt-30 pb-30"}>
            <div className={"container"}>
                <div className={"d-f ai-end gap25 "}>
                    <div className={"byk"}>
                        О
                    </div>
                    <div className={"w-100"}>
                        <span className={'spanHr'}></span>
                        <p className={"text3 mt-5"}>О КОМПАНИИ</p>
                    </div>
                </div>
                <div className={"d-f jc-sp  mt-50"}>
                    <div className={"max_width500"}>
                        <p className={"text6"}>Основу компании </p>
                        <p className={"mt-10 text_company"}>
                            составляют высококвалифицированные специалисты с опытом работы в различных отраслях. Инженеры, технологи и рабочие имеют необходимые навыки и образование, что позволяет нам гарантировать качество и эффективность нашей продукции.
                            <br/>
                            <br/>
                            Также мы обслуживаем широкий спектр клиентов, включая крупные строительные компании, заводы, предприятия энергетического сектора и др. Мы находимся в постоянном поиске новых партнеров и возможностей для сотрудничества.
                        </p>
                    </div>
                    <Image alt="изображение" src={bg2} className={"maxWidthHeight image_block_none"}/>
                </div>
            </div>
        </div>
        <div className={"container mt-100 "}>
            <div className={"d-f ai-end gap25 "}>
                <div className={"byk"}>
                    М
                </div>
                <div className={"w-100"}>
                    <span className={"spanHr"}></span>
                    <p className={"text3 mt-5"}>МЕТАЛЛОКОНСТРУКЦИИ</p>
                </div>
            </div>
            <div className={"mt-50 d-f jc-sp"}>
                <div className={"max_width500"}>
                    <p className={"text6"}>
                        Металлоконструкции
                    </p>
                    <p className={"text_company mt-20"}>
                        Наши специалисты разрабатывают проект на основе индивидуальных
                        эскизов, чертежей заказчика. Конструкции создают из качественного металла,
                        что гарантирует прочность изделия любого уровня сложности.
                        <br/>
                        <br/>
                        На окончательной стадии
                        изготовления производится антикоррозионная защита в покрасочной камере.
                    </p>
                </div>
                <div>
                    <Image alt="изображение" src={svar} className={"image_block_none border_rad"} width={600} height={450}/>
                </div>
            </div>
        </div>
        <div className={"pt-30 pb-30 bgc_gray1 mt-100"}>
            <div className={"container"}>
                <div className={"d-f ai-end gap25 "}>
                    <div className={cl.byk}>
                        Н
                    </div>
                    <div className={"w-100"}>
                        <span className={cl.spanHr}></span>
                        <p className={"text3 mt-5"}>НАШИ РАБОТЫ</p>
                    </div>
                </div>
                <div>
                    <MyCarousel data={slides}/>
                </div>

            </div>
        </div>
        <div className={"bgc_main_line image_block_none mt-100"} style={bgc_main_line}>
            <div className={"container d-f jc-sa ai-cen h-100"}>
                <div className={"text-align-cen"}>
                    <p className={"text7_white"}>100+</p>
                    <p className={"text3_white"}>
                        выполненных работ
                    </p>
                </div>
                <div className={"text-align-cen"}>
                    <p className={"text7_white"}>1000+</p>
                    <p className={"text3_white"}>
                        отгруженных машин
                    </p>
                </div>
                <div className={"text-align-cen"}>
                    <p className={"text7_white"}>50+</p>
                    <p className={"text3_white"}>
                        партнерских компаний
                    </p>
                </div>
            </div>
        </div>
        <div className={"container form_adaption"}>
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
}
