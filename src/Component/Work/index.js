import React , {Component} from 'react'
import './work.scss'
import axios from 'axios'



class  Work extends Component {

    constructor(prps){
        super(prps);
        this.state ={
            work : []
        }
    }

    componentDidMount(){
        axios.get('js/data.json').then( res => { this.setState({ work : res.data.works }) } )
    }

    render(){
        const work = this.state.work ;

        const Worllists = work.map( (worklist) => {
            return(
            <div className ="part-1" key={worklist.id} id="work" >
                <i className ={worklist.icon_name}></i>
               <h4 className="part-titel"> {worklist.title} </h4>
               <hr />
               <p className ="part-decs">{worklist.body}</p>
            </div>
            )

        })

        return(
            <div className = "work">
            <div className ="container">
                <h2 className="titel-work"><span> My </span> Work </h2>
               {Worllists}
            </div>
            </div>
        )
    }
  
}

export default Work ;