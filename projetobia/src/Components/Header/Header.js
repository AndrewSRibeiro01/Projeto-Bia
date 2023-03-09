import styled from "styled-components"
import Patroa1 from "../../Imagens/LogoBia1.png"
import Vestido from "../../Imagens/Vestido.png"
import Cropped from "../../Imagens/Cropped.png"
import Biquini from "../../Imagens/Biquini.png"
import Lingerie from "../../Imagens/Lingerie.png"

const Navbar = styled.header`
  background-color: #e4b1a5;
  width: 100%;
  height: 120px;
  display: flow-root;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`
const ImgPatroa = styled.img`
  width: 224px;
`
const Header = () => {
  return (
    <Navbar>
      <nav class="navbar bg-body- " style={{ margin: "0", padding: "0" }}>
        <div class="container-fluid" style={{ background: "#e4b1a5", margin: "0 10px 0px 0px", padding: "0" }}>
          <a class="navbar-brand" href="/" style={{ color: "white", fontWeight: "500", margin: "0", padding: "0" }}> <ImgPatroa src={Patroa1} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon" />
          </button>
          <div style={{ background: "#e4b1a5" }} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 style={{ color: "white" }} class="offcanvas-title" id="offcanvasNavbarLabel">Variedades</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <div class="card" style={{ width: "160px", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
                    <img src={Vestido} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Vestidos</h5>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="card" style={{ width: "160px", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
                    <img src={Cropped} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Croppeds</h5>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="card" style={{ width: "160px", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
                    <img src={Biquini} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Biquines</h5>
                    </div>
                  </div>

                </li>
                <li class="nav-item">
                  <div class="card" style={{ width: "160px", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
                    <img src={Lingerie} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Lingerie</h5>
                    </div>
                  </div>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
              </form>
            </div>
          </div>
        </div>
      </nav>

    </Navbar>
  )
}

export default Header;