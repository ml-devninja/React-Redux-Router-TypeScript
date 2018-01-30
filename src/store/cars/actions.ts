import {Action} from 'redux'
import { CarEntry } from './state'

enum CarsActionTypes {
    DELETE_CAR = 'DELETE_CAR',
    ADD_NEW_CAR = 'ADD_NEW_CAR'
}

interface CarsActions extends Action {
    payload?: any
}

function removeCar( id: number ): CarsActions {
    return {
        type: CarsActionTypes.DELETE_CAR,
        payload: {id}
    }
}
function addCar( carData: CarEntry ): CarsActions {
    return {
        type: CarsActionTypes.ADD_NEW_CAR,
        payload: {carData}
    }
}

export {CarsActionTypes, CarsActions, removeCar, addCar}