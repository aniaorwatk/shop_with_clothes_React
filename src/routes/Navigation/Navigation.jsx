import {Fragment} from "react"
import { Outlet,Link } from "react-router-dom"
import {ReactComponent as Logo} from "./../../assets/logo.svg"
import "./Navigation.style.scss"

const Navigation = () => {
    return (
        <Fragment>
            <div className="nav">
                <Link className="nav__logoLink" to="/">
                 <Logo className="nav__logo"/>
                </Link>
               
                <div className="nav__containerLinks">
                    <Link className="nav__containerLinks-link" to="/shop">
SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
