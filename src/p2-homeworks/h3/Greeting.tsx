import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.normal // need to fix with (?:)

    return (
        <div>
            {/*<input onKeyDown={onKeyDown} value={name} onChange={setNameCallback} className={inputClass}/>*/}
            <SuperInputText onKeyDown={onEnter} value={name} onChange={setNameCallback} className={inputClass}/>
            {/*<button onClick={addUser} disabled={name === ''} className={s.button}>add</button>*/}
            <SuperButton onClick={addUser} disabled={name === ''} className={s.button}>add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
            <div className={s.errorText}>{error}</div>
        </div>
    )
}

export default Greeting
