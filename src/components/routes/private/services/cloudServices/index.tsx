import React from "react";
import { CloudServicesImg } from "../../../../../assets";
import styles from "./CloudServices.module.scss";

export default function CloudServices() {
  return (
    <div className="full-height-container text-white">
      <div className="full-height-container">
        <div className="container">
          <div className="d-flex gap-5 align-items-center pt-4">
            <div>
              <img
                src={CloudServicesImg}
                alt="businessImage"
                width={600}
                className="rounded"
              />
            </div>
            <div>
              <p>
                Cloud computing has changed the way we do businesses today, and
                many companies are already reaping the benefits that the cloud
                has to offer, including enhanced flexibility, efficiency, and
                cost-savings. Are you ready to move your resources to the cloud?
                Then you need us.
              </p>
              <p>
                Agniet Networking are specialists when it comes to cloud
                computing. Our team of engineers and certified professionals can
                guide you through the process of these often complex and
                difficult transitions from physical servers to the cloud.
              </p>
            </div>
          </div>
        </div>
        <div className={`p-5 ${styles.gradientContainer}`}>
          <h5>Cloud Services from Agniet Networking are:</h5>
          <ul>
            <li>Scalable - grow your cloud technology as you need</li>
            <li>
              Mobile - share, edit, and publish files from anywhere, at any time
            </li>
            <li>
              Customized - our cloud solutions are tailored to fit your users'
              needs
            </li>
            <li>
              Cost effective - ditch expensive hardware and software costs
            </li>
          </ul>
          <p>
            With our Cloud Services, your technology will be delivered to you
            via the Internet, meaning you can access them from whenever and
            wherever. Forgot your important files at the office? Browse for it
            from any web-enabled device. You open a door to new possibilities
            when you move to the cloud! Don't wait a moment longer!
          </p>
        </div>
      </div>
    </div>
  );
}
