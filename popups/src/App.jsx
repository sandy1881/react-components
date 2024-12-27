import './app.css'
import { useState } from 'react';

function App() {
 const [visibi,setVisibility] =useState("hidden");
const handlepopup =()=>{
setVisibility("visible")
}
const handleout = ()=>{

    if(visibi==="visible"){{setVisibility("hidden")}}
    } 

  return (
    <>
    <div className='container' onClick={handleout}>
     <button className="popupButton" onClick={handlepopup}>Popup</button>
     <div>
      <div className="popup-container" style={{visibility:visibi}}>
        <div className='head'>
        <h3>Choose to Create</h3>
        <button className='buttonn' onClick={()=>{setVisibility("hidden")}}>x</button>
        </div>
        <img src="https://calltoinspiration.com/api/media?id=6450d537aa987d569e42d264&asAttachment=false" className='image'/>
        </div>
     </div>
     </div>
    </>
  )
}


export default App
