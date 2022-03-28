import React from 'react'
import DemoUserLogo from "../../assets/images/company_logo.png"
import Button from "../Buttons"
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

export const UserNav = () => {
    const { user } = useAuth0();
    return (
        <>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={DemoUserLogo} />
                {/* user's name */}
                {user ? user.name : "AUTH0"}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <AuthButtons />
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a>
                </li>
            </ul>
        </>
    )
}

const AuthButtons = () => {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout
    } = useAuth0();
    const navigate = useNavigate();

    return isAuthenticated ?
        <>
            <Button.DropdownItem
                callback={() => navigate("/profile")}
            >
                Profile
            </Button.DropdownItem>
            <Button.DropdownItem
                callback={() => {
                    logout({
                        returnTo: window.location.origin
                    })
                }}
            >
                Log Out
            </Button.DropdownItem>
        </>
        :
        <>
            <Button.DropdownItem
                callback={() => loginWithRedirect()}>
                Log In
            </Button.DropdownItem>
            <Button.DropdownItem
                callback={() => {
                    loginWithRedirect({
                        screen_hint: "signup"
                    })
                }}>
                Sign Up
            </Button.DropdownItem>
        </>
}