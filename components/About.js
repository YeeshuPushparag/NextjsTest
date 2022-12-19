import Image from 'next/image'
import React from 'react'
const About = () => {
  return (
    <section id="about">
    <div className="first-half">
    <Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_FAVICON}/dentalCare.jpg`} alt="dentist" />
    </div>
    <div className="second-half">
      <div className="s-h-t">
        <h5>Quality dental care for you and your family</h5>
        <p>
          Nothing conveys good health and enhances your smile more than clean,
          white teeth.
        </p>
        <p />
      </div>
      <div className="s-list">
        <div className="s-h-l">
          <div className="check">
            <div className="image">
            <Image   layout="fill" objectFit="contain" src={`${process.env.NEXT_PUBLIC_FAVICON}/check.png`} alt="check" />
            </div>
          </div>
          <div className="s-h-l-t">
            <h6>Experienced Dentists</h6>
            <p>
              Our staff is committed to providing you with excellent service
              that extends beyond your office visit.
            </p>
            <p />
          </div>
        </div>
        <div className="s-h-l">
          <div className="check">
          <div className="image">
            <Image   layout="fill" objectFit="contain" src={`${process.env.NEXT_PUBLIC_FAVICON}/check.png`} alt="check" />
            </div>
          </div>
          <div className="s-h-l-t">
            <h6>Modern Technology</h6>
            <p>
              Our office is completely remodeled and offers the latest in
              digital technology.
            </p>
            <p />
          </div>
        </div>
        <div className="s-h-l">
          <div className="check">
          <div className="image">
            <Image   layout="fill" objectFit="contain" src={`${process.env.NEXT_PUBLIC_FAVICON}/check.png`} alt="check" />
            </div>
          </div>
          <div className="s-h-l-t">
            <h6>Comfortable Environment</h6>
            <p>
              We do everything possible to assure your comfort and well being
              during your dental treatments.
            </p>
            <p />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About