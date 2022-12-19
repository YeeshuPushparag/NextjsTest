import React, { useEffect } from 'react'
import Image from 'next/image'
function showDoctors(){
  let drBox1 = document.getElementById("dr-box1");
  let drBox2 = document.getElementById("dr-box2");
  let drBox3 = document.getElementById("dr-box3");
  if(drBox1.classList.contains("box-animation")){
    drBox1.classList.remove("box-animation")
   }
   if(drBox2.classList.contains("box-animation")){
    drBox2.classList.remove("box-animation")
   }
   if(drBox3.classList.contains("box-animation")){
    drBox3.classList.remove("box-animation")
   }
  if(document.documentElement.scrollTop + window.innerHeight - 100 >= drBox1.offsetTop){
    drBox1.classList.add("box-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight - 100 >= drBox2.offsetTop){
    drBox2.classList.add("box-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight - 100 >= drBox3.offsetTop){
    drBox3.classList.add("box-animation")
  }
  window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop + window.innerHeight - 100 >= drBox1.offsetTop){
      drBox1.classList.add("box-animation")
    }
    if(document.documentElement.scrollTop + window.innerHeight - 100 >= drBox2.offsetTop){
      drBox2.classList.add("box-animation")
    }
    if(document.documentElement.scrollTop + window.innerHeight - 100 >= drBox3.offsetTop){
      drBox3.classList.add("box-animation")
    }
  })
}
const Doctor = () => {
  
  useEffect(() => {
    showDoctors()
  },[])
  
  return (
   <>
    <section id="doctors">
    <p id="dental">Meet our professional dental team</p>
    <p id="family">
      Dr. Yvette Chua and her friendly, professional dental team will provide
      you with state of the art, quality dental care for you and your whole
      family.
    </p>
    <div className="dr-list">
      <div className="box" id="dr-box1">
        <div className="heading">
          <div className="image">
          <Image   layout="fill" objectFit="contain" src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/yvette.png`} alt="doctor" />
          </div>
          <h5>Dr. Yvette Chua</h5>
        </div>
        <div className="para">
          <p>
            Dr. Yvette Chua leads our team of experienced professionals. She
            strives to improve her technical skills, interpersonal
            communication, and interaction.
          </p>
        </div>
      </div>
      <div className="box" id="dr-box2">
        <div className="heading">
          <div className="image">

          <Image   layout="fill" objectFit="contain" src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/susana.jpeg`} alt="doctor" />
          </div>
          <h5>Dr. Susana Chua</h5>
        </div>
        <div className="para">
          <p>
            Dr. Susana Chua graduated from the University of the East in 1966.
            She first practiced in the Philippines, then moved to San Francisco
            and has been practicing here for 16 years.
          </p>
        </div>
      </div>
      <div className="box" id="dr-box3">
        <div className="heading">
          <div className="image">

          <Image   layout="fill" objectFit="contain" src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/derrick.png`} alt="doctor" />
          </div>
          <h5>Dr. Derrick Chua</h5>
        </div>
        <div className="para">
          <p>
            As a member of the American Academy of Cosmetic Dentistry, Dr.
            Derrick Chua continually learns about the latest techniques in
            aesthetic dentistry.
          </p>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}
export default Doctor