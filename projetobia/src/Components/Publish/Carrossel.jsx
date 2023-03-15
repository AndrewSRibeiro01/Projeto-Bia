import React from "react"
import { Imagem, H1 } from "../../Estilizações/EMain"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from "swiper";
import data from "./db.json";

export const Carrossel = () => {
    return (
        <div>
            <H1> Destaques da semana </H1>
            <Swiper style={{ width: "100%" }}
                spaceBetween={-30}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
                freeMode={true}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, }}

                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: -50,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: -95,
                    },
                    1800: {
                        slidesPerView: 3,
                        spaceBetween: -220,
                    }
                }}>

                {data.fotos.map((index, key) =>
                    <SwiperSlide key={key}>
                        <Link to="/Anuncio/99" style={{ textDecoration: "none", color: "black" }}>
                            <Imagem src={index} alt="Camisa" style={{ border: "solid #eb9c20" }} />
                        </Link>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}