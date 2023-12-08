import React from "react";
import { VOIPImg } from "../../../../../assets";

export default function VOIP() {
  return (
    <div className="full-height-container">
      {" "}
      <div className="full-height-container">
        <div className="container">
          <div className="d-flex gap-5 align-items-center pt-4">
            <div>
              <img
                src={VOIPImg}
                alt="businessImage"
                width={600}
                className="rounded"
              />
            </div>
            <div>
              <p>
                In order to communicate with clients, colleagues, and vendors
                more effectively, your business must have the same advanced
                telephony systems used by large enterprises. Here at Agniet
                Networking, we offer powerful Voice over Internet Protocol
                (VoIP) solutions that allow you to get in touch with business
                contacts easily.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-4">
          <h5>Our VoIP solutions are:</h5>
          <ul>
            <li>
              Reliable - we monitor your hosted systems 24/7, so you will never
              miss important calls
            </li>
            <li>
              Easy to use - simple installation process and user interface
            </li>
            <li>
              Convenient - make and receive audio and video calls from anywhere,
              at any time
            </li>
            <li>
              Economical - cut your monthly phone bills and telecommunication
              costs
            </li>
          </ul>
          <p>
            When you opt for Agniet Networking's VoIP solutions, you can expect
            nothing less than crystal clear audio and high definition video
            quality. It's time to take advantage of this groundbreaking
            technology and embrace more productivity.
          </p>
        </div>
      </div>
    </div>
  );
}
