import { Imagem, Div } from "../../Estilizações/EMain"
import { Principal, Espaço } from "../../Estilizações/EPublish"
import { MaisAnuncios } from "../CardDescrição/CardDescrição"
import { useNavigate, useParams } from "react-router-dom"
import Botão from "../Botão/Botão"
import data from "../../db/db.json"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation } from "swiper";

const Publish = (props) => {

    const [values, setValues] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const values = data.filter(item => item.id == id)
        const values1 = data.find(item => item.id == id)

        if (!values || !values1) navigate('/404')
        setValues(values)
    }, [])

    return (
        <Principal>
            <Espaço />
            <div>
                <Swiper
                    spaceBetween={30}
                    modules={[Autoplay, FreeMode, Navigation]}
                    navigation={true}
                    className="mySwiper"
                    freeMode={true}
                    slidesPerView={1}
                >

                    {values.length > 0 && values.map((value, key) =>


                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            {value.images.map((image, index) =>
                                <SwiperSlide key={key}>
                                    <Imagem key={index} draggable="false" src={image} alt="Camisa" width="74%" style={{ border: "solid #eb9c20" }} />

                                    <p className="card-text" style={{ background: "white", fontWeight: "400px", color: "rgb(149 101 26)", display: "flex", justifyContent: "center", maxWidth: "300px", border: "solid #eb9c20", borderRadius: "10px", margin: "auto" }}>R${value.price},00 <br />{value.description}
                                    </p>
                                </SwiperSlide>
                            )}
                            <Div />
                        </Link>

                    )}
                </Swiper>
            </div>
            <Botão />
            <MaisAnuncios description={values.description} />
        </Principal >
    )
}
export default Publish