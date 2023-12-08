import React from "react";
import { NetworkSecurityImg } from "../../../../../assets";

export default function NetworkSecurity() {
  return (
    <div className="full-height-container">
      {" "}
      <div className="full-height-container">
        <div className="container">
          <div className="d-flex gap-5 align-items-center pt-4">
            <div>
              <img
                src={NetworkSecurityImg}
                alt="businessImage"
                width={600}
                className="rounded"
              />
            </div>
            <div>
              <p>
                Small and medium-sized businesses like yours rely on network
                systems just as much as any big company. But are you aware of
                the many cyber security threats out there that could bring your
                network down, resulting in hours or days of downtime? This is
                where we can help. Agniet Networking will monitor the health of
                your network infrastructure, including your PCs, switches,
                firewalls and servers.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-4">
          <h5>Network Security solutions from Agniet Networking offer:</h5>
          <ul>
            <li>
              Proactive support - enjoy peace of mind knowing your network will
              be available 24/7
            </li>
            <li>
              Security audit - comprehensive analysis of your current network
              security status
            </li>
            <li>
              Antivirus software - detect and eliminate malicious viruses before
              they spread
            </li>
            <li>Firewall - block unauthorized access to your systems</li>
            <li>
              Virtual private networks - access your networks from a remote
              location
            </li>
          </ul>
          <p>
            We ensure your network systems are fully guarded, at all times.
            Fewer network disruptions and downtime mean your employees can focus
            on doing their jobs, and you'll benefit from increased efficiency
            and productivity.
          </p>
        </div>
      </div>
    </div>
  );
}
