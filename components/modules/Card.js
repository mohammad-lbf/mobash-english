import Link from 'next/link';
import styles from './card.module.css';

const Card = ({coverPhoto , title , cardSlug , description , linkType}) => {
    return (
        <div className={`${styles.card} m-0 d-flex flex-column align-items-center bg-white border rounded shadow`}>
            <img loading='lazy' className={`${styles.cardImage} w-100`} src={coverPhoto.url} alt="" />
            <div className="d-flex flex-column align-items-center">
              <Link className="text-decoration-none text-center text-dark w-100 mb-0 p-0" href={cardSlug}>
                <p 
                style={{direction:"rtl" , fontFamily:"YekanBakhMedium , vazirmatn"}}
                className="w-100 text-center fw-bold fs-5 mt-3 mb-0 px-1">
                    {title}
                 </p>
              </Link>
              <p className={`${styles.cardDescription}`}>
                  {description}
              </p>
              <div className="d-flex align-items-center ">
                  <Link href={`${cardSlug}`} className={`mt-2 border-0 ${styles.cardBtn}`}>{`مشاهده ${linkType} `}</Link>
              </div>
            </div>
      </div>
    );
};

export default Card;