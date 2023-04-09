const initState = {
    themeId: 1,
}
type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdType): InitStateType => {
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id })
type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
