import React from 'react'

export const Form = () => {
    return (
        <form>
            <div className='form-group'>
                <input 
                    className='form-control' 
                    placeholder='введите название заметки'
                    type='text'
                ></input>
            </div>
        </form>
    )
}