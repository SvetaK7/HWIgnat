import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type AffairsPropsType = { // need to fix any
    data: any
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
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
    //одна функция, добавить ее в button и value добавить(all,high...)
    // const set = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     props.setFilter(e.currentTarget.value as FilterType)
    // }
    const setClass = (filter: FilterType) => {
        return (props.filter === filter ? s.active : '')
    }
    return (
        <div>
            {mappedAffairs}


            <div className={s.button}>
                {/*<button onClick={setAll} className={setClass('all')}>All</button>*/}
                <SuperButton onClick={setAll} className={setClass('all')}>All</SuperButton>
                {/*<button onClick={setHigh} className={setClass('high')}>High</button>*/}
                <SuperButton onClick={setHigh} className={setClass('high')}>High</SuperButton>
                {/*<button onClick={setMiddle} className={setClass('middle')}>Middle</button>*/}
                <SuperButton onClick={setMiddle} className={setClass('middle')}>Middle</SuperButton>
                {/*<button onClick={setLow} className={setClass('low')}>Low</button>*/}
                <SuperButton onClick={setLow} className={setClass('low')}>Low</SuperButton>
            </div>

        </div>
    )
}

export default Affairs
