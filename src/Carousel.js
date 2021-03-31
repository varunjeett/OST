import React from "react";
import './Carousel.css';
import img1 from './Media/A.jpeg';
import img2 from './Media/B.jpeg';
import img3 from './Media/C.jpeg';
import img4 from './Media/D.jpeg';
import img5 from './Media/E.jpeg';
import img6 from './Media/F.jpeg';


function Carousel(){

    return (
        <div class="marquee">
            <ul class="marquee-content">
                <li><img className="img1" alt="carouselImg" src={img1} /></li>
                <li><img className="img1" alt="carouselImg" src={img2} /></li>
                <li><img className="img1" alt="carouselImg" src={img3} /></li>
                <li><img className="img1" alt="carouselImg" src={img4} /></li>
                <li><img className="img1" alt="carouselImg" src={img5} /></li>


                <li><img className="img1" alt="carouselImg" src={img1} /></li>
                <li><img className="img1" alt="carouselImg" src={img2} /></li>
                <li><img className="img1" alt="carouselImg" src={img3} /></li>
                <li><img className="img1" alt="carouselImg" src={img4} /></li>
                <li><img className="img1" alt="carouselImg" src={img5} /></li>

            </ul>
        </div>
    )
}
export default Carousel;




