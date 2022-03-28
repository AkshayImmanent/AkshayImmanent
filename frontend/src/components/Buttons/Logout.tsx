import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Logout = () => {
    const { logout } = useAuth0()
    return (
        <li>
            <button
                className='dropdown-item'
                onClick={() => {
                    logout({
                        returnTo: window.location.origin,
                    })
                }}
            >
                Log Out
            </button>
        </li>
    )
}
