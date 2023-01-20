import React, { useState } from "react";

const ContactComponent = ({ isModalOpen }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  function showAlert(message) {
    let messageAlert = document.getElementById("message-alert");
    messageAlert.style.top = "0px";
    messageAlert.children[0].innerHTML = message;
    setTimeout(() => {
      messageAlert.style.top = "-75px";
    }, 3000);
  }
  function sendData() {
    setname("");
    setmessage("");
    setemail("");
    showAlert("Message sent successfully");
  }
  const submitContact = (e) => {
    e.preventDefault();
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (!name || !email || !message) {
      showAlert("Any field cannot be blank");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      showAlert("Please enter a valid e-mail address");
    } else {
      sendData();
    }
  };
  const handleChange = (e) => {
    if (e.target.name == "message") {
      setmessage(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };
  return (
    <>
      <section id="contact">
        <div className="first-half">
          <div>
            <h4>Opening Hours</h4>
            <div className="box">
              <span className="day">Monday</span>
              <span className="timing">10 a.m. to 5 p.m.</span>
            </div>
            <div className="box">
              <span className="day">Tuesday</span>
              <span className="timing">9 a.m. to 5 p.m.</span>
            </div>
            <div className="box">
              <span className="day">Wednesday</span>
              <span className="timing">by appointment</span>
            </div>
            <div className="box">
              <span className="day">Thursday</span>
              <span className="timing">9 a.m. to 5 p.m.</span>
            </div>
            <div className="box">
              <span className="day">Friday</span>
              <span className="timing">8 a.m. to 5 p.m.</span>
            </div>
            <div className="box">
              <span className="day">Saturday</span>
              <span className="timing">8 a.m. to 1 p.m.</span>
            </div>
            <div className="box">
              <span className="day">Sunday</span>
              <span className="timing">closed</span>
            </div>
          </div>
        </div>
        <div className="second-half">
          <h4>Do you have any query?</h4>
          <form onSubmit={submitContact}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              value={name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Enter Your Message"
              value={message}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Send Message"
              id="submitContact"
              disabled={isModalOpen}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
