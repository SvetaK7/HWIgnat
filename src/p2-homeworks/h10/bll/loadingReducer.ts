export type isLoadingType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): isLoadingType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {isLoading: action.payload}
        }
        default: return state
    }
}
type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (loading: boolean): any => {
    return {
        type: 'LOADING', payload: loading
    } as const
} // fix any