import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options ? options?.map((el, i) => <option className={s.option} key={i}>{el}</option>) : []; // map options with key
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value)

    }
    // const selectStyle = {
    //     padding: 5,
    //     width: 100,
    //     color: 'yellow',
    //     background: 'green'
    // }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
