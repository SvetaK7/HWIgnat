import React, {ChangeEvent} from 'react'
import s from './SuperDoubleRange.module.css'
import {isDisabled} from "@testing-library/user-event/dist/utils";

type SuperDoubleRangePropsType = {
    // onChangeRange?: (value: number) => void
    // onChangeRange: (value: [number, number]) => void
    value: [number, number]
    onChangeRange: any
    onChangeRange2: (value: number) => void
    // value?: [number, number]
    // min, max, step, disable, ...
}
// type SuperDoubleRangePropsType = {
//     onChangeRange?: (value: [number, number]) => void
//     value?: [number, number]
//     // min, max, step, disable, ...
// }

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, onChangeRange2,

        // min, max, step, disable, ...
    }
) => {
    const minValue = value[0];
    const maxValue = value[1];


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (minValue < maxValue){
            onChangeRange(+e.target.value < maxValue ? +e.target.value : maxValue - 1);
        } else {
            if (+e.target.value < maxValue - 2) {
                onChangeRange(+e.target.value);
            }
        }
    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        if (maxValue > minValue){
            onChangeRange2(+e.target.value > minValue ? +e.target.value : minValue + 1)
        } else {
            if(+e.target.value > minValue + 2){
                onChangeRange2(+e.target.value)
            }
        }
    }

    // сделать самому, можно подключать библиотеки

    return (
        <div className={s.inputs}>
            <div className={s.input1}>
                <input
                    type={'range'}
                    onChange={onChangeCallback2}
                    value={value[1]}
                />
            </div>
            <div className={s.input2}>
                <input
                    type={'range'}
                    onChange={onChangeCallback}
                    value={value[0]}
                />
            </div>

        </div>
    )
}

export default SuperDoubleRange
