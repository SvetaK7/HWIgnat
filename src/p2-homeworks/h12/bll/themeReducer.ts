export type initStateType= {
    themes: string[]
    activeTheme: string
}

const initState = {
    themes: ['dark', 'red', 'green', 'blue'],
    activeTheme: 'green',
};

export const themeReducer = (state = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE THEME": {
            return {...state, activeTheme: action.payload};
        }
        default:
            return state;
    }
};

//type changeThemeCType = ReturnType<typeof changeThemeC>
type changeThemeCType = {type: string, payload: string};

export const changeThemeC = (activeTheme: string):changeThemeCType => {
    return {
        type: 'CHANGE THEME', payload: activeTheme
    } as const
};