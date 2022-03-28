import React, { FC } from 'react'

export const DropdownItem: FC<{ callback?: () => void }> = ({
    callback,
    children
}) => {
    return (
        <li>
            <button
                className='dropdown-item'
                onClick={callback}
            >
                {children}
            </button>
        </li>
    )
}
