import {useEffect, useState} from "react"

import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {
const [cars,setCars] = useState([]);
const [carUpdate,setUpdate] =useState([]);

useEffect(()=>{
    carService.getAll().then(({data})=>setCars(data))
},[])
    return (
        <div>
<CarForm setCars={setCars}/>
<hr/>
            {cars.map(car=><Car key={car.id} car={car} setUpdate={setUpdate}/>)}
        </div>
    );
};

export {Cars};