import React from "react";
import "./Carousel.css";
import img1 from "../../images/visited_surecash.jpg";
import img2 from "../../images/beautyful-traffic-seoul-night-cityscape-south-korea-with-motion-blur.jpg";
import img3 from "../../images/shanghai-street-view.jpg";

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active img-container">
            <img
              src={img1}
              className="d-block w-100 img-style"
              alt="..."
            />
            <div className="para-style">
              <div>
                <h3>
                  Rupali bank SureCash and Bangladesh Shishu Academy made an
                  argument
                </h3>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="carousel-item active img-container">
            <img
              src={img2}
              className="d-block w-100 img-style"
              alt="..."
            />
            <div className="para-style">
              <div>
                <h3>
                  Rupali bank SureCash and Bangladesh Shishu Academy made an
                  argument
                </h3>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="carousel-item active img-container">
            <img
              src={img3}
              className="d-block w-100 img-style"
              alt="..."
            />
            <div className="para-style">
              <div>
                <h3>
                  Rupali bank SureCash and Bangladesh Shishu Academy made an
                  argument
                </h3>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
