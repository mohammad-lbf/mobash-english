import NeonButton from "./NeonButton";
import styles from './secondNavbar.module.css';
import { useRouter } from "next/router";

const SecondNavbar = () => {
    const route = useRouter();

    return (
    //     <nav className="justify-content-between mobile-nav-2 d-flex flex-row-reverse">
    //     <div className="search-bar justify-content-end rounded align-items-center d-flex bg-mycolor1 p-2">
    //         <input type="search" className="search-input w-100 text-end" placeholder="جستجو" />
    //         <i className="icon bi bi-search me-2"></i>
    //     </div>
    //     <div className="d-flex align-items-center">
    //         <div className="d-flex flex-row-reverse align-items-center" role="button" data-bs-toggle="modal" data-bs-target="#login-modal"> 
    //             <i className="icon bi bi-box-arrow-in-left lh-0 me-2"></i>
    //             <p className="mb-1 me-1">ورود</p>
    //         </div>
    //     </div>
    //    </nav>
          <nav className={`${styles.SecondNavbar} container-fluid border-bottom`}>
              <div className="row flex-row-reverse justify-content-center justify-content-md-between align-items-center px-2 px-sm-4 py-3 px-lg-5">
                    <div className="col-12 col-md-6 col-xl-5 p-0">
                        <div
                         style={{backgroundColor:"#f0f0f0"}} 
                         className={`${styles.searchBar}  ps-2 pe-3 border-0 p-0 justify-content-between rounded align-items-center d-flex bg-mycolor1 p-2`}>
                                <button className="bg-dark text-light text-white  border-0 rounded py-1 px-3 ">
                                    جستجو
                                </button>
                            <div className="d-flex align-items-center">
                                <input 
                                style={{background:"none" , border:"none"}}
                                type="search" 
                                className={`${styles.searchInput} text-end`} 
                                placeholder="جستجو" />
                                <i className="icon bi bi-search"></i>
                            </div>
                        </div>  
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="mt-4 mt-md-0 p-lg-0 d-flex flex-column-reverse flex-sm-row justify-content-center justify-content-md-start align-items-center">
                            <NeonButton name={`تعیین سطح آنلاین`} clickHandler={()=> route.push("/tests/placement-test") } />
                            <span className="fs-13 mb-3 mb-sm-0 ms-0 ms-sm-3">
                                !همین الان تعیین سطح کن
                            </span>
                        </div>
                    </div>
              </div>
          </nav>
    );
};

export default SecondNavbar;