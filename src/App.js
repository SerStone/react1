import './App.css';
import {useReducer, useState} from "react";


const init = (intialValue) =>{
  return {catObj:intialValue,dogObj:intialValue}
}

const reducer = (state,action) => {
switch (action.type){
  case 'DOG':
    return {...state,dogObj:state}
}
}


function App() {
  const [state,dispatch] = useReducer(reducer,[])
  const [name, setName] = useState('')



  return (
<form>
  <input type={'text'} value={name} onChange={e =>setName(e.target.value)}/>
</form>
  );
}

export default App;
