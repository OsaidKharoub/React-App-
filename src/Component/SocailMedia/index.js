import React,{useEffect,useState} from 'react'
import './social.scss'
import axios from 'axios'



const Socailmedia = () => {


    const [ social , setsocial ] = useState([])


    useState(()=>{
        axios.get("js/data.json").then(res => { setsocial(res.data.social) })
    },[])

 const mysocial = social.map( (item) => {
     return(
        <div className ={item.class} key ={item.id} id="socailmedia">
        <i className = {item.icon}></i>
        <p>
            <span className="info-1">{item.title}</span>
            <span className="info-2"> {item.body} </span>
        </p>

    </div>
     )
 })
    return(
        <div className = "socailmedia">
            
            {mysocial}

        </div>
    )
}

export default Socailmedia ;