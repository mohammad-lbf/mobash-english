import Link from "next/link";
import Card from "../Card";


const GrammersRow = ({grammerCategories}) => {
    return (
        <div className="container mt-3 mb-lg-0 pb-0">
             <div className="row mx-0 justify-content-center align-items-center flex-row-reverse mt-4 ">
                    <div className="d-flex justify-content-center justify-content-lg-center">
                        <p className="border-bottom-main-1 w-fitcontent me-0 fs-3 fw-bold ff-ybakh">
                         گرامر ها
                        </p>
                    </div>
                    <p className="text-center text-lg-center ff-ybakh mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

                        {grammerCategories ? 
                            grammerCategories.map(grammer => <div className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                    <Card cardSlug={`/articles/grammer/${grammer.slug}`} linkType="مقالات" {...grammer} />
                            </div>)
                            : <p>error</p>
                        }
                    <div className="d-flex justify-content-center mt-4">
                        <Link className="bg-success text-white py-2 px-3 rounded" href={`/articles/grammer`}>
                            <i className="bi bi-chevron-left"></i>
                            <span>
                                مشاهده ی همه گرامر ها   
                            </span>
                        </Link>
                    </div>
             </div>
        </div>
    );
};

export default GrammersRow;