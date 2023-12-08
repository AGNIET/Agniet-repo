import React, { useState, useEffect } from "react";
import GeneralLoader from "../../../../shared/Loader/GeneralLoader";
import Header from "../../../../shared/Header/Header";
import {
  AgnietBg2,
  BackupSupport,
  EmailProtectionService,
  HomepageBg,
  TechSupport,
  VOIPService,
} from "../../../../assets";
import { Navigate, useNavigate } from "react-router-dom";

//styles
import styles from "./Homepage.module.scss";

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
        style={{
          backgroundImage: `url(${AgnietBg2})`,
          backgroundSize: "100%",
          backgroundPositionY: "100%",
        }}
        className={`full-height-container p-5 ${styles.homepage}`}
      >
        {loading ? (
          <GeneralLoader />
        ) : (
          <div>
            <div
              className={`d-flex flex-column bg-white rounded p-4 text-primary m-4 ${styles.mission}`}
            >
              <div className="d-flex justify-content-center">
                <h3>What's Our Mission?</h3>
              </div>
              <div className="d-flex justify-content-center pt-2">
                <h5 className="shadow-sm rounded p-2">MAKING IT GREAT AGAIN</h5>
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
            <div
              className={`bg-white container rounded pt-4 ${styles.servicesProvided}`}
            >
              <h4 className="text-primary text-center">
                Powerful services we provide
              </h4>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div>
                    <a
                      className={`${styles.servicesProvided} link-white`}
                      href="/services/itConsulting"
                    >
                      <img src={TechSupport} width={200} />
                      <p className="d-flex justify-content-center pt-2 pe-5">
                        IT Consulting
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div>
                    <a
                      className={`${styles.servicesProvided}`}
                      href="/services/backupDisasteryRecover"
                    >
                      <img src={BackupSupport} width={200} height={150} />
                      <p className="d-flex justify-content-center pt-2 pe-5">
                        Backup Support
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div>
                    <a
                      className={`${styles.servicesProvided} link-white`}
                      href="/services/voIP"
                    >
                      <img src={VOIPService} width={200} />
                      <p className="d-flex justify-content-center pt-2 pe-5">
                        VOIP Service
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div>
                    <a
                      className={`${styles.servicesProvided} link-white`}
                      href="/services/emailSpamProtection"
                    >
                      <img
                        src={EmailProtectionService}
                        width={200}
                        height={150}
                      />
                      <p className="d-flex justify-content-center pt-2 pe-5">
                        Email or Spam Protection
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
