import React from "react";
import "./Footer.css";

const ContactFooter = () => {
  return (
    <div className="bgColor pt-5">
      <div className="container text-center pt-5">
        <div className="row">
          <div className="col-4 text-start text-white">
            <h2>Desh Career</h2>
            <p>
              Desh Career is Career based newsletter in Benglai language. This
              newsletter has published weekly. This is published in every
              Saturday at 12.00 PM.
            </p>
          </div>
          <div className="col-4 row  text-white">
            <h3>Privacy & Terms</h3>
            <a className="text-white text-decoration-none" href="#">
              Privacy Policy
            </a>
            <a className="text-white text-decoration-none" href="#">
              Terms & Conditions
            </a>
            <a className="text-white text-decoration-none" href="#">
              FAQ
            </a>
          </div>
          <div className="col-4 row text-end text-white">
            <h3>Supports</h3>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
            <a>FAQ</a>
          </div>
        </div>
        <hr class="border border-light border-1 opacity-75" />

        <div className="d-flex gap-3">
          <div className="text-white me-5">
            <small>&copy;2023 Newsletter E-mail Service: ALl COpy right reserved</small>
          </div>


          <div className="  ms-5 d-flex gap-3">
          <p className="ps-5 ms-5"><a className="text-white text-decoration-none ps-5 ms-5" href="#">
              Privacy Policy
            </a></p>
            <p className=""><a className="text-white text-decoration-none " href="#">
              Terms & Conditions
            </a></p>
            <p className=""><a className="text-white text-decoration-none " href="#">
              FAQ
            </a></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
