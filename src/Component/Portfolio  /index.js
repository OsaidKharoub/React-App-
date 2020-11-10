import React , {useEffect, useState} from 'react'
import './Portfolio  .scss'
import axios from 'axios'



const Portfolio = () => {

const [ images , setimages ] = useState([]) 

useEffect( () =>{
    axios.get('js/data.json').then(res => { setimages(res.data.portfolio) })
}, [])

const listImages = images.map( (img) => {
    return(

     <div key={img.id} className="cover-img">
        <img src={img.image}/>
        <p className = "ovarlay">
            <span>Show Image</span>
        </p>
       
    </div>

    )
})

    return(
        <div className = "portfolio" id="portfolio">
          <h2 className="h2"><span> My </span>Portfolio</h2>
          <ul className ="portfolio-list">
              <li className="portfolio-item action">ALL</li>
              <li  className="portfolio-item">HTML</li>
              <li  className="portfolio-item">Photoshop</li>
              <li  className="portfolio-item">Wordpress</li>
              <li  className="portfolio-item">Mobile</li>
          </ul>
         {listImages}
        </div>
    )
}

export default Portfolio ;