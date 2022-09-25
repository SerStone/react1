import {useEffect, useState} from "react"

import css from './Cars.module.css'

import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../services";
import {Car} from "../Car/Car";


const Cars = () => {
const [cars,setCars] = useState([]);
const [carUpdate,setUpdate] =useState(null);

useEffect(()=>{
    carService.getAll().then(({data})=>setCars(data))
},[])
    return (
        <div>
            <CarForm setCars={setCars} carUpdate={carUpdate} setUpdate={setUpdate}/>
            <hr/>
            <div className={css.Cars}>

            {cars.map((car,index)=><Car key={car.id} setCars={setCars} car={car} setUpdate={setUpdate}/>)}
            </div>
        </div>
    );
};

export {Cars};