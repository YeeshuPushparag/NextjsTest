import React, {useEffect} from 'react'
import Image from 'next/image'
function showService() {
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
if(box1.classList.contains("box-animation")){
 box1.classList.remove("box-animation")
}
if(box2.classList.contains("box-animation")){
 box2.classList.remove("box-animation")
}
if(box3.classList.contains("box-animation")){
 box3.classList.remove("box-animation")
}
if(box4.classList.contains("box-animation")){
 box4.classList.remove("box-animation")
}

if(document.documentElement.scrollTop + window.innerHeight - 100 >= box1.offsetTop){
  box1.classList.add("box-animation")
}
if(document.documentElement.scrollTop + window.innerHeight - 100 >= box2.offsetTop){
  box2.classList.add("box-animation")
}
if(document.documentElement.scrollTop + window.innerHeight - 100 >= box3.offsetTop){
  box3.classList.add("box-animation")
}
if(document.documentElement.scrollTop + window.innerHeight - 100 >= box4.offsetTop){
  box4.classList.add("box-animation")
}
window.addEventListener("scroll",()=>{
  if(document.documentElement.scrollTop + window.innerHeight - 100 >= box1.offsetTop){
    box1.classList.add("box-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight - 100 >= box2.offsetTop){
    box2.classList.add("box-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight - 100 >= box3.offsetTop){
    box3.classList.add("box-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight - 100 >= box4.offsetTop){
    box4.classList.add("box-animation")
  }
})

}
const Service = () => {
  useEffect(() => {
   showService()
  },[])
  
  return (
  <>
    <section id="services">
    <p id="smile">Your path to a beautiful smile</p>
    <p id="mission">
      Our mission is to treat you with respect, provide the skill and quality
      care in a gentle, relaxed atmosphere that you deserve.
    </p>
    <div className="service-container">
      <div className="box" id="box1">
        <div className="heading">
          <div className="image">

          <Image   layout="fill" objectFit="contain" src="/teeth-whitening.png" alt="box-image" />
          </div>
          <h5>Teeth Whitening</h5>
        </div>
        <div className="para">
          <p>
            Nothing conveys good health and enhances your smile more than your
            clean, white teeth.
          </p>
        </div>
      </div>
      <div className="box" id="box2">
        <div className="heading">
          <div className="image">

          <Image   layout="fill" objectFit="contain" src="/teeth-cleaning.png" alt="box-image" />
          </div>
          <h5>Teeth Cleaning</h5>
        </div>
        <div className="para">
          <p>
            We provide teeth cleaning facility at Bridgepointe Dental Care to
            give a perfect smile.
          </p>
        </div>
      </div>
      <div className="box" id="box3">
        <div className="heading">
          <div className="image">

          <Image   layout="fill" objectFit="contain" src="/dental-implants.png" alt="box-image" />
          </div>
          <h5>Dental Implants</h5>
        </div>
        <div className="para">
          <p>
            At Bridgepointe our team provide dental implants facility, making
            your teeth look good.
          </p>
        </div>
      </div>
      <div className="box" id="box4">
        <div className="heading">
          <div className="image">

          <Image   layout="fill" objectFit="contain" src="/invisalign.png" alt="box-image" />
          </div>
          <h5>Invisalign</h5>
        </div>
        <div className="para">
          <p>
            It is possible to have straight teeth in just 6-15 months. No
            braces, wires or headgear.
          </p>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Service