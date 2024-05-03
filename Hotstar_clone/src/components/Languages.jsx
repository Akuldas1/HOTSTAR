import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Languages() {
    const [horrorMovies, setHorrorMovies] = useState([]);
    const PrevArrow = (props) => {
        const { onClick, currentSlide } = props;
        return (
            <>
                {currentSlide != 0 && (
                    <button className="arrow absolute h-11 top-0 -left-3 z-10 bg-gradient-to-r from-black" onClick={onClick}>
                        <IoIosArrowBack style={{ color: 'white', fontSize: '30px' }} />
                    </button>
                )}
            </>
        );
    };

    const NextArrow = (props) => {
        let slidesToShow = 4.5
        const { onClick, slideCount, currentSlide } = props;
        return (
            <>
                {currentSlide !== slideCount - slidesToShow && (

                    <button className={'arrow absolute h-11 bottom-1.5 -right-3 bg-gradient-to-l from-black'} onClick={onClick}>
                        <IoIosArrowForward style={{ color: 'white', fontSize: '30px' }} />
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
        TotalSlidesCount: 10,
        currentSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <>
            <Slider {...settings}>
                <div className='text-white'>
                   <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />
                </div>
                <div className='text-white'>
                   <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />
                    
                </div>
                <div className='text-white'>
                <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />
               
                </div>
                <div className='text-white'>
                <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />

                </div>
                <div className='text-white'>
                <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />  
                </div>
                <div className='text-white'>
                <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />
                </div>
            </Slider>
        </>
    );
}

export default Languages