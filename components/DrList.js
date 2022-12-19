import Image from 'next/image'
import React from 'react'

const DrList = () => {
  return (
  <>
    <section id="dr-list" >
    <div id="doctors-list" >
    <div className="image">
    <Image   layout="fill" objectFit="contain"  src={`${process.env.NEXT_PUBLIC_FAVICON}/yvette.png`} alt="doctor"/>
    </div>
      <h4>Meet Dr. Yvette Chua</h4>
      <p>
        Dr. Yvette Chua leads our team of experienced professionals. She strives
        to improve her technical skills, interpersonal communication, and
        interaction. Dr. Chua is excited about what she is doing and is motivated
        to achieve the highest standards of quality and integrity. She believes
        patient care should be comprehensive, courteous, and responsive to
        individual needs and preferences.
      </p>
      <h5>Education:</h5>
      <ul>
        <li>San Mateo High School</li>
        <li>San Francisco State University - Bachelor of Sciences</li>
        <li>Temple University - Doctorate in Dental Surgery (DDS)</li>
      </ul>
      <h5>Memberships:</h5>
      <ul>
        <li>American Dental Association (ADA)</li>
        <li>California Dental Association (CDA)</li>
        <li>San Mateo Dental Society</li>
        <li>Dental Organization for Conscious Sedation</li>
      </ul>
      <h5>Certificates:</h5>
      <ul>
        <li>Invisalign</li>
        <li>Advanced Concepts in Cosmetic Dentistry</li>
      </ul>
      <div className="image">
    <Image   layout="fill" objectFit="contain"  src={`${process.env.NEXT_PUBLIC_FAVICON}/susana.jpeg`} alt="doctor"/>
    </div>
      <h4>Meet Dr. Susana Chua</h4>
      <p>
        Dr. Susana Chua graduated from the University of the East in 1966. She
        first practiced in the Philippines, then moved to San Francisco and has
        been practicing here for 16 years. Throughout her career, she has
        continued to improve her craft by taking several continuing education
        seminars every year. She is a member of several dental associations, such
        as the American Dental Association, California Dental Association, San
        Francisco Dental Association, Academy of General Dentistry, and others.
        Besides Dr. Susana Chua&apos;s extensive experience and caring nature, she is
        multi-lingual, able to speak Tagalog, Ilocano, Chinese, and Spanish.
      </p>
      <div className="image">
    <Image   layout="fill" objectFit="contain"  src={`${process.env.NEXT_PUBLIC_FAVICON}/derrick.png`} alt="doctor"/>
    </div>
      <h4>Meet Dr. Derrick Chua</h4>
      <p>
        As a member of the American Academy of Cosmetic Dentistry, Dr. Derrick
        Chua continually learns about the latest techniques in aesthetic
        dentistry. He is also a member of the American Dental Association and the
        San Francisco Dental Society. He is a graduate of Bowditch Middle School,
        San Mateo High School, University of California, and the Temple University
        School of Dentistry. Dr. Derrick, his wife and baby son live in the San
        Mateo/Foster City area. In his spare time, he enjoys playing tennis,
        mountain biking, and reading.
      </p>
    </div>
  </section>
  </>
  )
}

export default DrList