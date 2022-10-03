import {Add, Del} from "./actions";

import {useReducer} from "react";


const reducer = (state, action) => {

    switch (action.type) {
        case Add :
            const tmp = {
                name: action.payload.name,
                id: new Date().getTime()
            }
            return [...state, tmp]
        case Del :
            const id = state.findIndex(value => value.id === action.payload.id)
            if(id!==-1){
                state.splice(id,1)
            }
            return [...state]
    }
}
const useReduceAnim = () => useReducer(reducer, []);


export {useReduceAnim};