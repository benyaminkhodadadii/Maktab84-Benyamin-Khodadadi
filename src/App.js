import React, {useState} from "react";
import axios from "axios";
function App() {
    const [item,setItem]=useState([])
    const [f,setF]=useState(false)
   axios.get('http://localhost:3002/products').then(data => setItem(data.data))
    // const [first]=item;


  return (
      <>
          <button onClick={()=>setF(true)} >+</button>
          {f&& item.map(e=><img src={e.image[0]} key={e}/>)}
      </>


);
}

export default App;
