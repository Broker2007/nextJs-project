"use client";
import { COMPANY_PHONE, COMPANY_PHONE_2, COMPANY_EMAIL } from "@/constants/info";

import React, { useMemo, useState } from "react";
import data from "@/ProductsData/ProductsData";
import Image from "next/image";
import MyButton from "@/components/ui/MyButton/MyButton";
import MySort from "@/components/MySort/MySort";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import order from "@/assets/Image_Carousel.png";
import MyButtonProduct from "@/components/ui/MyButtonProduct/MyButtonProduct";
import phone from "@/assets/Calling.svg";
import MyForm from "@/components/ui/MyForm/MyForm";

import ContactSection from "@/components/ContactSection/ContactSection";
function Products() {
    const categories = ["Все", "Строительная оснастка", "Металлообработка"];
    const [search, setSearch] = useState("");
    const [categoriesId, setCategoriesId] = useState(0);
    const [showAll, setShowAll] = useState(false);

    // Фильтрация данных с учётом поиска и выбранной категории
    const filteredData = useMemo(() => {
        let filtered = data.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        if (categoriesId !== 0) {
            filtered = filtered.filter((item) => item.categories === categoriesId);
        }
        return filtered;
    }, [search, categoriesId]);

    // Получаем данные для отображения с учётом режима "Показать все"
    const dataToDisplay = showAll ? filteredData : filteredData.slice(0, 9);

    // Функция сброса фильтра
    const zeroFilter = () => {
        setSearch("");
        setCategoriesId(0);
    };

    return (
        <main className="products">
            <MySort
                id="category"
                search={search}
                setSearch={setSearch}
                categories={categories}
                categoriesId={categoriesId}
                onClickCategories={setCategoriesId}
            />

            {filteredData.length === 0 ? (
                <div className="not_found">
                    <div className="text-align-cen text_company">
                        <p className="text6">Ничего не найдено...</p>
                        <p className="mt-15">
                            Похоже, данный товар снят с публикации.<br />
                            Воспользуйтесь формой поиска, чтобы найти подходящий товар.
                        </p>
                        <div className="mt-15 d-f jc-cen">
                            <MyButtonProduct classes="button_filter" onClick={zeroFilter} linkBool={false}>
                                Обнулить фильтры
                            </MyButtonProduct>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <TransitionGroup className="grid_products mt-50">
                        {dataToDisplay.map((itemData) => (
                            <CSSTransition key={itemData.id} timeout={500} classNames="item">
                                <div className="card_product mt-20 text-align-cen">
                                    <div className="position_r">
                                        <Image
                                            src={itemData.src}
                                            alt={itemData.title || "карточка"}
                                            width={500}
                                            height={500}
                                            className="image_cardP"
                                        />
                                        <div className="text-align-left">
                                            <p className="max_width260 text1">{itemData.title}</p>
                                            <div className="text-align-cen">
                                                <p>{categories[itemData.categories]}</p>
                                            </div>
                                            <MyButton
                                                classes="mt-10"
                                                link={`/products/${itemData.id}`}
                                            >
                                                Подробнее
                                            </MyButton>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>

                    {filteredData.length > 9 && (
                        <p
                            className="text-align-cen cursor-pointer text_company_y mt-25"
                            onClick={() => setShowAll((prev) => !prev)}
                        >
                            {showAll ? "Скрыть" : "Показать еще"}
                        </p>
                    )}
                </div>
            )}

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
}

export default Products;
