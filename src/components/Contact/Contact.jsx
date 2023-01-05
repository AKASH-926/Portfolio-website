import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import mail from '../../img/email.png'
import linkedin from '../../img/linkedin.png'
import location from '../../img/location.png'
import github from '../../img/github.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'
export const Contact = () => {
    const formRef = useRef()
    const [done, setdone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkmode = theme.state.darkMode
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_8ysehlc', 'template_ki26p59', formRef.current, '2tIhUN9AqJiDDg-Q7')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's get connected!!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={mail} alt="" className="c-icon" />
                            akash.arthanur26@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={linkedin} alt="" className="c-icon" />
                            <a style={{ color: darkmode && 'white' }} href="www.linkedin.com/in/akash-ap-61126b14a"> www.linkedin.com/in/akash-ap-61126b14a</a>
                        </div>
                        <div className="c-info-item">
                            <img src={github} alt="" className="c-icon" />
                            <a style={{ color: darkmode && 'white' }} href="https://github.com/AKASH-926">https://github.com/AKASH-926</a>
                        </div>
                        <div className="c-info-item">
                            <img src={location} alt="" className="c-icon" />
                            Banglore, Karnataka, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'> <b>Hey,If you have any questions or feedback, please don't hesitate to reach out.</b></p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkmode && '#333', borderBottom: darkmode && '1px solid grey' }} type="text" name="user_name" placeholder='Name' />
                        <input style={{ backgroundColor: darkmode && '#333', borderBottom: darkmode && '1px solid grey' }} type="text" name="user_subject" placeholder='Subject' />
                        <input style={{ backgroundColor: darkmode && '#333', borderBottom: darkmode && '1px solid grey' }} type="text" name="user_email" placeholder='Email' />
                        <textarea style={{ backgroundColor: darkmode && '#333' }} name="message" cols="30" rows="5" placeholder='Message' ></textarea>
                        <button>SUBMIT</button>
                        {done ? <p>Thank you for your Response!!</p> : ''}
                    </form>
                </div>
            </div>
        </div>
    )
}
