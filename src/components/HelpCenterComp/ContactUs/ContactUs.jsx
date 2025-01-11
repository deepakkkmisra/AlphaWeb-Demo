import React, { useEffect } from "react";
import "./ContactUs.scss";
import locationIcon from "../../../assets/icons/locationIcon.svg";
import emailIcon from "../../../assets/icons/emailIcon.svg";
import contactIcon from "../../../assets/icons/contactIcon.svg";

import mapImg from "../../../assets/icons/mapImg.svg";
import SocialMediaHandle from "../../ReusableComponent/SocialMediaHandle/SocialMediaHandle";
import Footer from "../../Footer/Footer";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .max(15, "Must be at most 15 digits")
    .required("Required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .max(500, "Message is too long")
    .required("Required"),
});

const ContactUs = () => {
  const initialValues = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Data Submitted: ", values);
    resetForm();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mainWrapperContactUs">
      {/* Location Section */}
      <div className="locationCenter">
        <div className="addressAndMapWrapper">
          <div className="addressInfo">
            <p>CONTACT US</p>
            <h3>
              Want to <span>get in touch?</span>
            </h3>
            <div className="customerServiceInfo">
              <p>
                Our experienced customer service team would love to hear from
                you.
              </p>
            </div>
          </div>
          <div className="basicDetailsWrapper">
            {/* Address Details */}
            <div className="basicDetailsInformation">
              <div className="titleSection">
                <div className="logo_section">
                  <img src={locationIcon} alt="Location Icon" />
                </div>
                <div className="title">
                  <h3>Address</h3>
                </div>
              </div>
              <div className="requiredDetailsBox">
                <p>
                  10 Lower Thames Street, Billingsgate, London, England, EC3R
                  6AF
                </p>
              </div>
            </div>
            {/* Call Us Details */}
            <div className="basicDetailsInformation">
              <div className="titleSection">
                <div className="logo_section">
                  <img src={contactIcon} alt="Contact Icon" />
                </div>
                <div className="title">
                  <h3>Call Us</h3>
                </div>
              </div>
              <div className="requiredDetailsBox">
                <p>+44 20 7946 0958</p>
              </div>
            </div>
            {/* Email Us Details */}
            <div className="basicDetailsInformation">
              <div className="titleSection">
                <div className="logo_section">
                  <img src={emailIcon} alt="Email Icon" />
                </div>
                <div className="title">
                  <h3>Email Us</h3>
                </div>
              </div>
              <div className="requiredDetailsBox">
                <p>support@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mapSection">
          {/* <img src={mapImg} alt="Map" /> */}
          <iframe
            className="locationMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2194666284477!2d-0.08733152418915144!3d51.509189510573655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035183448a81%3A0x572c9cfdc255a658!2sNorthern%20%26%20Shell%20Bldg%2C%2010%20Lower%20Thames%20St%2C%20City%20of%20London%2C%20London%20EC3R%206AF%2C%20UK!5e0!3m2!1sen!2sin!4v1735991455095!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Contact Form */}
      <div className="ContactBoxMainContainer">
        <div className="contactBox">
          <h3>Contact Us</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="formSection">
                <div className="requiredDetailsWrapper">
                  <div className="requiredDetailsBox">
                    <div className="nameDetails">
                      <Field
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="input_section"
                      />
                      {errors.name && touched.name && (
                        <div className="errorMessage">{errors.name}</div>
                      )}
                    </div>
                    <div className="emailDetails">
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="input_section"
                      />
                      {errors.email && touched.email && (
                        <div className="errorMessage">{errors.email}</div>
                      )}
                    </div>
                    <div className="contactDetails">
                      <Field
                        name="number"
                        type="text"
                        placeholder="Contact Number"
                        className="input_section"
                      />
                      {errors.number && touched.number && (
                        <div className="errorMessage">{errors.number}</div>
                      )}
                    </div>
                  </div>
                  <div className="messageBox">
                    <Field
                      name="message"
                      as="textarea"
                      placeholder="Type Your Message"
                      className="messageTextArea"
                      cols="30"
                      rows="5"
                    />
                    {errors.message && touched.message && (
                      <div className="errorMessage">{errors.message}</div>
                    )}
                  </div>
                </div>

                <div className="submitButton">
                  <button type="submit" className="gradientButton_small">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* Social Media & Footer */}
      <SocialMediaHandle />
    </div>
  );
};

export default ContactUs;
