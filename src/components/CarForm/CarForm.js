import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";

import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars,updateCar}) => {
    const {register,handleSubmit,reset,formState:{isValid,errors},setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:'all'});

    const {id,model,price,year} = updateCar

    const submit = async (car) =>{
        if (id){
            const {data} = await carService.updateById(id,car);
            setCars(cars =>[...cars,data])
        }
        else {

            const {data} = await carService.create(car);
            setCars(cars =>[...cars,data])
            reset()
        }
    };

    useEffect(()=>{
        setValue('model',model);
        setValue('price',price);
        setValue('year',year);
    },[id])



    return (
        <form onSubmit={handleSubmit(submit)} onChange={()=>console.log(errors)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model&&<span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            {errors.year&&<span>{errors.year.message}</span>}

            <button disabled={!isValid}>{id ?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};