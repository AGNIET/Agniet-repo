import React from "react";
import { EmailSpamProtectionImg } from "../../../../../assets";
import styles from "./EmailSpamProtection.module.scss";

export default function EmailSpamProtection() {
  return (
    <div className="full-height-container text-white">
      <div>
        <div className="container">
          <div className="d-flex gap-5 align-items-center pt-4">
            <div>
              <img
                src={EmailSpamProtectionImg}
                alt="businessImage"
                width={600}
                className="rounded"
              />
            </div>
            <div>
              <p>
                Email is at the heart of your business - you use it every day to
                send out notifications, contact clients, and communicate with
                colleagues. That's why you can't afford to let malicious
                security threats infiltrate your email systems. Agniet
                Networking has the necessary tools and technology to keep your
                company's email safe from viruses and malware.
              </p>
            </div>
          </div>
        </div>
        <div className={`p-5 ${styles.gradientContainer}`}>
          <h5>Email/Spam Protection solutions from Agniet Networking offer:</h5>
          <ul>
            <li>
              Spam filtering - our intelligent filter quarantines suspicious
              emails to protect your systems from spam
            </li>
            <li>
              Improved email access - with message archiving and advanced search
              options
            </li>
            <li>
              Customized scanning - comprehensive scanning to keep viruses at
              bay
            </li>
          </ul>
          <p>
            A single email security breach could compromise your entire system.
            Agniet Networking provides powerful yet affordable email security
            solutions to keep your inboxes clean and spam-free.
          </p>
        </div>
      </div>
    </div>
  );
}
