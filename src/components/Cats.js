import {useReduceAnim} from "../reducers/reducer";

import {useRef} from "react";

import {Add, Del} from "../reducers/actions";

import {Cat} from "./Cat";

const Cats = () => {

    const [state, dispatch] = useReduceAnim();
    const catName = useRef();

    const addCat = (e) => {
        e.preventDefault()
        dispatch({type: Add, payload : {name: catName.current.value}})
    };

    const deleteCat = (id) => {
        dispatch({type: Del, payload: {id}})

    };
    return(
        <div>
            CatName:  <input type="text" ref={catName}/>
            <button onClick={addCat}>Save</button>
            <div className={'animals'}>{state.map(cat=> <Cat key={cat.id} cat={cat} deleteCat={deleteCat}/>)}</div>
        </div>
    )

}
export {Cats}