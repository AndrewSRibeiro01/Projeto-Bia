import styled from "styled-components";
import Patroa from "../../Imagens/LogoBia.png"
import Patroa1 from "../../Imagens/LogoBia1.png"


const Navbar = styled.header`
  background-color: #e4b1a5;
  width: 100%;
  height: 80px;
  display: flow-root;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`
const ImgPatroa = styled.img`
  width: 148px;
`
function Header() {
  return (
    <Navbar>

      <nav class="navbar bg-body- " style={{margin:"0", padding: "0"}}>
        <div class="container-fluid" style={{ background: "#e4b1a5", margin:"0 10px 0px 0px", padding: "0" }}>
          <a class="navbar-brand" href="#" style={{ color: "white", fontWeight: "500", margin: "0", padding: "0" }}> <ImgPatroa src={Patroa1} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon" />
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <p class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>

    </Navbar>
  )
}

export default Header;