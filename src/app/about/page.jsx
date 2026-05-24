import { COMPANY_PHONE, COMPANY_PHONE_2, COMPANY_EMAIL } from "@/constants/info";
import React from 'react';
import cl from "@/app/page.module.scss";
import Image from "next/image";
import image_bgc_about from "@/assets/image_bgc_about.png"
import image_bgc2_about from "@/assets/bgc_min.jpg"
import image_bgc3_about from "@/assets/image_bgc3_about.png"
import card_image from "@/assets/card_image.png"
import phone from "@/assets/Calling.svg"
import order from "@/assets/order.svg"
import milling from "@/assets/milling.svg"
import delivery from "@/assets/delivery.svg"
import MyForm from "@/components/ui/MyForm/MyForm";
import ContactSection from "@/components/ContactSection/ContactSection";
const About = () => {
    return (
        <main className={"adaption_about"}>
            <div className={"container mt-50"}>
                <div className={"d-f ai-end gap25 "}>
                    <div className={"byk"}>
                        О
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
                                О компании
                            </span>
                        </div>
                        <span className={"spanHr"}></span>
                        <p className={"text3 mt-5"}>О КОМПАНИИ "ВЕКТОР"</p>
                    </div>
                </div>
                <div className={"mt-50 d-f display_about"}>
                    <div className={"max_width500"}>
                        <p className={"text6"}>
                            Компания "ВЕКТОР"
                        </p>
                        <p className={"text_company mt-20"}>
                            Мы придерживаемся высоких стандартов качества и сертифицированы . Каждая единица продукции проходит строгий контроль качества на всех этапах – от проектирования до финальной отгрузки.
                            <br/>
                            <br/>
                            Мы стремимся обеспечить своим клиентам высококачественные изделия, соответствующие их требованиям.
                            <br/>
                            <br/>
                            Наша компания обслуживает широкий спектр клиентов, включая крупные строительные компании, заводы, предприятия энергетического сектора и др.

                        </p>
                    </div>
                    <div>
                        <Image alt="изображение" src={image_bgc_about} className={"image_block_none"}/>
                    </div>
                </div>
            </div>

            <div className={"container d-f jc-sa mt-100 flex-wrap d_none_md"}>
                <div className={"card mt-100 pr-40 pl-40 pb-40 max_width380 text-align-cen card_position"}>

                        <Image alt="изображение" src={milling} className={"image_card"} width={150} height={150}/>
                        <p className={"mt-100 text6"}>Наше оборудование</p>
                        <p className={"text_company  mt-25"}>
                            Более 10 станков для выполнения всех видов работ
                        </p>
                </div>
                <div className={"card mt-100 pr-40 pl-40 pb-40 max_width380 text-align-cen card_position"}>

                    <Image alt="изображение" src={order} className={"image_card"} width={140} height={140}/>
                    <p className={"mt-100 text3 hei74"}>Заказы</p>
                    <p className={"text_company  mt-25"}>
                        Более 100 успешно выполненных заказов за прошлый год
                    </p>
                </div>
                <div className={"card mt-100 pr-40 pl-40 pb-40 max_width380 text-align-cen card_position"}>

                    <Image alt="изображение" src={delivery} className={"image_card"} width={180} height={180}/>
                    <p className={"mt-100 text3 hei74"}>Доставка</p>
                    <p className={"text_company  mt-25 d-f ai-cen"}>
                        Наша компания производит доставку продукции по всей территории РФ
                    </p>
                </div>
            </div>
            <div className={"container mt-100"}>
                <div className={"mt-50 d-f display_about"}>
                    <div>
                        <Image alt="изображение" src={image_bgc2_about} className={"image_block_none"}/>
                    </div>
                    <div className={"max_width500"}>
                        <p className={"text6"}>
                            Отношение к клиентам
                        </p>
                        <p className={"text_company mt-20"}>
                            ООО «Вектор» готово удовлетворить потребности клиентов в области металлоконструкций и механической обработки деталей
                            <br/>
                            <br/>
                            Предлагаем высококачественные изделия и профессиональные услуги, ориентированные на надежность, инновации и долгосрочное сотрудничество.

                        </p>
                    </div>

                </div>
            </div>
            <div className={"mt-100 container"}>
                <p className={"text6"}>
                    Основные ценности нашей компании
                </p>
                <div className={"grid_about mt-35"}>
                    <p className={"text_company"}>
                        • Качество: <br/>Мы стремимся к постоянному совершенствованию всех процессов и используем только высококачественные материалы для достижения исключительных результатов.
                    </p>
                    <p className={"text_company"}>
                        • Инновации:
                        <br/>
                        Мы поощряем творчество и разрабатываем новые технологии, позволяющие нам идти в ногу с временем и предлагать современные решения.
                    </p>
                    <p className={"text_company"}>
                        • Ответственность:
                        <br/>
                        Мы принимаем на себя ответственность за нашу работу и последствия, обеспечивая прозрачность и честность в отношениях с клиентами и партнерами.
                    </p>
                    <p className={"text_company"}>
                        • Командная работа:
                        <br/>
                        Мы верим, что успех достигается совместными усилиями. Поддерживаем командный дух и гордимся вкладом каждого сотрудника.
                    </p>
                    <p className={"text_company"}>
                        • Клиентоориентированность:
                        <br/>
                        Понимание потребностей клиентов — наш приоритет. Мы стремимся создать долгосрочные партнерские отношения, основанные на доверии и взаимовыгодном сотрудничестве.
                    </p>
                    <p className={"text_company"}>
                        • Безопасность:
                        <br/>
                        Обеспечение безопасных условий труда для наших сотрудников — наша главная задача. Мы непрерывно работаем над улучшением стандартов техники безопасности.
                    </p>
                    <p className={"text_company"}>
                        • Развитие:
                        <br/>
                        Стремление к постоянному обучению и профессиональному росту — наше кредо, чтобы быть на шаг впереди в индустрии.
                    </p>
                    <p className={"text_company"}>
                        • Уважение:
                        <br/>
                        Мы ценим и уважаем всех сотрудников, партнеров и клиентов, создавая благоприятную атмосферу для общения и сотрудничества.
                    </p>

                </div>
            </div>
            <div className={"container mt-100"}>
                <div className={"mt-50 d-f display_about"}>

                    <div className={"max_width500"}>
                        <p className={"text6"}>
                            К каждому проекту подходим индивидуально
                        </p>
                        <p className={"text_company mt-20"}>
                            Мы планируем расширение производственных мощностей и внедрение новых технологий для повышения эффективности и качества производства.
                            <br/>
                            <br/>
                            Акцент на устойчивое развитие и экологические инициативы также является важной частью нашей стратегии. Мы стремимся улучшать процесс и предлагать нашим клиентам самые современные решения
                        </p>
                    </div>
                    <div>
                        <Image alt="изображение" src={image_bgc3_about} className={"image_block_none"}/>
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

export default About;
