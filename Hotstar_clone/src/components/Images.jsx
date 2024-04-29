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
        const { onClick } = props;
        return (
          <button className="slick-prev" onClick={onClick}>
            <IoIosArrowBack />
          </button>
        );
      };
      
      const NextArrow = (props) => {
        const { onClick } = props;
        return (
          <button className="slick-next" onClick={onClick}>
            <IoIosArrowForward />
          </button>
        );
      };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <>
            <div className="slider-container w-96 flex flex-col gap-1">
                <Slider {...settings}>
                    <div className='-z-10'>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6363/1714177996363-h" className='h-10 w-20 rounded'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5297/1713783395297-h" className='h-10 w-20 rounded'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/1347/1713783471347-h" className='h-10 w-20 rounded'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/7496/907496-h" className='h-10 w-20 rounded'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/4892/1514892-h-bbb227f72be7" className='h-10 w-20 rounded'/>
                    </div>
                    <div>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6323/1306323-h-9296870a6592" className='h-10 w-20 rounded'/>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Images;


