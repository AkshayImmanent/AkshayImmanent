import React from 'react'

export const LinkAccounts = () => {
    return (
        <>
            {/* Main */}
            <div className="welcome_row">
                <div>
                    <h4 className="acc">Your Accounting Software</h4>
                    <p className="sma_ll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis tristique
                        consectetur. Nulla porta elementum rutrum. Donec dapibus, odio sit amet</p>
                </div>
                <div className="rtbtn">

                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1"
                        className="btn2">Connect...</button>
                </div>
            </div>
            {/* Notification */}
            <div className="noti_fication">
                <h5 className="grn_tick">Connected to XERO</h5>
                <h5 className="del"><a href="#">X <span>Disconnect</span></a></h5>
            </div>
        </>
    )
}
