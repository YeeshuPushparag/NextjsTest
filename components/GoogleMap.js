import React from 'react'

const GoogleMap = () => {
  return (
    <section id="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9100.201100236469!2d-122.28988450105591!3d37.5644729440009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9ec0c07d105d%3A0x76ff61770f6cde20!2s635%20Mariners%20Island%20Blvd%2C%20Foster%20City%2C%20CA%2094404%2C%20USA!5e1!3m2!1sen!2sin!4v1665867069798!5m2!1sen!2sin"
      loading="lazy"
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>
  )
}

export default GoogleMap