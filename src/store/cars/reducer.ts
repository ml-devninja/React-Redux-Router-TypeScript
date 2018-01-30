import {initialCarsSate, CarsStateDefinition} from './state'
import {CarsActions, CarsActionTypes} from './actions'



const carsReducer = (state: CarsStateDefinition = initialCarsSate, action: CarsActions) => {
    switch (action.type){
        case CarsActionTypes.DELETE_CAR:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }

        case CarsActionTypes.ADD_NEW_CAR:
            console.log( state, action.payload.carData);

            return {
                ...state,
                items: [...state.items, action.payload.carData ]
            }

        default:
            return state
    }
}

export { carsReducer }