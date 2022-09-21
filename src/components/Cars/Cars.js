import {useEffect, useState} from "react"

import {CarForm} from "../CarForm/CarForm";

import {carService} from "../../services";

import {Car} from "../Car/Car";



const Cars = () => {
const [cars,setCars] = useState([]);
const [carUpdate,setUpdate] =useState([]);

useEffect(()=>{
    carService.getAll().then(({data})=>setCars(data))
},[cars])
    return (
        <div>
            <CarForm setCars={setCars} carUpdate={carUpdate}/>
            <hr/>
            {cars.map((car,index)=><Car key={index} setCars={setCars} car={car} setUpdate={setUpdate}/>)}
        </div>
    );
};

export {Cars};