import React from 'react'
import Home from './../Home/index'
import Work from './../Work/index'
import About from './../About/index'
import Contact from './../Contact/index'
import Portfolio from './../Portfolio  /index'
import Profile from './../Profile/index'
import Socailmedia from './../SocailMedia/index' 

function Allcomp () {


  return ( 
    <div>
      <Home />
      <Work/>
      <Portfolio/>
      <Profile />
      <About />
      <Socailmedia /> 
      </div>
  );
}

export default Allcomp;
