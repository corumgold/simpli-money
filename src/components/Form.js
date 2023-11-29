import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formInfo, setFormInfo] = useState({
    humanName: "",
    phone: "",
    email: "",
    dogName: "",
    dogAge: "",
    breed: "",
    crateTrained: "",
    bite: "",
    background: "",
    heardAboutUs: ""
  });

  const [modalShown, setModalShown] = useState(false);

  function handleFormChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormInfo({ ...formInfo, [key]: value });
    console.log(formInfo)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w95ec4q",
        "template_mfem2cb",
        form.current,
        "fZAPiD238sWdJSnZx"
      )
      .then(
        (result) => {
          setModalShown(
            "Thank you for submitting your info! We will be in contact with you soon."
          );
          console.log(result.text);
          setFormInfo({
            humanName: "",
            phone: "",
            email: "",
            dogName: "",
            dogAge: "",
            breed: "",
            crateTrained: "",
            bite: "",
            background: "",
            heardAboutUs: ""
          });
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
          Your name:
          <input type="text" name="humanName" onChange={handleFormChange} />
        </label>
        <label>
          Your email:
          <input type="text" name="email" onChange={handleFormChange} />
        </label>
        <label>
          Your phone number:
          <input type="text" name="phone" onChange={handleFormChange} />
        </label>
        <label>
          Your dog's name:
          <input type="text" name="dogName" onChange={handleFormChange} />
        </label>
        <label>
          {formInfo.dogName ? formInfo.dogName : "Your dog"}'s age:
          <input type="text" name="dogAge" onChange={handleFormChange} />
        </label>
        <label>
          {formInfo.dogName ? formInfo.dogName : "Your dog"}'s breed:
          <input type="text" name="breed" onChange={handleFormChange} />
        </label>
        <label>
          Is {formInfo.dogName ? formInfo.dogName : "your dog"} crate trained?:{" "}
          <select
            defaultValue={"default"}
            name="crateTrained"
            onChange={handleFormChange}
          >
            <option value="default" disabled></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>
          Has {formInfo.dogName ? formInfo.dogName : "your dog"} ever bitten
          anyone? (it's okay if so!):{" "}
          <select
            defaultValue={"default"}
            name="bite"
            onChange={handleFormChange}
          >
            <option value="default" disabled></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        {formInfo.bite === "yes" ? (
          <label>
            Tell us a bit more about{" "}
            {formInfo.dogName ? formInfo.dogName : "your dog"}
            's bite history:
            <input type="text" name="biteDetails" onChange={handleFormChange} />
          </label>
        ) : null}
        <label>
          How did you hear about us?:
          <input type="text" name="heardAboutUs" onChange={handleFormChange} />
        </label>
        <label>
          Anything else?
          <textarea style={{width: "100%"}} type="text" name="background" onChange={handleFormChange} />
        </label>
        <button onClick={sendEmail}>Submit Form</button>
      </form>
      <div className={modalShown ? "showModal" : "noModal"}>
        {modalShown}
        <button onClick={() => setModalShown(false)}>Close</button>
      </div>
    </section>
  );
};

export default Form;
