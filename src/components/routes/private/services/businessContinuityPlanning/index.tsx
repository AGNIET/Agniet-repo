import React from "react";
import { AgnietBg2, BusinessPlanning } from "../../../../../assets";
import styles from "./BusinessContinuityPlanning.module.scss";

export default function BusinessContinuityPlanning() {
  return (
    <div
      className="full-height-container text-white"
      // style={{
      //   // backgroundImage: `url(${AgnietBg2})`,
      //   backgroundSize: "100%",
      //   backgroundPositionY: "99%",
      // }}
    >
      <div className="container">
        <div className="row gap-5 justify-content-between">
          <div className="col-md-5">
            <img
              src={BusinessPlanning}
              alt="businessImage"
              width={600}
              className="rounded"
            />
          </div>
          <div className="col-md-5">
            <p className="pt-5">
              Disasters, whether from natural causes or man-made errors, can
              strike your company at the most unexpected times. You risk losing
              everything - your valuable data, clients, reputation, and money -
              if you fail to have an effective business continuity plan (BCP) in
              place. But not to worry - Agniet Networking's Business Continuity
              Planning solutions have you covered.
            </p>
          </div>
        </div>
      </div>
      <div className={`p-5 ${styles.gradientContainer}`}>
        <h5>Business Continuity Planning from Agniet Networking includes:</h5>
        <ul>
          <li>
            Strategy evaluation - a comprehensive assessment and analysis of
            your current BCP
          </li>
          <li>
            Data backup - protect your data in our onsite and offsite data
            centers
          </li>
          <li>
            Recovery preparation - be prepared for whatever might come your way
          </li>
          <li>Data restoration - get your business back on its feet fast</li>
        </ul>
        <p>
          We partner with world-class vendors to prevent your business from
          crumbling under the pressure of data failure, client complaints, and
          lost profits. With our continuity planning you can resume your
          day-to-day business operations in a matter of hours, not days.
        </p>
      </div>
    </div>
  );
}
