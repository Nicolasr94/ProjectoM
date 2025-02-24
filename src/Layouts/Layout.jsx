import { Outlet } from "react-router"
import "./Layout.css"
import logo from '../asset/logo-fundacion.png';

export default function Layout(){
    return <div className="container-div">
    <header>
        <div className="header-container">
            <img src={logo} alt="" />
            <nav className="header-section-nav">
                <ul className="header-section-list">
                <a href="/">
                    <li className="header-section-li">
                    Inicio
                    </li>
                    </a>
                    <a href="/addForm">
                    <li className="">Ingresar visita</li>
                    </a>
                    <a href="/AddFormVolunteer">
                    <li className="">Ingresar voluntario</li>
                    </a>
                    <a href="/ShowData">
                    <li className="">Registros</li>
                    </a>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <Outlet></Outlet>
    </main>
    </div>
}