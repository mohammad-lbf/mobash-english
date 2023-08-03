import Card from '../Card'

const TeachesRow = ({generalTecs}) => {
    return (
        <div className="container mt-3 mb-5 pb-0">
        <div className="row mx-0 justify-content-center align-items-center flex-row-reverse mt-4 ">
               <div className="d-flex justify-content-center justify-content-lg-center">
                   <p className="border-bottom-main-1 w-fitcontent me-0 fs-3 fw-bold ff-ybakh">
                    آموزش های عمومی
                   </p>
               </div>
               <p className="text-center text-lg-center ff-ybakh mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

                   {generalTecs ? 
                       generalTecs.map(generalTec => <div key={generalTec.slug} className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                               <Card cardSlug={`/generaltec/${generalTec.slug}`} linkType="مقاله" {...generalTec} />
                       </div>)
                       : <p>error</p>
                   }
        </div>
   </div>
    );
};

export default TeachesRow;