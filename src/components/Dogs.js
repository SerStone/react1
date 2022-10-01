import {useAnimalReducer} from "../reducers/reducer";
import {useRef} from "react";
import {CREATE, DELETE} from "../reducers/actions";

import {Dog} from "./Dog";


const Dogs = () => {

    const [state, dispatch] = useAnimalReducer()

    const dogName = useRef()

    const createDog = () => {
        dispatch({type: CREATE, payload : {name: dogName.current.value}})

    }

    const deleteDog = (id) => {
        dispatch({type: DELETE, payload: {id}})

    }

    return(
        <div>
            DogName:   <input type="text" ref={dogName}/>
            <button onClick={createDog}>Save</button>
            <div>{state.map((dog, index) => <Dog key={index} dog={dog} deleteDog={deleteDog}/>)}</div>
        </div>
    )

}

export {Dogs}