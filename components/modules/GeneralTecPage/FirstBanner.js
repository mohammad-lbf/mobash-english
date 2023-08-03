import styles from './firstBanner.module.css';

const FirstBanner = () => {
    return (
        <div className={`${styles.bannerContainer}`}>
            <div className={`${styles.banner}`}>
                <p 
                className={`ff-ybakh-exbold ${styles.titr}`}>آموزش های عمومی</p>
                <p className={` ${styles.description} ff-ybakh`}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <a
                href='#generaltecs' 
                id='generaltecs'
                className='fw-bold'>
                    مشاهده ی آموزش ها
                </a>
            </div>
        </div>
    );
};

export default FirstBanner;