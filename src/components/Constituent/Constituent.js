import React from "react";
import { faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Home/Home.css';


const Constituent = () => {
  return (
    <section className="service-section overflow-hidden">
       
      <div data-aos="fade-up"  data-aos-duration="3000" >
        <h1 className="text-center py-5">CONSTITUENT SERVICES</h1>
        <div className=" py-5 container">
            <div className=" row  overflow-hidden">
             
                
                  <div className="col-lg-3 col-md-6 social-sites  overflow-hidden">
                    <FontAwesomeIcon className="icon-style" icon={faEnvelope} /> <br />
                    <a href="#"> Email Me</a>
                  </div>
                  
                
             

                  <div className="col-lg-3 col-md-6 social-sites  overflow-hidden">
                    <FontAwesomeIcon className="icon-style" icon={faPhone} /><br />
                    <a href="#"> Call Me</a>
                  </div>
              
                
                  <div className="col-lg-3 col-md-6 social-sites  overflow-hidden">
                    <FontAwesomeIcon
                      className="icon-style"
                      icon={faNewspaper}
                    /><br />
                    <a href="#">All News</a>
                  </div>
            
                
                  <div className="col-lg-3 col-md-6 social-sites  overflow-hidden">
                    <FontAwesomeIcon className="icon-style" icon={faGlobe} /><br />
                    <a href="#">Visit Us</a>
                  </div>
                 
              
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default Constituent;
