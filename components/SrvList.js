import Image from 'next/image'
import React from 'react'

const SrvList = () => {
  return (
    <>
    <section id="srv-list">
  <div id="service-list">
    <h3>Our Dental Services</h3>
    <h4>Preventive Care</h4>
    <div className="image">
    <Image   layout="fill" objectFit="contain"  src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/preventive-care.jpg.jpg`} alt="doctor"/>
    </div>
    <p>
      Preventive dentistry focuses on the preservation of your natural teeth. It
      involves an examination to check your teeth and gums. We also screen for
      signs of oral cancer.
    </p>
    <p>
      The solution is treating and preventing tooth decay, gum disease, and bad
      breath by having regular preventive care visits at least once every 6
      months.
    </p>
    <ul>
      <li>Cleaning</li>
      <li>Digital X-Ray - up to 90% less radiation</li>
      <li>Dental Sealants</li>
      <li>Fluoride Treatment</li>
      <li>Regular Checkups</li>
      <li>Patient Education</li>
      <li>Snoreguards</li>
      <li>Nightguards</li>
      <li>Mouthguards</li>
      <li>Microlux DL &amp; Vizilite - oral cancer screening kits</li>
    </ul>
    <h4>Cosmetic Dentistry</h4>
    <div className="image">
    <Image   layout="fill" objectFit="contain"  src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/cosmetic.jpg`}/>
    </div>
    <p>
      Did you know that 3/4 of Americans are unhappy with the appearance of
      their teeth? Many believe that an unattractive smile can hurt the personal
      relationships and careers. At Bridgepointe Dental we believe it is
      important to give people confidence by giving them a beautiful smile.
    </p>
    <p>
      Our staff will focus on your entire smile and not just a few teeth. We&apos;ll
      give you a natural looking smile and make you excited about the results.
    </p>
    <ul>
      <li>Tooth Colored Fillings (Composites)</li>
      <li>Porcelain Veneers</li>
      <li>Whitening or Bleaching</li>
      <li>Bonding</li>
      <li>All Porcelain Crowns, Onlays, and Inlays</li>
    </ul>
    <h4>Restorative Services</h4>
    <div className="image">
    <Image   layout="fill" objectFit="contain"  src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/restorative.jpg`}/>
    </div>
    <p>
      Harmful bacteria, accidents, teeth grinding, and previously failed
      restorations can create problems for your teeth and gums. Dr Chua will not
      only restore your smile but function as well.
    </p>
    <ul>
      <li>Fillings</li>
      <li>Root Canals</li>
      <li>Crowns</li>
      <li>Bridges</li>
      <li>Dental Implants</li>
      <li>Full and Partial Dentures</li>
    </ul>
    <h4>Orthodontic Services</h4>
    <div className="image">
    <Image   layout="fill" objectFit="contain"  src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/orthodontic.jpg`} alt="doctor"/>
    </div>
    <p>Orthodontics without braces? Is it possible?</p>
    <p>
      Yes! With Invisalign it is possible to have straight teeth in as little as
      6-15 months. No braces, wires, or headgear. And the best part is that no
      one will know you are straightening your teeth because - it&apos;s invisible!
      The Invisalign system is easily removeable andn allows you to eat and
      drink what you want while in treatment, and brushing and flossing are no
      problem. We also feature traditional braces - ask us which is right for
      you.
    </p>
    <h4>Patient Comfort &amp; Technology</h4>
    <div className="image">
    <Image   layout="fill" objectFit="contain"  src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/comfort.jpg`} alt="doctor"/>
    </div>
    <p>
      We do everything possible to assure your comfort and well being during
      your dental treatments.
    </p>
    <ul>
      <li>DVD Movies and CD Music</li>
      <li>Oral Conscious Sedation</li>
      <li>State of the Art Sterilization Center</li>
      <li>Digital X-rays</li>
      <li>Intraoral Camera</li>
      <li>Chairside Computer</li>
    </ul>
  </div>
</section>
 </>
  )
}

export default SrvList