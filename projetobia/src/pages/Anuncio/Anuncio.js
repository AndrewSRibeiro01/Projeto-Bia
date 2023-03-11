import { useParams } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Publish from "../../Components/Publish/Publish"


const Anuncio = () => {


    return (
        <div>
            <Header />
            <Publish />
            <Footer />
        </div>
    )
}
export default Anuncio