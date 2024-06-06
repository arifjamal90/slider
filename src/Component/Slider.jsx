import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

const Sliders = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div className="child">1
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, doloremque! Modi, repudiandae. Provident animi aperiam molestiae, voluptatibus eum quae, dolores illum quia enim quas numquam, consectetur necessitatibus praesentium optio expedita?</p>
            </div>
            <div className="child">2</div>
            <div className="child">3</div>
            <div className="child">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, doloremque! Modi, repudiandae. Provident animi aperiam molestiae, voluptatibus eum quae, dolores illum quia enim quas numquam, consectetur necessitatibus praesentium optio expedita?</p>
            </div>
            <div className="child">5</div>
            <div className="child">6</div>
            <div className="child">7</div>
            <div className="child">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, doloremque! Modi, repudiandae. Provident animi aperiam molestiae, voluptatibus eum quae, dolores illum quia enim quas numquam, consectetur necessitatibus praesentium optio expedita?</p>
            </div>
            <div className="child">9</div>
            <div className="child">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, doloremque! Modi, repudiandae. Provident animi aperiam molestiae, voluptatibus eum quae, dolores illum quia enim quas numquam, consectetur necessitatibus praesentium optio expedita?</p>
            </div>
        </Slider>
    );
}

export default Sliders;
