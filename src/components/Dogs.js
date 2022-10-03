import {useReduceAnim} from "../reducers/reducer";

import {useRef} from "react";

import {Add, Del} from "../reducers/actions";

import {Dog} from "./Dog";


const Dogs = () => {

    const [state, dispatch] = useReduceAnim();
    const dogName = useRef();

    const addDog = (e) => {
        e.preventDefault()
        dispatch({type: Add, payload : {name: dogName.current.value}})

    }

    const deleteDog = (id) => {
        dispatch({type: Del, payload: {id}})

    }
    return(
        <div>
            <form>
            DogName:<input type="text" ref={dogName}/>
            <button type={"submit"}
                    onClick={addDog}>Save</button></form>
            <div  className={'animals'}>{state.map(dog => <Dog key={dog.id} dog={dog} deleteDog={deleteDog}/>)}</div>
        </div>
    )

}

export {Dogs}