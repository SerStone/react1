import css from './Car.module.css'

import {carService} from "../../services";



const Car = ({car,setCars,setUpdate}) => {
    const {id,model,price,year}=car;

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        setCars(cars => {
            const carId = cars.findIndex(value => value.id === id);
            cars.splice(carId, 1)
            return [...cars]
        })
    }

    const updateCar = ()=>{
        setUpdate(car);
    }

    return (
        <div className={css.Car}>
            <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            </div>
            <div className={css.tools}>
                <button onClick={() => updateCar()}>Update</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
};

export {Car};