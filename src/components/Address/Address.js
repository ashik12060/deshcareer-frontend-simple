import React from "react";
import "./Address.css";
const Address = () => {
  return (
    <div>
      <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column"  data-aos="zoom-in"  data-aos-duration="3000">
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5147049159527!2d90.39837257425805!3d23.72901828959899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8efa65e6b1b%3A0x2290178cf2c42315!2sBangladesh%20Shishu%20Academy!5e0!3m2!1sen!2sbd!4v1686398802491!5m2!1sen!2sbd" width="480" height="450" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="d-flex flex-column ms-5 mt-5">
          <div className="">
            <h2>Present Address</h2>
            <address>
              Bangladesh Shishu Academy,
              <br /> Doyel Chattor, Shabag, Dhaka-1000
            </address>
          </div>
          <div>
            <h2>Permanent Address</h2>
            <address>
              Mymensingh District <br />
              Mymensingh, Bangladesh
            </address>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Address;
