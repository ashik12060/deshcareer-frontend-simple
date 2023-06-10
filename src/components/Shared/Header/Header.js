import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container-fluid">
          <a className="navbar-brand text-white ps-5" href="#">
            <div className="d-flex">
            <div className="back-slash">
              /
              </div>
              <div>
              
                <h4 className="me-3 pt-2">
                
                  Anjir <br />
                  Liton
                </h4>
              </div>
              <div className="para-class">
               <a href="#">Children's <br/>
                  Writter</a>
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler text-white bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  p-3"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 lg:collapse navbar-collapse justify-content-end">
              <li className="nav-item dropdown lg:nav-style2">

                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Anjir
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Biography
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Achievements
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to="/contact"  className='text-warning'>Contact Page</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to="/">Event</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/contact">News</Link>
                </a>
              </li>

              {/* media  */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Media
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Quotes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Speeches
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Interview
                    </a>
                  </li>
                </ul>
              </li>

              {/* gallery */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Photo Gallery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Video Gallery
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to="/">Publication</Link>
                </a>
              </li>

              <li>
                <a>
                  <Link to="/">
                    <button className="btn-style">Contact</button>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
