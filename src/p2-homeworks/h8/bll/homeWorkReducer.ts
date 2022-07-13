import {UserType} from "../HW8";

type ActionsType = SortType | CheckType
type CheckType = {
    type: 'check'
    payload: 18
}
type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'down'
                ? [...state.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)]
                : [...state.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)];
        }
        case 'check': {
            // need to fix
            return state.filter(a => a.age >= action.payload)
        }
        default:
            return state
    }
}