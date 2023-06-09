import React from "react";
import "./Home.css";
import Header from "../Shared/Header/Header";
import Carousel from "../Carousel/Carousel";
import { faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import mujibImg from "../../images/Mujib_100_Logo.svg.png";
import hasinaPM from "../../images/sheikh_hasina_pm.jpg";
import shishuAcademy from "../../images/shishu academy.jpeg";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />

      <section className="service-section">
        <div>
          <h1 className="text-center py-5">CONSTITUENT SERVICES</h1>
          <div className=" py-5">
            <ul className="social-sites">
              <li>
                <div>
                  <FontAwesomeIcon className="icon-style" icon={faEnvelope} />
                </div>
                <a href="#"> Email Me</a>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon className="icon-style" icon={faPhone} />
                </div>
                <a href="#"> Call Me</a>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon className="icon-style" icon={faNewspaper} />
                </div>
                <a href="#">All News</a>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon className="icon-style" icon={faGlobe} />
                </div>
                <a href="#">Visit Us</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex pt-5 ">
          <div>
            <img src={mujibImg} className="w-90% h-75 ms-5" alt="...." />
          </div>
          <div className="mt-5 pt-5">
            <h2>THE IDEOLOGY</h2>
            <p>
              My greatest strength is the love for my people, My <br />
              greatest weakness is that I love them too much.
            </p>
            <h3>-Bangabondhu Sehikh Mujibur rahman</h3>
            <button>
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex leader-container">
          <div className="pt-5 ps-5 ms-5">
            <h2 className="pt-5">MY LEADER AND INSPIARATION</h2>
            <h4>-Hon'ble Prime Minister Sheikh Hasina</h4>
            <button>
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div>
            <img src={hasinaPM} className="w-90% h-75 ms-5 mt-5" alt="..." />
          </div>
        </div>
      </section>

      <section>
        <div className="py-5 my-5">
          <h1 className="text-style">UPCOMING EVENT</h1>
          <p className="text-center">No event found</p>
        </div>
      </section>

      <section className=" leader-container">
        <div class="row container">
          <div class="col pt-5 ps-5 ms-5">
            <h2 className="">MY JOURNEY WITH SHUSHU ACADEMY </h2>
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
            <button>
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div class="col">
            <img
              src={shishuAcademy}
              className="w-100 h-75 pt-5 ps-5 mt-5 ms-5"
              alt="..."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
