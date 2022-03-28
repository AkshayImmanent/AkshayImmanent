import React from 'react'

export const LinkBankStatement = () => {
    return (
        <>
            {/** Main */}
            <div className="welcome_row">
                <div>
                    <h4 className="bnk">Your Bank Statement</h4>
                    <p className="sma_ll">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis tristique
                        consectella porta elementum rutrum.
                    </p>
                </div>
                <div className="rtbtn">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        className="btn2">Connect...</button>
                </div>
            </div>
            {/** Notification */}
            <div className="noti_fication">
                <h5 className="grn_tick">Access granted to your bank account</h5>
                <h5 className="del"><a href="#">X <span>Deny Access</span></a></h5>
            </div>
        </>
    )
}
