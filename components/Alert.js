import React from 'react'
import Image from 'next/image'

const Alert = () => {
  const closeAlert = ()=> {
    let messageAlert = document.getElementById("message-alert");
    messageAlert.style.top = "-75px";
  }
  return (
    <div id="message-alert">
    <p />
    <div className="image">
    <Image   layout="fill" objectFit="contain" id="closeAlert" src={`${process.env.NEXT_PUBLIC_FAVICON}/close-icon.png`} alt="close" onClick={closeAlert}/>
    </div>
  </div>
  )
}

export default Alert