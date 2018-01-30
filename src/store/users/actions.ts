import {Action} from 'redux'

enum UserActionTypes {
    DELETE_USER = 'DELETE_USER'
}

interface UserActions extends Action {
    payload?: any
}

function removeUser( id: number ): UserActions {
    return {
        type: UserActionTypes.DELETE_USER,
        payload: {id}
    }
}

export {UserActionTypes, UserActions, removeUser}