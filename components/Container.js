import { useRouter } from 'next/router'
import {React, useEffect, useState} from 'react'
const Container = ({openModal}) => {
  let router = useRouter()
  const [head2, setHead2] = useState("")
  const [head3, setHead3] = useState("")
  const [para, setPara] = useState("")
  const setData=()=>{
    if(router.pathname==="/"){
      setHead2("Bridgepointe Family Dental Care")
      setHead3("Dr. Yvette Chua DDS")
      setPara("Mariners Plaza • 635 Mariners Island Blvd • Suite 201 • San Mateo CA • 94404")
    }
    else if (router.pathname==="/services") {
      setHead2("Our Dental Services")
      setHead3("Bridgepointe Family Dental Care")
      setPara("Mariners Plaza • 635 Mariners Island Blvd • Suite 201 • San Mateo CA • 94404")
    }
    else if (router.pathname==="/about") {
      setHead2("About Bridgepointe")
      setHead3("Bridgepointe Family Dental Care")
      setPara("Mariners Plaza • 635 Mariners Island Blvd • Suite 201 • San Mateo CA • 94404") 
    }
    else if (router.pathname==="/contact") {
      setHead2("Contact Us")
      setHead3("Bridgepointe Family Dental Care")
      setPara("Mariners Plaza • 635 Mariners Island Blvd • Suite 201 • San Mateo CA • 94404")
    }
  }
  useEffect(() => {
   setData()
  }, [router.pathname])

  useEffect(() => {
    let containerButton = document.getElementById("sec-open");
    if(document.documentElement.scrollTop + window.innerHeight  +100>= containerButton.offsetTop){
      containerButton.classList.add("fade")
    }
    window.addEventListener("scroll",()=>{
      if(document.documentElement.scrollTop + window.innerHeight  +100>= containerButton.offsetTop){
        containerButton.classList.add("fade")
      }
    })
  }, [])
  
  return (
    <main>
    <div id="container">
      <h2 >{head2}</h2>
      <h3 >{head3}</h3>
      <p >{para}</p>
      <button className="cta backTrans" id="sec-open"  onClick={()=>{openModal()}}>
        Request Appointment
      </button>
    </div>
  </main>
  )
}

export default Container