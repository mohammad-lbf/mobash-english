import Link from 'next/link';
import styles from './FirstBanner.module.css'
const FirstBanner = () => {
    return (
        // <!-- banner under header -->
        <div
        // style={{minHeight:"100vh"}} 
        className={`bg-dark pt-0 pt-lg-5 ${styles.firstBanner}`}>
          <section className="container text-center px-4 pb-4 shadow rounded">
              <div
              style={{padding:"70px 0"}}
              className="row  flex-lg-row align-items-center justify-content-lg-between">
                    <div className='col-12 col-lg-6'>
                    <video className='w-100 rounded' controls>
                        <source src="/videos/InShot_۲۰۲۳۰۸۰۲_۱۱۴۴۲۷۰۲۱.mp4" type="video/mp4" />
                    </video>
                    </div>
                  <div className="col-12 col-lg-5 text-center">
                      <div className="d-flex flex-column align-items-center align-items-lg-end">
                          <h1 style={{fontSize: "40px"}} className="ff-enrique fw-bold text-light text-center text-lg-end mt-3 mt-0 mb-4">
                              Mobash English
                          </h1>
                          <div className="text-center text-lg-end">
                              <p dir="rtl" className="lh-lg text-light fw-400">
                                  <span className='fs-15'>
                                    سلام دوستان, امیدوارم حال دلتون خوب باشه و خیلی خیلی خوش اومدید به سایت خودتون! 
                                    <br />
                                    من امیرحسین هستم و دراینجا قراره تمامی نکات مهمی که برای یادگیری زبان انگلیسی نیاز دارید رو بهتون آموزش بدم.
                                    
                                  </span>
                             </p>
                          </div>
                          <div className="d-flex flex-column-reverse align-items-center flex-md-row mt-2 mt-lg-4">
                              <Link href="/articles" className="btn-main-2 px-4 py-2 d-flex">
                                  مشاهده مقالات
                              </Link>
                              <Link href="/generaltec" className="btn-main-2 px-4 py-2 mb-2 mb-md-0 mb-lg-0 ms-md-2 d-flex">
                                  <i className="bi bi-chevron-left me-1"></i>
                                  آموزش های عمومی
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div style={{overflow: "hidden"}}>
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{fill: "#ffffff", width: "140%", height: "100px" , transform: "rotate(180deg)"}}
              >
                <path
                d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                opacity=".25"
              />
                <path
                  d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                  opacity=".5"
                />
                <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
              </svg>
            </div>
        </div>
    );
};

export default FirstBanner;