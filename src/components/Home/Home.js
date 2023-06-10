import React from "react";
import "./Home.css";
import Header from "../Shared/Header/Header";
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import mujibImg from "../../images/Mujib_100_Logo.svg.png";
import hasinaPM from "../../images/sheikh_hasina_pm.jpg";
import shishuAcademy from "../../images/shishu academy.jpeg";
import img333 from "../../images/333.png";
import img999 from "../../images/999.png";
import startup from "../../images/startup bd.png";
import porichoy from "../../images/porichoy.jpeg";
import foodForNation from "../../images/foodForNation.png";
import surokkha from "../../images/surokkha.png";
// import photo1 from "../../images/p1.jpg";
// import photo2 from "../../images/p2.jpeg";
// import photo3 from "../../images/p3.jpg";
// import photo4 from "../../images/p4.jpg";
// import photo5 from "../../images/p5.jpg";
// import photo6 from "../../images/p6.jpeg";
import MediaCarousel from "../MediaCarousel/MediaCarousel";
import Address from "../Address/Address";
import HomeFooter from "../Shared/Footer/HomeFooter";
import Constituent from "../Constituent/Constituent";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Ideology from "../Ideology/Ideology";
import PhotoGallery from "../Gallery/PhotoGallery";
import VideoGallery from "../Gallery/VideoGallery";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Constituent />
      <Ideology />

{/* Inspiration */}
      <section className="leader-container">
        <div className="">
          <div className="d-flex pt-5 row">
            <div className=" pt-5 col-lg-6 col-md-12 col-sm-12 col-12 ps-md-5 pb-md-5 ps-sm-5 ps- pb-sm-5 ps-5 pb-5">
              <h2 className="">MY LEADER AND INSPIARATION</h2>
              <h4>-Hon'ble Prime Minister Sheikh Hasina</h4>
              <button className="ps-2">
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
              <img
                src={hasinaPM}
                className="w-lg-100 w-md-100 w-sm-75 w-75 h-75 ms-5  me-5"
                alt="...."
              />
            </div>
          </div>
        </div>
      </section>

      {/* upcoming event */}
      <section>
        <div className="py-5 my-5">
          <h1 className="text-style">UPCOMING EVENT</h1>
          <p className="text-center">No event found</p>
        </div>
      </section>

      {/* SHUSHU ACADEMY journey */}
      <section className=" leader-container pb-5">
        <div class=" d-flex row container">
          <div class="pt-5 col-lg-6 col-md-12 col-sm-12 col-12 ps-md-5 pb-md-5 ps-sm-5 ps- pb-sm-5 ps-5 pb-5">
            <h2 className="">MY JOURNEY WITH </h2>
            <p>
              One of the strengths to build a golden Bengal in the ideology of
              Father of the Nation Bangabandhu Sheikh Mujibur Rahman is our
              future generation, who are today's children. Bangladesh Shishu
              Academy is for children. Bangladesh Shishu Academy is working to
              develop latent talents including creative and gentle scholarship
              for the purpose of creating the spirit of great liberation war,
              love of country, moral education, discipline and sense of
              responsibility among the children. Under the leadership of Hon'ble
              Prime Minister Sheikh Hasina, a child friendly environment has
              been created in the country today. At present children's academy
              activities are being carried out in 64 districts and 6 upazilas
              (Keshabpur, Parshuram, Mithapukur, Kulaura, Srinagar and Babuganj
              upazilas) for the creative development and protection of
              children's rights. Under this program, various programs are being
              implemented in collaboration with the local administration for the
              participation of children across the country.
            </p>
            <button className="p-2">
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div class=" col-lg-6 col-md-12 col-sm-12 col-12 pt-5">
            <img
              src={shishuAcademy}
              className="w-lg-100 w-md-100 w-sm-100 w-75 h-75 ms-5  me-5"
              alt="..."
            />
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="my-5 container row">
        <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column">
          <div className="col-4 ps-5 ps-sm-5  me-sm-5 me-md-5 me-lg-5 text-lg-left">
            <h2>INITIATIVES</h2>
            <p>
              ICT Division has taken initiatives to build Digital Bangladesh.
              Our software and service industry is a billion-dollar market and
              is expected to grow our export to USD 5 Billion by 2025. We are
              serving clients in the array of domains –Financial Services,
              Telecom companies, Healthcare. Various Startup projects, High-Tech
              parks, Sheikh Kamal IT Training and Incubation Centers etc
              projects are underway across the country.
            </p>
          </div>

          <div className="col-8">
            <div className="row">
              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5 ps-lg-5 ps-md-5 ps-sm-5 ps-5 ">
                <div>
                  <img className="logo-container" src={img333} alt="..." />
                </div>
                <div>
                  <h5 className="header-container">333</h5>
                </div>
              </div>

              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container  col-5">
                <div>
                  <img className="logo-container" src={img999} alt="..." />
                </div>
                <div>
                  <h5 className="header-container">999</h5>
                </div>
              </div>
              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5">
                <div>
                  <img className="logo-container" src={startup} alt="..." />
                </div>
                <div className="header-style">
                  <h5 className="header-container text-start">
                    Startup <br />
                    Bangladesh
                  </h5>
                </div>
              </div>

              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5">
                <div>
                  <img className="logo-container" src={porichoy} alt="..." />
                </div>
                <div>
                  <h5 className="header-container">PORICHOY</h5>
                </div>
              </div>

              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5">
                <div>
                  <img
                    className="logo-container"
                    src={foodForNation}
                    alt="..."
                  />
                </div>
                <div>
                  <h5 className="header-container">
                    FOOD <br />
                    FOR <br />
                    NATION
                  </h5>
                </div>
              </div>

              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5">
                <div>
                  <img className="logo-container" src={surokkha} alt="..." />
                </div>
                <div>
                  <h5 className="header-container">SUROKKHA</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cover photo */}
      <section>
        <div className="bg-image"></div>
      </section>

      <VideoGallery />

      <PhotoGallery />

      <MediaCarousel />
      <Address />

      <HomeFooter />
    </div>
  );
};

export default Home;
