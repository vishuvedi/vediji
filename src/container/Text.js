import React , {useState} from 'react'
import Proptype from 'prop-types'
export default function Text(props) {

let mystyle ={
    color :'black',
    backgroundColor :'white'
}

const listenh = () =>{
    let newone = text.toUpperCase();
    setText(newone)
    
}

const double = () =>{
   let dell = mystyle;
   if(mystyle.color == 'black'){
    
   }
    
}


const listenfh = () =>{

    let newone = text.toLowerCase();
    
    setText(newone)
    
}
const colors = () =>{
      let newone = ''
    setText(newone)
    
}

const x = (event) =>{
    setText(event.target.value)
}

    const [text , setText] = useState("");
 
    return (
        <>

        <h1> Welcome to FossilCounts</h1>
        <div className = "container " >
<div class="form-floating">
  <textarea class="form-control" value = {text} placeholder="here " id="floatingTextarea" onChange = {x} ></textarea >
  <label for="floatingTextarea" >Write Here</label>
</div>
<button className = "btn btn-primary" onClick = {listenh}> Capitalize</button>
<button className = "btn btn-success ms-4" onClick = {listenfh}> Lowecase </button>
<button className = "btn btn-success ms-4" onClick = {colors}> Clear </button>

        </div>


<div className = "container"  >
    <h1> Summary</h1>
    <p1> {text.split(" ").length-1} words and {text.length} char</p1><hr/>
  <h2> Preview </h2>
  <p1>{text}</p1>

</div> 
        </>
    )
}

