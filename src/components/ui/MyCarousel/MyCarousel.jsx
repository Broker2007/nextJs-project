"use client";

import React, { useEffect, useRef, useState } from "react";
import 'animate.css';
import Image from "next/image";
import arrow_right from "@/assets/arrow1.svg";
import arrow_left from "@/assets/arrow_left.svg";
import Accordion2 from "@/components/ui/Accordion2/Accordion2/Accordion2";

const MyCarousel = ({ data }) => {
    const [slide, setSlide] = useState(0);
    const ref = useRef(null);
    const [numberRef, setNumberRef] = useState(null);
    const [windowSize, setWindowSize] = useState({ innerWidth: 0, innerHeight: 0 });

    const [accorRef, setAccorRef] = useState(numberRef);

    useEffect(() => {
        function getWindowSize() {
            if (typeof window !== "undefined") {
                return { innerWidth: window.innerWidth, innerHeight: window.innerHeight };
            }
            return { innerWidth: 0, innerHeight: 0 };
        }

        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        setWindowSize(getWindowSize()); // Устанавливаем размер окна при монтировании

        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (windowSize.innerWidth >= 1200) {
            setNumberRef(500);
        } else {
            setNumberRef(410);
        }
    }, [windowSize]);

    const nextSlide = () => {
        setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    return (
        <div className="carousel" ref={ref} style={{ height: accorRef }}>
            <div>
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className={
                            slide === idx
                                ? "slide animate__animated animate__zoomIn d-f jc-sp"
                                : "slide slide-hidden animate__animated animate__fadeOutBottomRight"
                        }
                    >
                        <div className="max_width750">
                            <p className="text6">{item.action.title}</p>
                            <div className="text3">
                                <Accordion2
                                    accordion_inf={item.action.accordion_inf}
                                    setAccorRef={setAccorRef}
                                    accorRef={accorRef}
                                    windowSize={windowSize}
                                    boolSlide={slide === idx}
                                />
                            </div>
                        </div>
                        <Image src={item.src} alt="carousel image" width={1200} height={800} className="image_homepage image_block_none" />
                    </div>
                ))}
                <div className="arrow_parent d-f gap25">
                    <Image src={arrow_left} onClick={prevSlide} className="arrow arrow-left" alt="prev slide" />
                    <Image src={arrow_right} onClick={nextSlide} className="arrow arrow-right" alt="next slide" />
                </div>
            </div>
        </div>
    );
};

export default MyCarousel;
