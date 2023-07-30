import Link from "next/link";
import HeaderNavbar from "./HeaderNavbar";
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={`${styles.mainHeader} bg-white position-sticky top-0 py-2 py-lg-0 px-4 px-lg-5 border shadow-sm`}>
    <div className="d-flex justify-content-between align-items-center">
        <Link href="/" className="text-decoration-none">
            <div className="d-flex align-items-center text-decoration-none">
            <img className="w-60 logo rounded-circle me-2" src="/logo.jpg" alt="logo" />
            <div className="text-start">
                <p className="my-0 ms-1 fw-bold fs-5 text-main-color-1 text-decoration-none">
                    MobashEnglish
                </p>
                <p className="fs-10 my-0 ms-1 text-main-color-1">
                    آموزش زبان انگلیسی
                </p>
            </div>
        </div>
      </Link>
        </div>
        <button className="btn d-lg-none p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#hambergur-menu">
            <svg style={{width:"35px" , height:"35px"}} className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuRoundedIcon"><path style={{fill:'#757575'}} d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg>
        </button>
        <HeaderNavbar />
  </header>
    );
};

export default Header;