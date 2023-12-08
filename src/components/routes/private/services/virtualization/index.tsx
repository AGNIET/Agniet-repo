import React from "react";
import { VirtualizationImg } from "../../../../../assets";

export default function Virtualization() {
  return (
    <div className="full-height-container">
      {" "}
      <div className="full-height-container">
        <div className="container">
          <div className="d-flex gap-5 align-items-center pt-4">
            <div>
              <img
                src={VirtualizationImg}
                alt="businessImage"
                width={600}
                className="rounded"
              />
            </div>
            <div>
              <p>
                Agniet Networking has qualified systems engineers to help create
                and implement a full and cost effective virtualization roadmap
                for your business. Whether you are looking for in house server
                virtualization or cloud desktop virtualization, we have the
                experience and expertise to meet and exceed your business's
                specific needs.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-4">
          <h5>Virtualization solutions from Agniet Networking offer:</h5>
          <ul>
            <li>
              Reduced costs - less hardware and maintenance fees mean lower IT
              expenses
            </li>
            <li>
              Increased uptime - our solutions allow your employees to become
              more productive
            </li>
            <li>Enhanced performance - by virtualizing your resources</li>
          </ul>
          <p>
            Agniet Networking's Virtualization solutions will give your business
            the agility and flexibility it needs to grow and prosper. We can
            virtualize your internal resources including computers, servers,
            applications, operating systems, and much more, so you and your
            employees can actually get more work done, with less hardware.
          </p>
        </div>
      </div>
    </div>
  );
}
