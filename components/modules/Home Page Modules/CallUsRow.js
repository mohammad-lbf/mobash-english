const CallUsRow = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center my-4">
                        <p className="border-bottom-main-1 w-fitcontent me-0 fs-3 fw-bold">
                            باهامون در ارتباط باش
                        </p>
                        <div className="d-flex align-items-center">
                            <a style={{color:"#000" , width:"50px"}} className="mx-3 text-derk" href="https://instagram.com/english_with_mobash?igshid=MzNlNGNkZWQ4Mg==" rel="noreferrer">
                                <div className="d-flex text-derk flex-column align-items-center">
                                <i style={{fontSize:"30px"}} class="text-derk bi bi-instagram"></i>
                                <span className="text-derk">
                                        اینستاگرام
                                </span>
                                </div>
                            </a>
                            <a style={{color:"#dc3545" , width:"50px"}} className="mx-3 text-derk" href="https://youtube.com/@MobashEnglish" rel="noreferrer">
                            <div className="d-flex flex-column align-items-center">
                                <i style={{fontSize:"30px"}} class="bi bi-youtube"></i>
                                <span>
                                        یوتیوب
                                    </span>
                            </div>
                            </a>
                            <a style={{color:"#000" , width:"50px"}} className="mx-3 text-derk" href="Ah.mobashery@gmail.com" rel="noreferrer">
                                <div className="d-flex flex-column align-items-center">
                                    <i style={{fontSize:"30px"}} class="bi bi-envelope-open-fill"></i>
                                    <span>
                                        ایمیل
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
        </div>
    );
};

export default CallUsRow;