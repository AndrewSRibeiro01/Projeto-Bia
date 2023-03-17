import { Rodape, Sac, Imagem } from "../../Estilizações/EFooter"
import LogoWhatsapp from "../../Imagens/whatsApp.png"
import LogoInsta from "../../Imagens/Insta.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Rodape>
            <a href="https://www.instagram.com/biancarodrigueixx/" target="_blank" style={{ textDecoration: "none", color:"white" }}><Sac>Instagram <br /> <Imagem src={LogoInsta} /> </Sac></a>
            
                <a href="https://wa.me/5511934627103?text=Oi%2C+Bianca%2C+estava+olhando+sua+pagina" target="_blank"  style={{ textDecoration: "none", color:"white"}}><Sac>Contato <br /> <Imagem src={LogoWhatsapp} /></Sac></a>
        </Rodape>
    )
}
export default Footer