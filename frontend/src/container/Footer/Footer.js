import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formdata, setFormData] = useState({ name: '', email: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { username, email, message } = formdata;
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });

    };
    const handleSubmit = () => {
        setLoading(true)
        const contact = {
            _type: 'contact',
            name: formdata.username,
            email: formdata.email,
            message: formdata.messsage
        };
        client.create(contact).then(() => {
            setLoading(false);
            setIsSubmitted(true)
        }).catch(err => console.log(err));
    }
    return (
        <>
            <h2 className="head-text">chat with me</h2>
            <div className="footer-cards">
                <div className="footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:nezabruce@gmail.com" className="p-text">nezabruce@gmail.com</a>
                </div>
                <div className="footer-card">
                //Web Development I am good 
                //Frontend Development I am good
                //Backend Development I am good
                //MERN Stack I am good
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+250 (123) 456-7890" className="p-text">0783304332</a>
                </div>
            </div>
            {!isSubmitted ? (
                <div className="footer-form flex">
                    <div className="flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                    </div>
                    <div className="flex">
                        <input className="p-text" type="email" placeholder="Your Name" name="email" value={email} onChange={handleChangeInput} />
                    </div>
                    <div>
                        <textarea name="message" value={message} className="p-text"
                            onChange={handleChangeInput}
                            placeholder="Leave a message"
                        />
                    </div>
                        <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? "Submit" : "Loading"}</button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};
// export default Footer;
export default AppWrap(MotionWrap(Footer, 'footer'),'contact','whitebg');