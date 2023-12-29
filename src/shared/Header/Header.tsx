import React from "react";
import {
  AgnietLogoBlue,
  AgnietLogoBlue2,
  AgnietLogoWhite,
} from "../../assets/index";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.allMenu}>
      <div className="row me-2 p-3">
        <div className="col-lg-9 col-md-8 col-sm-6 col-xs-6">
          <img
            src={AgnietLogoBlue2}
            width={100}
            alt="logo"
            className="rounded"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 d-flex align-items-center gap-2">
          <a href="/" className={`rounded  p-2 ${styles.buttons}`}>
            Home
          </a>
          <div className={`${styles.dropdownServices} dropdown`}>
            <Link to="/services" />
            <button
              className={`btn text-white rounded p-2  dropdown-toggle ${styles.buttons}`}
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right`}
              aria-labelledby="dropdownMenuButton"
            >
              <ul className="list-unstyled">
                <li>
                  <a
                    className="dropdown-item"
                    href="/services/managedItServices"
                  >
                    Managed IT Services
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/services/businessContinuityPlanning"
                  >
                    Business Continuity Planning
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/services/backupDisasterRecovery"
                  >
                    Backup and Disaster Recovery
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/itConsulting">
                    IT Consulting
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/networkSecurity">
                    Network Security
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/cloudServices">
                    Cloud Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/voIP">
                    VoIP
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/virtualization">
                    Virtualization
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/services/emailSpamProtection"
                  >
                    Email/Spam Protection
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/microsoftOffice">
                    Microsoft Office 365
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="/services/allIn1Websites">
                    All-in-one Webistes
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <a
            href="/shop"
            className={`rounded  p-2 nounderline ${styles.buttons}`}
          >
            Shop
          </a> */}
          <a
            href="about"
            className={`rounded  p-2 nounderline ${styles.buttons}`}
          >
            About
          </a>
          <a
            href="/contactUs"
            className={`rounded text-nowrap p-2 nounderline ${styles.buttons}`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
