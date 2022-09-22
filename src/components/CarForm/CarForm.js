import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";

import {carService} from "../../services";

import css from './CarForm.module.css'

import {useEffect} from "react";



const CarForm = ({setCars,carUpdate,setUpdate}) => {
    const {register,handleSubmit,reset,formState:{isValid,errors},setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:'all'});


        useEffect(()=>{
            if (carUpdate){
            setValue('model',carUpdate.model,{shouldValidate:true});
            setValue('price',carUpdate.price,{shouldValidate:true});
            setValue('year',carUpdate.year,{shouldValidate:true});
            }


        },[carUpdate,setValue])

        const submit = async (car) =>{
            if (carUpdate){
                const {data} = await carService.updateById(carUpdate.id,car);
                setCars(cars =>{
                            const finder = cars.find(value=>value.id === carUpdate.id);
                            Object.assign(finder,data);
                            setUpdate(null)
                            return [...cars]
                        })
            }
            else {
                const {data} = await carService.create(car);
                setCars(cars =>[...cars,data])
            }
                reset()
        };

    return (
        <form className={css.CarForm} onSubmit={handleSubmit(submit)} onChange={()=>console.log(errors)}>
            <input className={css.inputed} type="text" placeholder={'model'} {...register('model')}/>
            {errors.model&&<span>{errors.model.message}</span>}
            <input className={css.inputed} type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input className={css.inputed} type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carUpdate?'Modify':'Save'}</button>

        </form>

    );
};

export {CarForm};