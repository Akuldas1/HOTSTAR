import React from "react";
import { useState } from "react";
import "../Disney/Disney.css"
import Disney from "../../assets/images/disneyog.webp"
import Pixar from "../../assets/images/pixar.jpeg"
import Marvel from "../../assets/images/marvel.webp"
import Starwars from "../../assets/images/starwars.jpeg"
import NG from "../../assets/images/ng.jpg"
import HS from "../../assets/images/hs.webp"

function Disneyy() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div className="flex relative left-32 gap-8">
                <div className="img-cont" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src={Disney} className="thumbnail w-60" />
                    {isHovered && <video className="vid" src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132" loop muted autoPlay />}
                </div>

                <div className="img-cont" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src={Pixar} className="thumbnail w-60" />
                    {isHovered && <video className="vid" src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483" loop muted autoPlay />}
                </div>
                
                <div className="img-cont" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src={Marvel} className="thumbnail w-60" />
                    {isHovered && <video className="vid" src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549" loop muted autoPlay />}
                </div>

                <div className="img-cont" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src={Starwars} className="thumbnail w-60" />
                    {isHovered && <video className="vid" src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512" loop muted autoPlay />}
                </div>

                <div className="img-cont" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src={HS} className="thumbnail w-60" />
                    {isHovered && <video className="vid" src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qc9clm_1669284974594" loop muted autoPlay />}
                </div>



            </div>
        </>
    )
}

export default Disneyy