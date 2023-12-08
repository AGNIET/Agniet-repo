import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import GeneralLoader from "../../../../shared/Loader/GeneralLoader";
import styles from "./ContactUs.module.scss";
import { AgnietBg2 } from "../../../../assets";

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

export default function ContactUs() {
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit } = useForm<FormInput>();

  const onsubmit = (data: FormInput) => {
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`d-flex justify-content-center shadow-sm ${styles.container}`}
        // style={{
        //   backgroundImage: `url(${AgnietBg2})`,
        //   backgroundSize: "100%",
        //   backgroundPositionY: "100%",

        //   // backgroundColor: "#14134F",
        // }}
      >
        {loading ? (
          <GeneralLoader />
        ) : (
          <div className="row d-flex container">
            <h3 className="pt-4">SEND US A MESSAGE</h3>
            <div className="mx-auto col-lg-12 col-md-12 col-lg-6">
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="row p-2">
                  <p>Name:</p>
                  <div className="col-md-6 d-flex flex-column">
                    <input
                      className="rounded border border-primary"
                      {...register("firstName")}
                    />
                    <label>First Name</label>
                  </div>
                  <div className="col-md-6 d-flex flex-column">
                    <input
                      className="rounded border border-primary"
                      {...register("lastName")}
                    />
                    <label>Last Name</label>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-md-6 d-flex flex-column">
                    <label>Email:</label>
                    <input
                      className="rounded border border-primary"
                      {...register("email")}
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column">
                    <label>Phone Nr.</label>
                    <input
                      className="rounded border border-primary"
                      {...register("phone")}
                    />
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-md-6 d-flex flex-column">
                    <label>Address</label>
                    <input
                      className="rounded border border-primary"
                      {...register("address")}
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column">
                    <label>Message</label>
                    <input
                      className="rounded border border-primary"
                      {...register("message")}
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
