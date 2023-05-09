import React from 'react'
import up from '../img/up.svg'
import down from '../img/down.svg'
import s from './SuperSort.module.css'

const downIcon = down;
const upIcon = up;
const noneIcon = 'down & up'

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === '') return down
  if (sort === down) return up
  if (sort === up) return ''
  return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {
    sort, value, onChange, id = 'hw15',
  }
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
    ? downIcon
    : sort === up
      ? upIcon
      : noneIcon

  const iconSort = icon === noneIcon
    ? <span className={s.icon}>
      <img id={id + '-icon-' + sort} src={upIcon}/>
      <img id={id + '-icon-' + sort} src={downIcon}/>
    </span>
    : <span className={s.icon}><img id={id + '-icon-' + sort} src={icon}/></span>

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
      {iconSort}
    </span>
  )
}

export default SuperSort
