import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";

import css from './Cars.module.css'
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {carActions} from "../../redux";


const Cars = () => {
const {cars,error,loading} = useSelector(state => state.carReducer);
const state = useSelector(state=>state)
    console.log(state);
    const dispatch = useDispatch();



useEffect(()=>{
    dispatch(carActions.getAll())
},[dispatch])
    return (
        <div>
            <div className={css.menu}>
            <CarForm/>
            <hr/>
            </div>
            <div className={css.Cars}>

                {loading&&<h1>Load</h1>}
                {error&&<h1>Error</h1>}
            {cars.map(car=><Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};