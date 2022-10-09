import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import css from './CarForm.module.css'
import {carActions} from "../../redux";

const CarForm = () => {
    const {carUpdate} = useSelector(state => state.carReducer)

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

    const dispatch = useDispatch();

    const submit = async (car) =>{
            if (carUpdate){
               dispatch(carActions.updateById({id:carUpdate.id, car}))
            }
            else {
               dispatch(carActions.create({car}))
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