import React from "react";
import "./Footer.css";

const ContactFooter = () => {
  return (
    <div className="bgColor pt-5">
      <div className="container  pt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-start text-white pt-4">
            <h2>Desh Career</h2>
            <p>
              Desh Career is Career based newsletter in Benglai language. This
              newsletter has published weekly. This is published in every
              Saturday at 12.00 PM.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 row  text-white pt-4">
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
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 row pt-4 text-white text-lg-end">
            <h3>Supports</h3>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
            <a>FAQ</a>
          </div>
        </div>



        <hr class="border border-light border-1 opacity-75" />

        <div className="d-flex gap-3 flex-lg-row flex-md-row flex-sm-column flex-column">
          <div className="text-white me-5">
            <small>
              &copy;2023 Newsletter E-mail Service: ALl COpy right reserved
            </small>
          </div>

          <div className=" d-flex gap-3 flex-lg-row flex-md-row flex-sm-column flex-column text-start">
            <div className="ms-lg-5">
            <p>
              <a className="text-white text-decoration-none " href="#">
                Privacy Policy
              </a>
            </p>
            </div>

            <div>
            <p className="">
              <a className="text-white text-decoration-none " href="#">
                Terms & Conditions
              </a>
            </p>
            </div>

            <div>
            <p className="">
              <a className="text-white text-decoration-none " href="#">
                FAQ
              </a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
