import React from "react";
import "./MediaCarousel.css";
import img1 from "../../images/visited_surecash.jpg";
import img2 from "../../images/beautyful-traffic-seoul-night-cityscape-south-korea-with-motion-blur.jpg";
import img3 from "../../images/shanghai-street-view.jpg";

const MediaCarousel = () => {
  return (
    <div className="carousel-container p-5">
        <h1 className="header-position">Media Coverage</h1>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide mx-lg-5 mx-md-5 mx-sm-5 mx-5 px-md-5 px-md-5 px-sm-5"
        data-bs-ride="carousel">
        <div className="carousel-inner ">
        
          <div className="carousel-item active  card  border border-2">
           
            <img src={img1} className="d-block card-imgStyle  border border-2" alt="..." />
            <div class="card-body">
              <small>Jan 15, 2023</small>
              <h5>Shishu Academy new director Anjir Liton</h5>
              <p class="card-text">
                Children's author and new Director General Anjir Liton has been
                appoited the new director general of Bangladesh Shishut Academy
                for the next three years. The Ministry of Public Administration
                issued a notification in this regard on Tuesday. Earlier on ...
                <br />
                <a href="#">Learn more</a>
              </p>
            </div>
          </div>

          <div className="carousel-item active  card  border border-2">
            <img src={img2} className="d-block card-imgStyle border border-2" alt="..." />
            <div class="card-body">
              <small>Jan 15, 2023</small>
              <h5>
                Rupali Bank Surecash and Bangladesh Shishu Academy make an
                agreement to enable the service of mobile
              </h5>
              <p class="card-text">
                SChildren's author and new Director General Anjir Liton has been
                appoited the new director general of Bangladesh Shishut Academy
                for the next three years. The Ministry of Public Administration
                issued a notification in this regard on Tuesday. Earlier on ...{" "}
                <br />
                <a href="#">Learn more</a>
              </p>
            </div>
          </div>

          <div className="carousel-item active  card  border border-2">
            <img src={img3} className="d-block card-imgStyle  border border-2" alt="..." />
            <div class="card-body">
              <small>Jan 15, 2023</small>
              <h5>
                Rupali Bank Surecash and Bangladesh Shishu Academy make an
                agreement to enable the service of mobile
              </h5>
              <p class="card-text">
                Children's author and new Director General Anjir Liton has been
                appoited the new director general of Bangladesh Shishut Academy
                for the next three years. The Ministry of Public Administration
                issued a notification in this regard on Tuesday. Earlier on ...
                <br />
                <a href="#">Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCarousel;
