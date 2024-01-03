import React, { useState, useEffect } from "react";
import GeneralLoader from "../../../../shared/Loader/GeneralLoader";
import styles from "./ContactUs.module.scss";
import { SendMessageIcon } from "../../../../assets";

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here

    // Example: Basic form validation
    const newErrors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      email: !/^\S+@\S+\.\S+$/.test(formData.email)
        ? "Invalid email address"
        : "",
      message: formData.message.trim() === "" ? "Message is required" : "",
    };

    setFormErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      // If there are no errors, submit the form
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div>
      <div
        // style={{
        //   backgroundImage: `url(${AgnietBg2})`,
        //   backgroundSize: "100%",
        //   backgroundPositionY: "100%",
        // }}
        className={`full-height-container p-3 ${styles.homepage}`}
      >
        {loading ? (
          <GeneralLoader />
        ) : (
          <div className="container pb-4">
            <form className="rounded bg-white" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                  <span>
                    <img src={SendMessageIcon} alt="icon-send-msg" />
                  </span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-sm-12">
                  <div className="d-flex flex-column align-items-center justify-content-center h-75 pt-5 gap-5">
                    <label>
                      <h4
                        className={`${styles.formHeader} d-flex justify-content-center fw-bold pt-5`}
                      >
                        Get in touch
                      </h4>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-light border rounded p-2 mt-4"
                      />
                      <span className={styles.errorData}>
                        {formErrors.name}
                      </span>
                    </label>

                    <label>
                      <input
                        type="email"
                        name="email"
                        className="bg-light border rounded p-2"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <span className={styles.errorData}>
                        {formErrors.email}
                      </span>
                    </label>

                    <label>
                      <textarea
                        name="message"
                        placeholder="Message"
                        className="bg-light border rounded p-4"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <span className={styles.errorData}>
                        {formErrors.message}
                      </span>
                    </label>
                    <button
                      type="submit"
                      className={`${styles.submitBtn} px-3 py-2 text-white rounded`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
