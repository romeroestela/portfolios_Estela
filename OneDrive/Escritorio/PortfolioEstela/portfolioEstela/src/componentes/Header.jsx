
function Header() {
    return (
        <header>
            <nav className="barra-navegacion navbar navbar-expand-lg">
                <div className="container-fluid p-0">
                    <img src="/LogoP.png" alt="Logo" width="35" height="35" className="d-inline-block align-text-top p-0"/> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active nav-link-hover" aria-current="page" href="#">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-hover" href="">Experiencia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-hover" href="#">Sobre mí</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
      
    )
  }
  
  export default Header