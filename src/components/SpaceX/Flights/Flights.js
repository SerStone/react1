import {getUsersAxios} from "../../../services/spacex.api.axios.service";
import Flight from "../Flight/Flight";
import './flights-style.css'

import {useEffect, useState} from "react";

export default function Flights(){

    let [flight,setUsers] = useState([]);



    useEffect(()=>{
        getUsersAxios().then(value => setUsers(value.data))
        },[]);

    return(
        <div className={'flightsAll'}>

            <div className={'flight-board'}><h1>Flight-Board</h1></div>
        <div className={'flights'}>
            {flight.filter(({launch_year})=>launch_year!=='2020').map((flight,index) => <Flight flight={flight} key={index}/>)}
        </div>
        </div>
    )
}

