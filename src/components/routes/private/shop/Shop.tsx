import React, { useState, useEffect } from "react";
import GeneralLoader from "../../../../shared/Loader/GeneralLoader";
import {
  CameraImage,
  KeyboardImage,
  MonitorImage,
  MouseImage,
} from "../../../../assets";
import styles from "./Shop.module.scss";

const productsData = [
  { title: "Camera", image: CameraImage },
  {
    title: "Mouse",
    image: MouseImage,
  },
  {
    title: "Monitor",
    image: MonitorImage,
  },
  {
    title: "Keyboard",
    image: KeyboardImage,
  },
];

export default function Shop() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="full-height-container">
      <div className={`${styles.shopBody}`}>
        {loading ? (
          <GeneralLoader />
        ) : (
          <div>
            <div className={`${styles.filters} d-flex justify-content-end p-4`}>
              <label className="text-white">
                Order by
                <select defaultValue="order" className="m-2 p-2 rounded">
                  <option value="latestToNewest">Latest to newset</option>
                  <option value="price">Price</option>
                  <option value="alphabet">Alphabet</option>
                </select>
              </label>
            </div>
            <div className="row">
              {productsData?.map((product: any) => (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="shadow-sm m-2 card h-100">
                    <div className="p-2">
                      <img
                        className="ms-5"
                        src={product.image}
                        width={200}
                        height={200}
                      />
                      <p className="text-primary fw-bold d-flex justify-content-center">
                        {product.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex p-5">
                <div className="card bg-light">
                  <p>Camera</p>
                  <img src={CameraImage} width={200} />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex p-5">
                <div className="card bg-light">
                  <p>Camera</p>
                  <img src={CameraImage} width={200} />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex p-5">
                <div className="card bg-light">
                  <p>Camera</p>
                  <img src={CameraImage} width={200} />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 d-flex p-5">
                <div className="card bg-light">
                  <p>Camera</p>
                  <img src={CameraImage} width={200} />
                </div>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
