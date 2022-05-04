import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";


type AffairsPropsType = { // need to fix any
    data: any
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setAll = (): void => {
        props.setFilter('all')
    }; // need to fix
    const setHigh = (): void => {
        props.setFilter('high')
    };
    const setMiddle = (): void => {
        props.setFilter('middle')
    };
    const setLow = (): void => {
        props.setFilter('low')
    };

    return (
        <div>
            {mappedAffairs}


            <div className={s.button}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
