import Link from 'next/link';
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.mainFooter} w-100`}>
        <div className="container pt-4 px-sm-4 rounded">
            <div className="row flex-row-reverse">
                <div className="col-12 col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center w-100 justify-content-center justify-content-lg-end">
                        <Link href="#" className="text-decoration-none">
                            <div className="d-flex align-items-center text-decoration-none">
                            <img className="w-60 logo rounded-circle" src="/logo.jpg" alt="logo" />
                            <div className={`text-start C`}>
                                <p className="my-0 ms-1 fw-bold fs-5 text-decoration-none text-light">
                                    MobashEnglish
                                </p>
                                <p className="fs-10 my-0 ms-1 text-light">
                                    آموزش زبان انگلیسی
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div>
                        <p style={{textAlign:"justify" , direction:"rtl"}} className={`lh-lg mt-4 ${styles.textColorMilky}`} >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                    <p style={{width:"130px"}} className={`mb-4 fw-bold text-center text-lg-end ${styles.textColorMilky}`}>
                        بخش های سایت
                    </p>
                    <nav style={{width:"fit-content"}} className="d-flex flex-column text-center text-lg-end">
                        <Link  className={`mx-2 mb-2 ff-ybakh pb-1 ${styles.scaleHover}`} href="#">
                            صفحه اصلی
                        </Link>
                        <Link  className={`mx-2 mb-2 ff-ybakh pb-1 ${styles.scaleHover}`} href="#">
                            آموزش های عمومی
                        </Link>
                        <Link  className={`mx-2 mb-2 ff-ybakh pb-1 ${styles.scaleHover}`} href="#">
                            مقالات زبان انگلیسی
                        </Link>
                        <Link  className={`mx-2 mb-2 ff-ybakh pb-1 ${styles.scaleHover}`} href="#">
                            درباره ما
                        </Link>
                        <Link  className={`mx-2 mb-2 ff-ybakh ${styles.scaleHover} pb-1`} href="#">
                            تماس با ما
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
        <div className="container pt-3 pb-2 d-flex flex-column align-items-center w-100 border-top border-secondary">
    <p className="text-light">
      :ما را در شبکه های اجتماعی دنبال کنید
    </p>
    <div className="d-flex justify-content-center">
      <a className={`text-decoration-none ${styles.scaleHover}`} href="https://instagram.com/english_with_mobash?igshid=MzNlNGNkZWQ4Mg==">
        <i className="fs-2 mx-3 bi bi-instagram"></i>
      </a>
      <a className={`text-decoration-none ${styles.scaleHover}`} href="https://youtube.com/@MobashEnglish">
        <i className=" fs-2  mx-3 bi bi-youtube"></i>
      </a>
  </div>
  </div>
  <div className="d-flex flex-column align-items-center text-light pt-2 container border-top border-secondary">
      <p className="mb-1"> &copy; تمامی حقوق محفوظ است</p>
      <p className="mb-2">MobashEnglish - 2023</p>
  </div>
    </footer>
    );
};

export default Footer;