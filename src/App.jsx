
import './App.css'
import { useState } from 'react';
function App() {

  const[bgcolor,setColor]=useState('')

  const changeColorBlue=()=>{
    console.log("button clicked");
    setColor('blue')
    

 
  }
  const changeColorred=()=>{
    console.log("button clicked");
    setColor('red')
    


 
  }
  const changeColorViolet=()=>{
    console.log("button clicked");
    setColor('violet')
 
  }


  return (
    <>

<div className="content " style={{backgroundColor:bgcolor, height:'100vh',width:'100VW', borderColor:'black'}}>
   <h2>Change The  Background</h2>
<div className='buttons'>
    <button onClick={changeColorBlue} id='bluebutton' style={{height:'50px',width:'150px',backgroundColor:'blue' ,border:'none',borderRadius:'10px',color:'white'}}>Blue</button>
    <button onClick={changeColorred} id='redbutton'  style={{height:'50px',width:'150px',backgroundColor:'Red' ,border:'none',borderRadius:'10px',color:'white'}}>Red</button>
    <button onClick={changeColorViolet} id='violetbutton'  style={{height:'50px',width:'150px',backgroundColor:'Violet' ,border:'none',borderRadius:'10px',color:'white'}}>Violet</button>
</div>
</div>

      </>
  )
}

export default App
