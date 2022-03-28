import React from 'react'
import Logo from "../../assets/images/logo.svg"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UserNav } from "../Navigation/UserNav";
import { NotificationsIcon } from '../Misc/NotificationsIcon';
import { MainNav } from '../Navigation/MainNav';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    {/* fundabl logo */}
                    <a className="navbar-brand" href="#page-top"><img src={Logo} /></a>
                    {/* nav button visible in mobile view */}
                    <button className="navbar-toggler text-uppercase font-weight-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {/* main nav */}
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <MainNav />
                        {/* notifications */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item noti mx-0 mx-lg-1">
                                <NotificationsIcon />
                            </li>
                            {/* user nav */}
                            <li className="nav-item dropdown">
                                <UserNav />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export { Header };