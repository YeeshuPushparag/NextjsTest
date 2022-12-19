import {React, useState} from 'react'
import Image from 'next/image'

const Appointment = ({closeModal}) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  function showAlert(message){
    let messageAlert = document.getElementById("message-alert");
    messageAlert.style.top = "0px"
    messageAlert.children[0].innerHTML = message;
    setTimeout(() => {
      messageAlert.style.top = "-75px"
    }, 3000);
  }
  function sendData(date, time){
   showAlert("Appointment sent successfully")
  }
  const submitAppointment = (e)=>{
    e.preventDefault();
let date = e.target.date.value
let time = e.target.time.value
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");    
    if (!name || !email || !date || !time || !message) {
      showAlert("Any field cannot be blank");
  }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    showAlert("Please enter a valid e-mail address");    
    }
  else{
  sendData(date, time)
  }
  }
  const handleChange = (e) => {
    if (e.target.name == 'message') {
      setmessage(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
  }
  return (
    <div id="appointment">
    <div className="image">

    <Image   layout="fill" objectFit="contain" id="closeModal" src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/close-cion.png`} alt="close" onClick={closeModal}/>
    </div>
    <h4>Make Appointment</h4>
    <form onSubmit={submitAppointment}>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Full Name"
        value={name} onChange={handleChange}
      />
      <input type="email" name="email" placeholder="Enter Your Email" value={email} onChange={handleChange}/>
      <input id="date" name="date" type="date"/>
      <input id="time" name="time" type="time"/>
      <textarea
        name="message"
        cols={30}
        rows={10}
        placeholder="Enter Your Message"
        value={message} onChange={handleChange}
      />
      <input
        type="submit"
        value="Make Appointment"
        id="submitAppointment"
        
      />
    </form>
  </div>
  )
}

export default Appointment