import React from 'react'
import ContactHeader from '../Shared/Header/ContactHeader';
import ContactFooter from '../Shared/Footer/ContactFooter';

const Contact = () => {
  return (

    <>
    <ContactHeader/>

<div className='container my-5 '>
  <h1>About Us</h1>
  <hr class="border border-danger border-1 opacity-75 w-25" />

  <p>Desh Career is Career based newsletter in Bengali language. This newsletter has published <br/>weekly ..This is published in every Saturday at 12.00PM.
  </p>
  <p>We focus on Career trend, news, smart job etc.</p>
  <p>If you want to contact us: you can send an email to <a href='mailto:contact.deshcareer@gmail.com?' subject="subject text">contact.deshcareer@gmail.com</a>
  </p>
  <p>If you want to meet with us, you can come to our office based on an appointment.</p>
  <p>Our Office Address: 
    <address>
      House: 13/3, <br/>
      Road: 2,<br/>
      Shyamoly, Dhaka-1207 <br/>
      +8801880811047
    </address>
  </p>
</div>
<ContactFooter/>
    </>
  )
}

export default Contact;