import Link from "next/link";
import Card from "../Card";
const CommonMistakesRow = ({commonMistakes}) => {
    return (
        <div className="container mt-3 mb-lg-0 pb-3">
             <div className="row mx-0 justify-content-center align-items-center flex-row-reverse mt-4 ">
                    <div className="d-flex justify-content-center justify-content-lg-cener">
                        <p className="border-bottom-main-1 w-fitcontent me-0 fs-3 fw-bold ff-ybakh">
                         اشتباهات رایج زبان انگلیسی
                        </p>
                    </div>
                    <p className="text-center text-lg-center ff-ybakh mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

                        {commonMistakes ? 
                            commonMistakes.slice(0,4).map(commonMistake => <div key={commonMistake.slug} className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                    <Card cardSlug={`/articles/commonmistakes/${commonMistake.slug}`}  linkType="مقاله" {...commonMistake} />
                            </div>)
                            : <p>error</p>
                        }
                    <div className="d-flex justify-content-center mt-3 ">
                        <Link className="bg-success text-white fs-15 py-2 px-3 rounded" href={`/articles/commonmistakes`}>
                            <i className="bi bi-chevron-left"></i>
                            <span>
                                مشاهده همه ی اشتباهات زبان انگلیسی  
                            </span>
                        </Link>
                    </div>
             </div>
        </div>
    );
};

export default CommonMistakesRow;