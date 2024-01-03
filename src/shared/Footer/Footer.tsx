import React from "react";
import styles from "./Footer.module.scss";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets";

export default function Footer() {
  return (
    <>
      <div>
        <footer
          className={`${styles.footerBg} text-center text-lg-start text-white`}
        >
          <section
            className={`${styles.socialSection} d-flex justify-content-between p-4`}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a
                href="https://www.instagram.com/agniet.ax/"
                className="text-white me-4"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/agniet-solutions"
                className="text-white me-4"
              >
                <LinkedInIcon />
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">AGNIET</h6>
                  <hr
                    className={`${styles.ruler} mb-4 mt-0 d-inline-block mx-auto`}
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">OUR SERVICES</h6>
                  <hr
                    className={`${styles.ruler} mb-4 mt-0 d-inline-block mx-auto`}
                  />
                  <p>
                    <a
                      href="/services/managedItServices"
                      className="text-white"
                    >
                      Managed It Service
                    </a>
                  </p>
                  <p>
                    <a
                      href="/services/businessContinuityPlanning"
                      className="text-white"
                    >
                      Business Continuity Planning
                    </a>
                  </p>
                  <p>
                    <a href="/services/networkSecurity" className="text-white">
                      Network Security
                    </a>
                  </p>
                  <p>
                    <a href="/services/cloudServices" className="text-white">
                      Cloud Services
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className={`${styles.ruler} mb-4 mt-0 d-inline-block mx-auto`}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Shop
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      About
                    </a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className={`${styles.ruler} mb-4 mt-0 d-inline-block mx-auto`}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@agniet.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className={`${styles.copyrightSection} text-center p-3`}>
            © 2023 Copyright:{" "}
            <a className="text-white" href="https://mdbootstrap.com/">
              Agniet.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
