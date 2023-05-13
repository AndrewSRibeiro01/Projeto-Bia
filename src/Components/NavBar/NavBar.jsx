import { patroa1 } from "../assets"
import { Link } from "react-router-dom"
import { H5, Button, Navbar, ImgPatroa } from "../../Estilizações/EHeader"
import Map from "./Map"
import variedades from "../../db/db"
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
    return (
        <Navbar>
            <nav className="navbar bg-body- " style={{ margin: "0", padding: "0" }}>
                <div class="container-fluid" style={{ background: "#e4b1a5", margin: "0 10px 0px 0px", padding: "0" }}>
                    <Link to={"/"} style={{ color: "white", fontWeight: "500", margin: "0", padding: "0" }}
                        className="navbar-brand"> <ImgPatroa src={patroa1} draggable="false" />
                    </Link>
                    <Button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" >
                        <h2><AiOutlineMenu /></h2>
                    </Button>
                    <div style={{ background: "#e4b1a5" }} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header" style={{ justifyContent: "center" }}>
                            <H5 className="offcanvas-title" id="offcanvasNavbarLabel">Variedades</H5>
                            <Button className="btn-close" data-bs-dismiss="offcanvas"></Button>
                        </div>
                        <div style={{ height: "auto", overflow: "auto" }}>
                            {variedades.map((item, index) => (
                                <Map key={index}{...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </Navbar>
    )
}

export default NavBar