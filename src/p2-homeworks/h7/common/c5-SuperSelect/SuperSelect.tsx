import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'



type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions =options ? options?.map((el, i) => <option key={i}>{el}</option>) : []; // map options with key
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        //e.target.value
         if (onChangeOption){
             onChangeOption(e.currentTarget.value)
         }
    }
    const selectStyle = {
        padding: 5,
        width: 100,
        color: 'yellow',
        background: 'green'
    }

    return (
        <select style={selectStyle}  onChange={onChangeCallback} {...restProps}>
            {mappedOptions }
        </select>
    )
}

export default SuperSelect
