import React from 'react'
import './Definitions.css'
const Definitions = ({words, meanings, category}) =>{
  return(
    

    <div className = "means">{
      words === "" ?(<span className = "subs">Start</span> ):
     (meanings.map((mean) =>(
       mean.meanings.map((item) =>(
         item.definitions.map((def) =>(
           <div className = "singmean" style = {{background : "grey", color : "black"}}>
             <b>{def.definition}</b>
           </div>
         ))
       ))
     ) ))}</div>  
  )
}
export default Definitions;
