import Link from "next/link";
import { useRouter } from "next/router";
import styles from './header.module.css';

const HeaderNavbar = () => {
    const router = useRouter();
    return (
        <div className="d-none d-lg-flex align-items-center flex-row-reverse">
            <Link className={`${styles.headerMenuItem} ${router.pathname == "/" && styles.headerNavActiveLink}`} href={"/"}>
                صفحه اصلی
            </Link>
            <Link className={`${styles.headerMenuItem} ${router.pathname == "/generaltec" && styles.headerNavActiveLink}`} href={"/generaltec"}>
                آموزش های عمومی
            </Link>
            <ul className="mb-0 p-0" style={{listStyle:"none"}}>
            <li className={`${styles.headerMenuItem} text-center ${styles.hasSubmenu}`}><i className="bi bi-chevron-down me-1"></i><span className="ff-ybakh">مقالات زبان انگلیسی</span>
                <ul style={{listStyle:"none"}} className={`${styles.submenu} text-end`}>
                  <li>
                      <Link className="w-100 text-decoration-none text-dark" href="/articles/commonmistakes">
                        اشتباهات رایج زبان انگلیسی
                      </Link>
                  </li>
                  <li><div className="d-flex justify-content-between">
                    <i className="bi bi-chevron-left"></i>گرامر
                  </div>
                    <ul className={`${styles.submenu} ${styles.submenuInner}`}>
                      <li className="w-100"><Link className="text-decoration-none w-100" href="/grammers">همه گرامر ها</Link></li>
                      <li className="w-100"><Link className="text-decoration-none w-100 d-flex flex-row-reverse" href=""><span className="ms-1">12</span><span>زمان انگلیسی</span></Link></li>
                      <li className="w-100"><Link className="text-decoration-none w-100" href="">جملات شرطی</Link></li>
                      <li className="w-100"><Link className="text-decoration-none w-100" href="">مصدر و اسم مصدر</Link></li>
                      <li className="w-100"><Link className="text-decoration-none w-100" href="">سایر</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <Link className={`${styles.headerMenuItem} ${router.pathname == "/aboutus" && styles.headerNavActiveLink}`} href={"/aboutus"}>
                درباره ما
            </Link>
            <Link className={`${styles.headerMenuItem} ${router.pathname == "/callus" && styles.headerNavActiveLink}`} href={"/callus"}>
                تماس با ما
            </Link>
        </div>
    );
};

export default HeaderNavbar;