import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function priorityColor(priority: string){
    if (priority === "low"){
        return s.lowOrange
    } else if (priority === "high"){
        return s.highBlue
    } else return s.middlePurple
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affair}>
            <div>{props.affair.name} </div>
            <div className={priorityColor(props.affair.priority)}>[{props.affair.priority}]</div>
            {/*<button className={s.deleteButton} onClick={deleteCallback}>X</button>*/}
            <SuperButton className={s.deleteButton} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
