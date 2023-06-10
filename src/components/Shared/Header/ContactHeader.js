import React from 'react'
import { Link } from 'react-router-dom'

const ContactHeader = () => {
  return (
    <div>
        <nav className='p-5 .bg-body-tertiary shadow'>
            <div className='d-flex container flex-lg-row flex-md-column flex-sm-column flex-column'>
                <div className='me-5'>
                    <h1>Desh Career</h1>
                </div>
                <div className='text-right ms-5 d-flex flex-lg-row flex-md-column flex-sm-column flex-column '>
                    <ul className='d-flex pt-2 text-right list-unstyled gap-3 flex-lg-row flex-md-column flex-sm-column flex-column'>
                        <li><Link to='/' className='text-decoration-none text-black'>Home</Link></li>
                        <li>Privacy Policy</li>
                        <li>Terms Condition</li>
                        <li className='text-danger'>About Us</li>
                        <li>Contact Us</li>
                        <li>Advertise</li>
                        
                    </ul>
                    <button type="button" className="btn btn-danger mb-2 ms-2 ms-lg-2 ms-md-1 ">Join Now</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default ContactHeader