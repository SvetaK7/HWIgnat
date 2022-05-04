import React from 'react'
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}
function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={s.areaBackground}>
                <div className={s.ava}>
                    <img src = {props.avatar}></img>
                </div>
                <div className = {s.areaMessage}>
                    <div>
                        <p>{props.name}</p>
                        <span>{props.message}</span>
                    </div>
                    <div className = {s.time}>{props.time}</div>

                </div>
            </div>
        </div>
    )
}

export default Message
