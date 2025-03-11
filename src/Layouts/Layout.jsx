import { Outlet } from "react-router"


export default function Layout(){
    return <div className="Layout">
    <header>
        <h1>Projecto de gestión</h1>
        <nav className="HeaderNav">
            <ul className="HeaderList">
            <a href="/">
                <li className="HeaderLi">
                Inicio
                </li>
                </a>
                <a href="/addForm">
                <li className="HeaderLi">Ingresar visita</li>
                </a>
                <a href="/AddFormVolunteer">
                <li className="HeaderLi">Ingresar voluntario</li>
                </a>
                <a href="/ShowData">
                <li className="HeaderLi">Registros</li>
                </a>
            </ul>
        </nav>
    </header>

    <main>
        <Outlet></Outlet>
    </main>
    </div>
}