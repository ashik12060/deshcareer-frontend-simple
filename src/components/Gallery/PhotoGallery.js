import React from 'react'
import photo1 from "../../images/p1.jpg";
import photo2 from "../../images/p2.jpeg";
import photo3 from "../../images/p3.jpg";
import photo4 from "../../images/p4.jpg";
import photo5 from "../../images/p5.jpg";
import photo6 from "../../images/p6.jpeg";
const PhotoGallery = () => {
  return (
    <section className="py-5">
        <div  data-aos="fade-up"  data-aos-duration="3000">
          <h1 className="gallery">Photo Gallery</h1>
          <hr className="horizontal-style" />

          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contain-left">
                  <img className="gallery-img" src={photo1} alt="..." />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contain-mid">
                  <img className="gallery-img" src={photo2} alt="..." />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contain-right">
                  <img className="gallery-img" src={photo3} alt="..." />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contain-left">
                  <img className=" gallery-img" src={photo4} alt="..." />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contain-mid">
                  <img className="gallery-img" src={photo5} alt="..." />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contain-right">
                  <img className="gallery-img" src={photo6} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="p-2">View More</button>
        </div>
      </section>
  )
}

export default PhotoGallery