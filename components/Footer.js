import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = ({isModalOpen}) => {
  return (
    <footer>
    <h3>Bridgepointe Family Dental Care</h3>
    <div className="box">
      <div className="contact-info">
        <div className="info-box">
          <div className="icon">
            <div className="image">

            <Image   layout="fill" objectFit="contain" src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/address-location-icon.png`} alt="address" />
            </div>
          </div>
          <div className="address">
            <span>Mariners Plaza</span>
            <span>635 Mariners Island Blvd.</span>
            <span>Suite 201</span>
            <span>San Mateo, CA 94404</span>
          </div>
        </div>
        <div className="info-box">
          <div className="icon">
            <div className="image">

            <Image   layout="fill" objectFit="contain" src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/phone-call-icon.png`} alt="phone" />
            </div>
          </div>
          <div className="phone">
            <span><a href="tel:650-638-9800">650-638-9800</a></span>
          </div>
        </div>
        <div className="info-box">
          <div className="icon">
            <div className="image">

            <Image   layout="fill" objectFit="contain" src={`${process.env.PUBLIC_NEXT_IMAGESPATH}/email-icon.png`} alt="email" />
            </div>
          </div>
          <div className="email">
            <span><a href="mailto:smilebridgepointe@gmail.com">smilebridgepointe@gmail.com</a></span>
          </div>
        </div>
      </div>
      <ul className="footer-nav-list">
      <li>
          <Link href="/"><a  className={`${isModalOpen?"notActive":"footerLink"}`}>Home</a></Link>
        </li>
        <li>
          <Link href="/services"><a className={`${isModalOpen?"notActive":"footerLink"}`}>Services</a></Link>
        </li>
        <li>
          <Link href="/about"><a  className={`${isModalOpen?"notActive":"footerLink"}`}>About</a></Link>
        </li>
        <li>
          <Link href="/contact"><a  className={`${isModalOpen?"notActive":"footerLink"}`}>Contact</a></Link>
        </li>
      </ul>
    </div>
    <p>Copyright &copy; Created by Yeeshu Pushparag.</p>
  </footer>
  )
}

export default Footer