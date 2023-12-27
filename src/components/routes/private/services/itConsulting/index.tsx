import React from "react";
import { ITConsultingImg } from "../../../../../assets";
import styles from "./ItConsulting.module.scss";

export default function ItConsulting() {
  return (
    <div className="full-height-container text-white">
      <div>
        <div className="container">
          <div className="d-flex gap-5 align-items-center pt-4">
            <div>
              <img
                src={ITConsultingImg}
                alt="businessImage"
                width={600}
                className="rounded"
              />
            </div>
            <div>
              <p>
                Your business requires advanced technology to stay ahead of its
                competition. But with all the vendors out there, sometimes, it's
                hard to make sense of all the options. Agniet Networking's
                expert consultants can develop an effective IT strategy that
                aligns with your business objectives and goals, so you can make
                the most of your IT investment.
              </p>
            </div>
          </div>
        </div>
        <div className={`p-5 ${styles.gradientContainer}`}>
          <h5>IT Consulting services from Agniet Networking delivers:</h5>
          <ul>
            <li>
              Strategy and planning - we'll guide you in the right direction
            </li>
            <li>
              Technology setup - we provide you with a strong technology
              foundation for the future
            </li>
            <li>
              Full IT services - from planning and implementation to ongoing
              management and monitoring
            </li>
          </ul>
          <p>
            Agniet Networking will work closely with you, and will offer expert
            recommendations and industry insights, so you can make the right
            technology decisions. We have provided sound guidance for various
            businesses throughout California - let us do the same for you.
          </p>
        </div>
      </div>
    </div>
  );
}
