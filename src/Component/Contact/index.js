import React from 'react'
import './contact.scss'


const Contact = () => {
    return(
        <div className = "contact">
         <div className="comtanier">
            <h2 className="contact-titel"><span>Drop  </span>  Me A line</h2>
            <form>
                <div className="form-input"> 
                    <input type="text" className="text" placeholder=" Your Name " />
                    <input type="email" className="email" placeholder=" Your Email " />
                </div>
                <input type="text" className="sub" placeholder=" Your Subject " />
                <textarea cols="30" rows="10" placeholder="Your Massage" ></textarea>
                <input type="submit" className="submit" value="Send Massage" />
            </form>
         </div>
        </div>
    )
}

export default Contact ;