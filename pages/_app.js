import '../styles/globals.css'
import React, {useState} from 'react'
import Alert from '../components/Alert';
import Appointment from '../components/Appointment';
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const [isModalOpen, setModal] = useState(false) 

  const openModal = ()=>{
    let appointmentModal = document.getElementById("appointment");
    let deviceDate = document.getElementById("date")
    let deviceTime = document.getElementById("time")
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    const formattedToday = yyyy + "-" + mm + "-" + dd;
    const formattedTime = hours + ":" + minutes;
    appointmentModal.style.top = "50%";
    appointmentModal.style.transform = "translate(-50%,-50%) scale(1)";
    if(window.innerHeight<600){
      appointmentModal.style.height = "100%";
      appointmentModal.style.overflowY = "scroll"
    }
    if(window.innerHeight>=600){
      appointmentModal.style.overflowY = "auto"
      appointmentModal.style.height = "600px";
    } 
    deviceDate.value = formattedToday;
    deviceTime.value = formattedTime;
    setModal(true)
  }
  const closeModal = ()=> {
    let appointmentModal = document.getElementById("appointment");
    appointmentModal.style.top = "-100%";
    appointmentModal.style.transform = "translate(-50%,-50%) scale(0.1)";
    setModal(false)
  }
  return(
<>
<Alert/>
<Appointment closeModal={closeModal}/>
<Navbar  openModal={openModal} isModalOpen={isModalOpen}/>
<Component {...pageProps} isModalOpen={isModalOpen} openModal={openModal}/>
<Footer  isModalOpen={isModalOpen}/>
</>
  )
}

export default MyApp


