import React , {useEffect, useState} from 'react'
import './profile.scss'
import axios from 'axios'

const Profile = () => {
  

    const [ myinfo , setmyinfo ] = useState([]) ;
    const [myskill , setmyskill ] = useState([]);
     
    useEffect( () =>{
        axios.get('js/data.json').then(res => { setmyinfo(res.data.profile) })
    }, [])
    
    const myprofile = myinfo.map( (item) =>{
        return(
            <div className = "profile" key ={item.id} >
            <h2 className ="titel-profile"> <span>My</span> Profile </h2>
                <ul className ="profile-list">
                    <li className="profile-item"> <span> Name  </span>  {item.name}  </li>
                    <li className="profile-item"><span> Birthday  </span> {item.birthday} </li>
                    <li className="profile-item"><span> Address  </span> {item.address} </li>
                    <li className="profile-item"><span> Phone  </span>  {item.phone} </li>
                    <li className="profile-item"><span> Email  </span>  {item.email} </li>
                    <li className="profile-item website"><span> Website  </span> {item.website} </li>
                </ul>
            </div>
        )
    })
    useEffect( () =>{
        axios.get('js/data.json').then(res => { setmyskill(res.data.skills) })
    }, [])
    const myskills = myskill.map( (item) =>{
        return(

                    <div className="bar" key ={item.id}> 
                            <span className="titel"> {item.titel} </span>
                            <span className="perc"> {item.prec} </span>
                            <div className="parent">
                                <span className=  {item.spanclass}></span>
                            </div>
                    </div>

                    
              
        )
    })
   
    

    return(
        <div className = " profile-skills">
            <div className ="container">

            {myprofile}  
            <div className = "skills">
             <h2 className="skills-titel"> Some <span>slills</span></h2>
             <p className="slills-dec">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
            {myskills}
            </div>
            </div>
        </div>
    )
}

export default Profile ;