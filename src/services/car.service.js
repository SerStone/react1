import {axiosService} from "./axios.service";

import {urls} from "../configs";


const carService = {
    getAll:(car)=>axiosService.get(urls.cars, car),
    create:(id)=>axiosService.post(`${urls.cars}/${id}`),
    updateById:(id)=>axiosService.put(`${urls.cars}/${id}`),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}