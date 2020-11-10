import React from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll' 



const Navbar = () => {

 
    return(
       
        <div className = "navbar">
            <div className="container">
                <div className ="logo">
                    <h2 className="logo-text"> Ultra Profile </h2>
                 </div>
                 <ul className = 'ul-list '>
                 <li className ="list-item">  <NavLink to = '/'> Home </NavLink>  </li> 

                 <li className ="list-item">  <Link  activeClass="active"
                                                        to="work"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-220}
                                                        duration={300}
                                                    > Work </Link> </li>

                 <li className ="list-item" >  <Link  activeClass="active"
                                                        to="portfolio"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={300}
                                                    > Portfolio </Link> </li> 

                 <li className ="list-item"> <Link  activeClass="active"
                                                        to="about"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={300}
                                                      > About </Link>
                                                      </li>    

                 <li className ="list-item" >  <Link  activeClass="active"
                                                        to="socailmedia"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={300}
                                                    > Socailmedia </Link> </li> 

                 <li className ="list-item" >  <NavLink to = '/Contact'>  Contact </NavLink> </li> 
                </ul>

            </div>
           
        </div>
    
    )
}

export default Navbar ;

