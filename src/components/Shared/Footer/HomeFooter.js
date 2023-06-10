import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";


const HomeFooter = () => {
  return (

<div>
<div className="newsletter-form">
    <div className="d-flex newsletter container p-4 rounded">
        <div>
          <h2>
            NEWSPAPER <br />
            SUBSCRIBE
          </h2>
          <p>Sign up with your email address to updated.</p>
        </div>
        <div className="px-5">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input className="submit-btn" type="submit" value="Submit" />

        </div>
      </div>
    </div>
    <div className="bgColor2">
      <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column container text-white footer-container">
        <div>
          <h5>Email: dgbsa22@gmail.com</h5>
          <p>Phone: 01914088093</p>
          <FontAwesomeIcon className="icon-style" icon={faEnvelope} />
                   
        </div>
        <div className="ms-lg-5 ps-lg-5 ">
          <h2>
            Bangladesh Shishu Academy, <br />
            Doyel Chattor, Shabag, Dhaka-1000
            

             <h2/>
          </h2>
        </div>
      </div>

      <p className="footer-copyright">
        &copy;2023 by. <br /> Proudly created with{" "}
        <span className="txt-color">Bangla Puzzle Ltd.</span>
      </p>
    </div>
    </div>
  );
};

export default HomeFooter;
