import React from "react";
import styles from "./ManagedItServices.module.scss";
import { AgnietBg2, ItManagement } from "../../../../../assets";

export default function ManagedItServices() {
  return (
    <div
      className="full-height-container text-white"
      // style={{
      //   // backgroundImage: `url(${AgnietBg2})`,
      //   backgroundSize: "100%",
      //   backgroundPositionY: "100%",
      // }}
    >
      {/* <div className="py-4 ps-3 fw-bold">
        <a
          href="/services/managedItServices"
          className="text-decoration-none text-white"
        >
          <h4>Managed It Services</h4>
        </a>
      </div> */}
      <div className="container p-0">
        <div className="row gap-5 justify-content-between">
          <div className="col-md-5">
            <img
              src={ItManagement}
              className="rounded"
              alt="it-management"
              width={600}
            />
          </div>
          <div className="col-md-5">
            <div>
              <p>
                Just like larger companies, small businesses like yours need
                advanced technology to operate efficiently and to compete
                effectively. But as reliance on IT grows, the resources to
                support an increasingly complex IT environment may not. In many
                small businesses, IT resources are scarce, and can be quickly
                overwhelmed with the day-to-day responsibilities of keeping the
                IT infrastructure that the business depends on up and running.
              </p>
              <h5>The problem small businesses face</h5>
              <p>
                If you fall behind in keeping up with things such as backups,
                patches and security, the odds are that you'll face an IT outage
                or another problem down the road that will negatively impact
                your business. For instance, if your e-mail server, customer
                relationship management system, financial application or network
                goes down unexpectedly, you face substantial productivity and
                revenue losses as a result.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`p-5 ${styles.gradientContainer}`}>
        <div>
          <h5>Introducing Managed Services</h5>
          <p>
            Managed Service Providers (MSPs) act as an extension to yout
            business, taking care of routine IT infrastructure monitoring and
            management around the clock - freeing your staff to focus on higher
            value project. By proactively monitoring and maintaining your
            systems, an MSP can help you avoid many technology problems in the
            first place. Should an issue occur, an experienced MSP can
            troubleshoot and resolve it more efficiently.
          </p>
          <h5>Agniet Networking's Platinum Managed Services plan includes:</h5>
          <ul>
            <li>
              24/7 - helpdesk support - our support team is on hand to resolve
              your IT problems
            </li>
            <li>
              Network monitoring - we can monitor and check you network every 5
              minutes
            </li>
            <li>
              PC and server protection - our antivirus software can keep
              malicious attacks at bay
            </li>
            <li>
              Disaster recovery - we offer a comprehensive backup solution to
              protect your data
            </li>
            <li>
              Vendor management - we'll act as a single point of contact for
              your technology needs
            </li>
          </ul>
          <p>
            With Agniet Networking's Managed Services, you can ditch the worries
            of having to manage your entire infrastructure and dealing with
            complex IT issues - we'll take care of everything for you!
          </p>
        </div>
      </div>
    </div>
  );
}
