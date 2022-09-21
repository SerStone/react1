import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";

import {carService} from "../../services";

import css from './CarForm.module.css'

import {useEffect} from "react";



const CarForm = ({setCars,carUpdate}) => {
    const {register,handleSubmit,reset,formState:{isValid,errors},setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:'all'});

    const {id,model,price,year} = carUpdate

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

    },[id, model, price, setValue, year])


    return (
        <form className={css.CarForm} onSubmit={handleSubmit(submit)} onChange={()=>console.log(errors)}>
            <input className={css.inputed} type="text" placeholder={'model'} {...register('model')}/>
            {errors.model&&<span>{errors.model.message}</span>}
            <input className={css.inputed} type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input className={css.inputed} type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid}>{id ?'Modify':'Save'}</button>
        </form>
    );
};

export {CarForm};