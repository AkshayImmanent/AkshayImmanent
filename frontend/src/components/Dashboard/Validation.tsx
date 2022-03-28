import React, { ReactNode, FC } from 'react'

export enum ValidationIcons {
    pdf = "pdf_icon",
    check = "grn_tick"
}

interface ValidationProps {
    icon: ValidationIcons;
    action?: [string, () => void]
}


export const Validation: FC<ValidationProps> = ({
    icon,
    children,
    action
}) => {
    return (
        <div className="noti_fication">
            <h5 className={icon}>{children}</h5>
            {action && <Action name={action[0]} callback={action[1]} />}
        </div>
    )
}


const Action: FC<{ name: string, callback: () => void }> = ({ name, callback }) => {
    return (
        <h5 className="del" onClick={callback}>
            <a href="#">
                X <span>{name}</span>
            </a>
        </h5>
    )
}