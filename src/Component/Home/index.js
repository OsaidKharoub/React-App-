import React from 'react'
import '../Home/home.scss'
import Background from '../Home/home-bg.jpg'


const Home = () => {
    return(
        <div style={{
            backgroundImage: "url(" + Background + ")",
            width: "100%",
            height: "450px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}} className = "home">
          <div className="container">
            <div className ="home-information">
                <h2 className ="home-titel">Osaid Kharoub</h2>
                <h4 className="home-info">Creative Director</h4>
                <p className ="home-desc">
                Iam a professional <span>UX Designer</span>  and Fron-End Developer creating modern and responsive to web and mobile, Let us work together.Thank you
                </p>
                <button className="home-btn"> Let's Begin </button>
            </div>
        </div>
        </div>
       
       
    )
}

export default Home ;