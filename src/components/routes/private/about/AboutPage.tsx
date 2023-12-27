import React, { useState, useEffect } from "react";
import GeneralLoader from "../../../../shared/Loader/GeneralLoader";
import styles from "./AboutPage.module.scss";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="full-height-container">
      {loading ? (
        <GeneralLoader />
      ) : (
        <div>
          <div>
            <a href="/about" className="text-decoration-none text-white">
              <h4 className="p-4 text-center">About</h4>
            </a>
          </div>
          <div>
            <p
              className={`d-flex text-center text-primary container p-4 bg-white rounded ${styles.aboutUsTxtContainer}`}
            >
              AGNIET Solutions, established in 2022, redefines the landscape of
              IT support and technology solutions. Born out of a commitment to
              break monopolies, we provide affordable alternatives for small
              businesses. Our mission is to offer cost-effective innovation,
              maximize savings, and deliver customer-centric excellence. Join us
              in navigating the digital age with affordability and efficiency at
              the forefront.
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-center pb-4 text-white fw-bold">Our Vision:</h4>
            <div>
              <p
                className={`d-flex text-center text-primary container p-4 bg-white rounded ${styles.aboutUsTxtContainer}`}
              >
                At AGNIET Solutions, we envision a landscape where every
                business, regardless of its size, can harness the power of
                cutting-edge technology without breaking the bank. We believe
                that innovation should be accessible to all, and our mission is
                to democratize the IT industry by offering affordable solutions
                without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
