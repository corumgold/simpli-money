import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formInfo, setFormInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    selectedService: "",
    message: "",
  });

  const [modalShown, setModalShown] = useState(false);
  const [formError, setFormError] = useState("");

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  }

  const form = useRef();

  const validateForm = () => {
    const { fullName, phone, email, selectedService, message } = formInfo;

    if (!fullName || !phone || !email || !selectedService || !message) {
      setFormError("Please fill out all fields before submitting.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_ks23lca",
        "template_o9b08e6",
        form.current,
        "fZAPiD238sWdJSnZx"
      )
      .then(
        (result) => {
          setModalShown(
            "Thank you for getting in touch! We will reach out to you soon."
          );
          console.log(result.text);
          setFormInfo({
            fullName: "",
            phone: "",
            email: "",
            selectedService: "",
            message: "",
          });
          setFormError("");
        },
        (error) => {
          setModalShown(
            "There was a problem when submitting your form - please try again."
          );
          console.log(error.text);
        }
      );
  };

  return (
    <section id="form-page">
      <h3>Contact Us</h3>
      <form ref={form} id="consult-form">
        <label>
          Your Full Name:
          <input type="text" name="fullName" onChange={handleFormChange} />
        </label>
        <label>
          Your Email:
          <input type="text" name="email" onChange={handleFormChange} />
        </label>
        <label>
          Your Phone Number:
          <input type="text" name="phone" onChange={handleFormChange} />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Service Most Interested In:
          <select
            name="selectedService"
            value={formInfo.selectedService}
            onChange={handleFormChange}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Retirement Planning">Retirement Planning</option>
            <option value="Debt Management">Debt Management</option>
            <option value="Budgeting">Budgeting</option>
          </select>
        </label>
        <label>
          Message:
          <textarea
            style={{ width: "100%" }}
            type="text"
            name="message"
            onChange={handleFormChange}
          />
        </label>
        <button onClick={sendEmail}>Submit Form</button>
        {formError && <p style={{ color: "red" }}>{formError}</p>}
      </form>
      <div className={modalShown ? "showModal" : "noModal"}>
        {modalShown}
        <button onClick={() => setModalShown(false)}>Close</button>
      </div>
    </section>
  );
};

export default Form;
