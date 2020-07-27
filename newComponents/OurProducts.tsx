import React, {useContext} from "react";
import {ProductsContext} from "../context/ProductsContext";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";

const OurProducts = () => {
    const [products] = useContext(ProductsContext)
    const { locale } = useTranslation();

    console.log(products);

    return (
        <section className="container our-products">
            <h2 className="our-products__title">
                НАША ПРОДУКЦИЯ
            </h2>
            <Link href={'/[lang]/Catalog'} as={`/${locale}/Catalog`}>
            <h3 className="our-products__catalog-link">
                <span style={{
                    marginRight: "10px"
                }}>ВЕСЬ КАТАЛОГ</span>
                <img src={require("../public/images/triple-arrows.png")} alt="" className="our-products__img"/>
            </h3>
            </Link>
            <div className="our-products-container">
                {
                    products.map(({ img, title }, idx) => (
                        <div key={idx} className="article our-products__item"><img src={img} alt="" className="our-products__img"/>
                            <div className="our-products__product-name">{title}</div>
                            <button className="our-products__button">Получить прайс</button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default OurProducts