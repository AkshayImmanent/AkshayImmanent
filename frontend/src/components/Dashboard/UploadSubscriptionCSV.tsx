
export const UploadSubscriptionCSV = () => {
    return (
        <>
            {/* Main */}
            <div className="welcome_row">
                <div>
                    <h4 className="subs">Your Subscription CSVs </h4>
                    <p className="sma_ll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis tristique
                        consectetur. Nulla porta elementum rutrum. Donec dapibus, odio sit amet</p>
                </div>
                <div className="rtbtn subs_row">
                    <div><span>STEP 1</span>
                        <h5><a href="#">Download Template</a></h5>
                    </div>
                    <div><span>STEP 1</span>
                        <div className='file_btn file--upload'>
                            <label htmlFor='input-file'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
                                    <path
                                        d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
                                    <path
                                        d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                </svg>Upload
                            </label>
                            <input id='input-file' type='file' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Notification */}
            <div className="noti_fication">
                <h5 className="pdf_icon">mindevolved-Statement-20210630.pdf &nbsp; &nbsp; <span>904 KB</span></h5>
                <h5 className="del"><a href="#">X <span>Delete</span></a></h5>
            </div>
        </>
    )
}
