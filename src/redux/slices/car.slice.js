import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    loading:false,
    error:null,
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch(e)
        {
          return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id,car},{rejectWithValue,dispatch}) => {
        try {
            const {data} = await carService.updateById(id,car);
            dispatch(updateProps(null))
            return data
        } catch(e)
        {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id},{rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return id
        } catch(e)
        {
            return rejectWithValue(e.response.data)
        }
    }
);
const create = createAsyncThunk(
    'carSlice/create',
    async ({car},{rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch(e)
        {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        updateProps:(state, action)=>{
            state.carUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(create.fulfilled,(state, action) => {
                state.cars =[...state.cars,action.payload]
            })
            .addCase(getAll.fulfilled, (state, {payload}) => {
                state.cars = payload
                state.loading =false
            })
            .addCase(getAll.rejected,(state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending,(state, action) => {
                state.loading = true
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car=>car.id ===action.payload.id);
               state.cars[index]=action.payload
            })
            .addCase(deleteById.fulfilled,(state, action)=>{
                const index = state.cars.findIndex(car=>car.id ===action.payload);
                if(index!==-1) state.cars.splice(index, 1)
            })
});

const {reducer:carReducer,actions:{updateProps}} = carSlice;

const carActions={
    getAll,
    deleteById,
    create,
    updateById,
    updateProps
}

export {
    carReducer,
    carActions
}