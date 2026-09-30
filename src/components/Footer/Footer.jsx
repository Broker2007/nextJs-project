import React from 'react';
import Image from "next/image";
import footer_bgc from "@/assets/logo_vek.png"
import mail from "@/assets/mail.svg"
import whatsapp from "@/assets/whatsapp.svg"
import tg from "@/assets/telegram_zltwtqsi7okn.svg"

const Footer = () => {
    return (
        <footer className={"mt-100 pb-50 pt-50 bgc_footer"}>
            <div className={"d-f flex-wrap jc-sa ai-cen container "}>
                <div className={"d-f ai-cen"} style={{ gap: 'clamp(15px, 4vw, 40px)' }}>
                    <a title='ООО "ВЕКТОР" на портале "Чекко"' href='https://checko.ru/company/vektor-1247700375196' target='_blank' rel='noopener noreferrer'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img style={{ width: 'clamp(100px, 30vw, 150px)', height: 'auto' }} src='https://checko.ru/cdn/widget/300x100_black.png' alt='Checko Widget' />
                    </a>
                    <p className={"information"} style={{ margin: 0 }}>
                        Политика конфиденциальности<br/>
                        ООО "ВЕКТОР"<br/>
                        ИНН 7733446127
                    </p>
                </div>
                <div className={"logo_footer"}>

                    <Image alt="изображение" src={footer_bgc}/>
                </div>
                <div className={"d-f jc-s gap25 ai-cen flex-wrap icons"}>
                    <Image alt="изображение" src={mail} width={40} height={40}/>
                    <Image alt="изображение" src={whatsapp} width={40} height={40}/>
                    <Image alt="изображение" src={tg} width={40} height={40}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;