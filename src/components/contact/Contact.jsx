import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    // Prevent the page from refreshing when click sumbit
    e.preventDefault();

    emailjs.sendForm('service_hug0plf', 'template_k4znymf', formRef.current, 'E5ab01DAcNOrtkw4E')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Feel free to ask any questions!</h1>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch.</b> Let me know if you have any questions regarding my portfolio, projects or just want to talk to me!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
