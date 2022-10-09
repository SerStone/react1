import css from './Car.module.css'
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {

    const dispatch = useDispatch();
    const {id,model,price,year}=car;

    return (
        <div className={css.Car}>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>

            <div className={css.tools}>
         <button onClick={()=>dispatch(carActions.updateProps(car))}>Update</button>
         <button onClick={()=>dispatch(carActions.deleteById({id:car.id}))}>Delete</button>
            </div>

        </div>
    );
};

export {Car};