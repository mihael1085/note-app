import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import {FirebaseContext} from '../context/firebase/firebaseContext'


export const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = (event) => {
        event.preventDefault()

        if(value.trim()) {
            alert.show("Заметка была создана", 'success')
            setValue('')
        } else 
            alert.show("Введите название заметки")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input 
                    className='form-control' 
                    placeholder='введите название заметки'
                    type='text'
                    value={value}
                    onChange={event => setValue(event.target.value)}
                ></input>
            </div>
        </form>
    )
}