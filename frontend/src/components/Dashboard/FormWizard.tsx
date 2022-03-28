import React from 'react'

export const FormWizard = () => {
    return (
        <div className="welcome_right">
            <div className="welcome_right_inner">
                <h3>Completion Progress</h3>
                <p className="sma_ll">The more data you provide the better result you will achieve on your underwritting</p>
                <ul>
                    <li className="active">Upload your Bank Statement </li>
                    <li>Upload your subscription CSVs </li>
                    <li>Connect your Accounting Software</li>
                </ul>

                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2"
                    className="btn dissable">SUBMIT MY DATA</button>

            </div>
        </div>
    )
}
