import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
             setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const stringTime = date?.toLocaleTimeString();
    const stringDate = date?.toLocaleDateString();

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start} className={s.button}>start</SuperButton>
            <SuperButton onClick={stop} className={s.button}>stop</SuperButton>

        </div>
    )
}

export default Clock
