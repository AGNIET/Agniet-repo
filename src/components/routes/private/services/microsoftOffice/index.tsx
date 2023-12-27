import React from "react";
import { Office365Img } from "../../../../../assets";
import styles from "./MicrosoftOffice.module.scss";

export default function MicrosoftOffice() {
  return (
    <div className="full-height-container text-white">
      <div>
        <div className="container">
          <div className="d-flex gap-5 align-items-center pt-4">
            <div>
              <img
                src={Office365Img}
                alt="businessImage"
                width={600}
                className="rounded"
              />
            </div>
            <div>
              <p>
                Agniet Networking offers powerful Office 365 solutions that
                allow your employees to collaborate more efficiently online.
                Office 365 features Microsoft's reputable cloud-based
                applications yo'’re already familiar with, including Word,
                PowerPoint, Excel, Outlook, Exchange, SharePoint, and so much
                more.
              </p>
            </div>
          </div>
        </div>
        <div className={`p-5 ${styles.gradientContainer}`}>
          <h5>Just look at what Microsoft Office 365 has to offer:</h5>
          <ul>
            <li>Seamless collaboration even in remote working conditions</li>
            <li>
              Online versions of Microsoft Word, Excel and PowerPoint, amongst
              others
            </li>
            <li>File storing and sharing with 1TB storage</li>
            <li>
              Higher seat limit of 300 employees for greater business value
            </li>
            <li>Mailboxes with abundant storage</li>
            <li>
              Digital storytelling tools to create reports and presentations
            </li>
            <li>Corporate social network for better collaboration</li>
            <li>
              Advanced communication tools like IM, web conferencing and
              multi-party data sharing
            </li>
            <li>
              Scalability in adding more solutions or moving to a different plan
            </li>
            <li>Security solutions including antivirus and anti-spam</li>
            <li>99% uptime and 24/7 support</li>
          </ul>
          <p>
            Traditional Microsoft programs can no longer meet the needs of
            businesses today. With Office 365 you and your employees can easily
            share, view, and edit files simultaneously, allowing for a more
            productive and efficient working environment. What's more, you get
            all of these benefits for one flat, monthly fee. What have you got
            to lose?
          </p>
        </div>
      </div>
    </div>
  );
}
