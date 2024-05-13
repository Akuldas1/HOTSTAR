import React, { useEffect, useState } from 'react';
import newVideo from "../../assets/video/videoplayback.mp4"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
let slidesToShow = 4.5


function Images({ movieInfo, updateMovieInfo }) {
    const handleClick = () => {

        updateMovieInfo({
            video: newVideo,
            src: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/8803/1714809038803-t",
            year: "2024",
            duration: "2h 14min",
            languages: "5 Languages",
            certification: "U/A 13+",
            description: "Manjummel boys' carefree adventure takes a dangerous turn when one of them plunges into Guna Caves, igniting a test of unity in a gripping fight for survival.",
            genre: "Adventure | Thriller | Drama | Friendship"
        });
    };

    const PrevArrow = (props) => {
        const { onClick, currentSlide } = props;
        return (
            <>
                {/* {currentSlide != 0 && (
                    <button className="arrow absolute h-11 top-0 -left-3 z-10 bg-gradient-to-r from-black" onClick={handleClick}>
                        <IoIosArrowBack style={{ color: 'white', fontSize: '30px' }} />
                    </button>
                )} */}

                {currentSlide > 0 && ( // Changed the condition to check if currentSlide is greater than 0
                    <button className="arrow absolute h-11 top-0 -left-3 z-10 bg-gradient-to-r from-black" onClick={onClick}>
                        <IoIosArrowBack style={{ color: 'white', fontSize: '30px' }} />
                    </button>
                )}

            </>
        );
    };

    const NextArrow = (props) => {
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
        nextArrow: <NextArrow />,
    };


    return (
        <>
            <div className="slider-container w-96 flex flex-col gap-1">
                <Slider {...settings}>
                    <div className=''>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6363/1714177996363-h" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5297/1713783395297-h" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/2294/1714983112294-h" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' onClick={handleClick} />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/7496/907496-h" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/4892/1514892-h-bbb227f72be7" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-11 w-20 rounded opacity-45 hover:opacity-100 hover:scale-110' />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Images