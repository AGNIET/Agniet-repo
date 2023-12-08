import React from "react";
import { AgnietBg2, BusinessPlanning } from "../../../../../assets";

export default function BusinessContinuityPlanning() {
  return (
    <div
      className="full-height-container"
      style={{
        backgroundImage: `url(${AgnietBg2})`,
        backgroundSize: "100%",
        backgroundPositionY: "99%",
      }}
    >
      <div className="container">
        <div className="d-flex gap-5 align-items-center pt-4">
          <div>
            <img
              src={BusinessPlanning}
              alt="businessImage"
              width={600}
              className="rounded"
            />
          </div>
          <div>
            <p>
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
      <div className="container pt-4">
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
