import React from 'react'
import './about.scss'
import aboutbg from './about-bg.jpg'



const About = () => {
    return(
        <div className = "about" style ={{
            backgroundImage : "url("+ aboutbg +")",
            height: "500px",
            backgroundPosition : "center",
            backgroundSize : "cover",
            backgroundAttachment : "fixed"

        }}>
            <div className="container">
                <div className="about-info">
                    <h2 className="info-titel"> <span> This is </span> Me</h2>
                    <h4 className="info-dir"> Creative Director </h4>
                    <p className="info-dec"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    <p className="info-dec"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                </div>
            </div>
        </div>
    )
}

export default About ;