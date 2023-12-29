import React, { useState, useEffect } from "react";
import GeneralLoader from "../../../../shared/Loader/GeneralLoader";
import Header from "../../../../shared/Header/Header";
import {
  AgnietBg2,
  BackupSupport,
  EmailProtectionService,
  HomepageBg,
  HomepageMaintenance,
  TechSupport,
  VOIPService,
} from "../../../../assets";
import { Navigate, useNavigate } from "react-router-dom";

//styles
import styles from "./Homepage.module.scss";
import SolutionsCarousel from "./SolutionsCarousel/SolutionsCarousel";

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div
        // style={{
        //   backgroundImage: `url(${AgnietBg2})`,
        //   backgroundSize: "100%",
        //   backgroundPositionY: "100%",
        // }}
        className={`full-height-container p-3 ${styles.homepage}`}
      >
        {loading ? (
          <GeneralLoader />
        ) : (
          <div>
            <div className={`row text-white ${styles.mission}`}>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 container pt-5">
                <div className="d-flex justify-content-center">
                  <h3>What's Our Mission?</h3>
                </div>
                <div className="d-flex justify-content-center pt-2">
                  <h5 className="shadow-sm rounded p-2">
                    MAKING IT GREAT AGAIN
                  </h5>
                </div>
                <div className="container pt-2">
                  <div className="row">
                    <p className="d-flex text-center">
                      Welcome to AGNIET Solutions, where innovation meets
                      affordability in the realm of IT support, technology
                      solutions, and network equipment reselling. Established in
                      2022, AGNIET was born out of a commitment to break the
                      monopoly held by big tech companies, providing small
                      businesses with a competitive choice and a pathway to
                      technological empowerment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 container">
                <img
                  src={HomepageMaintenance}
                  alt="Gif"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            <div>
              <SolutionsCarousel />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
