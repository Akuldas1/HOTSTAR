import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../Languages/Language.css"
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
                    <button className="lang-barrow z-10" onClick={onClick}>
                        <IoIosArrowBack style={{ color: 'white', fontSize: '30px' }} />
                    </button>
                )}
            </>
        );
    };

    const NextArrow = (props) => {
        let slidesToShow = 5
        const { onClick, slideCount, currentSlide } = props;
        return (
            <>
                {currentSlide !== slideCount - slidesToShow && (

                    <button className={'lang-farrow'} onClick={onClick}>
                        <IoIosArrowForward style={{ color: 'white', fontSize: '30px' }} />
                    </button>
                )}
            </>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        TotalSlidesCount: 10,
        currentSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }; 

    return (
        <>
            <div className='h-full'>
                <div className='relative flex flex-col gap-32 h-10'>
                    <Slider {...settings}>
                        <div className='hover:scale-110'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" className='w-60 rounded'/>
                        </div>
                        <div className='hover:scale-110'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae" alt="" className='w-60 rounded' />

                        </div>
                        <div className='hover:scale-110'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563" alt="" className='w-60 rounded' />

                        </div>
                        <div className='hover:scale-110'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61" alt="" className='w-60 rounded' />

                        </div>
                        <div className='hover:scale-110'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8" alt="" className='w-60 rounded' />
                        </div>
                        <div className='hover:scale-110'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e" alt="" className='w-60 rounded' />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Languages
