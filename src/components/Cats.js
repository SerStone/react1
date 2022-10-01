import {useAnimalReducer} from "../reducers/reducer";
import {useRef} from "react";
import {CREATE, DELETE} from "../reducers/actions";
import {Cat} from "./Cat";


const Cats = () => {

    const [state, dispatch] = useAnimalReducer()

    const catName = useRef()

    const createCat = () => {
        dispatch({type: CREATE, payload : {name: catName.current.value}})

    }

    const deleteCat = (id) => {
        dispatch({type: DELETE, payload: {id}})

    }

    return(
        <div>
            CatName:     <input type="text" ref={catName}/>
            <button onClick={createCat}>Save</button>
            <div>{state.map((cat, index) => <Cat key={index} cat={cat} deleteCat={deleteCat}/>)}</div>
        </div>
    )

}

export {Cats}