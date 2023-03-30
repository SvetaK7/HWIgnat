import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

export const pureAddUser = (
  name: string,
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void) => {
  if (!name || name.trim() === '') {
    setError('Ошибка! Введите имя!')
  } else {
    setName(name);
    addUserCallback(name);
    setName('')
  }
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
  if (!name || name.trim() === '') {
    setError('Ошибка! Введите имя!')
  }
}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
  if (e.key === 'Enter') {
    addUser();
  }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                   users,
                                                                   addUserCallback,
                                                                 }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    if (e.currentTarget.value === '') {
      setError('Ошибка! Введите имя!')
    } else {
      setName(e.currentTarget.value) // need to fix
      error && setError('')
    }

  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: ChangeEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser)
  }
  const totalUsers = users.length
  const lastUserName = users.length ? users[totalUsers - 1].name : ''

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
