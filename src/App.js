import './App.css';
import {useReducer} from "react";
import {useForm} from "react-hook-form";
import {Dogs} from "./components/Dogs";
import Dog from "./components/Dog";
import {Cats} from "./components/Cats";


// const init = (intialValue) => {
//   return {...intialValue,catObj:[],dogObj:[]};
// };
//
// const reducer = (state,action) => {
// switch (action.type) {
//   case 'DOG':
//     state.dogObj.push();
//     return {...state};
//   case 'CAT':
//     state.catObj.push();
//     return {...state};
//   default:
//     return {...state};
// }
// }

function App() {
//
//   const [state,dispatch] = useReducer(reducer, {},init)
//   const {register,handleSubmit,reset} = useForm({mode:"all"})
//
// const formSubmit =(data)=>{
// console.log(data.catInput)
//   };

 return(
<div className={'All'}>

{/*// <form onSubmit={handleSubmit(formSubmit)}>*/}
{/*//   <input type={'text'} name={'cats'} placeholder={'enter'} {...register('dogInput')}/>*/}
{/*//   <button onClick={()=>{*/}
{/*//     dispatch({type:'DOG'})*/}
{/*//   }*/}
{/*//   }>Dogs</button>*/}
{/*//*/}
{/*//   <Dogs state={state} dispatch={dispatch}/>*/}
{/*//   <input type={'text'} placeholder={'enter'} {...register('catInput')}/>*/}
{/*//   <button onClick={()=>{*/}
{/*//     dispatch({type:'CAT'})*/}
{/*//   }*/}
{/*//   }>CAT</button>*/}
{/*// </form>*/}

  <Dogs/>
  <Cats/>

</div>
  );
}

export default App;
