import {initialUserState, UsersStateDefinition} from './state'
import {UserActionTypes, UserActions} from './actions'



const userReducer = (state: UsersStateDefinition = initialUserState, action: UserActions) => {
    switch (action.type){
        case UserActionTypes.DELETE_USER:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}

export { userReducer }