import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Images() {
    const [horrorMovies, setHorrorMovies] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.sampleapis.com/movies/horror')
    //         .then(response => response.json())
    //         .then(data => setHorrorMovies(data))
    //         .catch(err => console.log(err));
    // }, []);
    
    const PrevArrow = (props) => {
        const { onClick ,currentSlide} = props;
        return (
            <>
            {currentSlide!=0 &&(
                <button className="arrow absolute h-11 top-0 -left-3 z-10 bg-gradient-to-r from-black" onClick={onClick}>
                <IoIosArrowBack style={{color:'white', fontSize:'30px'}}/>
                </button>
            )}
            </>
        );
      };
      
      const NextArrow = (props) => {
        let slidesToShow = 4.5
        const { onClick, slideCount,currentSlide} = props;
        return (
            <>
            {currentSlide !== slideCount-slidesToShow &&(

                <button className={'arrow absolute h-11 bottom-1.5 -right-3 bg-gradient-to-l from-black'} onClick={onClick}>
                <IoIosArrowForward style={{color:'white', fontSize:'30px'}}/>
                </button>
            )}
            </>
        );
      };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 5,
        TotalSlidesCount:10,
        currentSlide:0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <>
            <div className="slider-container w-96 flex flex-col gap-1">
                <Slider {...settings}>
                    <div className=''>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6363/1714177996363-h" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5297/1713783395297-h" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/1347/1713783471347-h" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/7496/907496-h" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/4892/1514892-h-bbb227f72be7" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110'/>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Images