import { useRouter } from 'next/router';
import NeonButton from '../NeonButton';

const PlacementTestRow = () => {
    const route = useRouter();
    return (
        <div>
            <div
            style={{backgroundColor:"#e9f2ff"}}
            className="w-100 mt-4">
                <div style={{overflow: "hidden"}}>
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: '#ffffff', width: '100%', height: 75, transform: 'scaleX(-1)' }}
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
                <div className="container pb-3 pb-lg-0">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-lg-6 d-flex justify-content-center ">
                            <img 
                            width={"300px"}
                            src="/8703996_book_notepad_notebook_notebook_notebook_color_color_dynamic_notebook.png" />
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center flex-column align-items-lg-end ">
                                <p style={{direction:"rtl"}} className="border-bottom-main-1 text-center text-lg-end fs-3 fw-bold">
                                    با MobashEnglish خودتو محک بزن
                                </p>
                                <p
                                style={{
                                    direction:"rtl",
                                    textAlign:"justify",
                                    lineHeight:"30px",
                                    fontSize:"15px",
                                    padding:"10px 10px"
                                }}
                                >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                </p>
                                <div 
                                style={{width:"157px"}}
                                className=''>
                                    <NeonButton name="تعیین سطح آنلاین" clickHandler={()=> {route.push("/tests/placement")}} />
                                </div>

                        </div>
                    </div>
                </div>
                <div style={{overflow:"hidden"}}>
                      <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#ffffff', width: '100%', height: 75, transform: 'rotate(180deg) scaleX(-1)' }}
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


            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e9f2ff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,144C384,107,480,53,576,58.7C672,64,768,128,864,176C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
        </div>
    );
};

export default PlacementTestRow;