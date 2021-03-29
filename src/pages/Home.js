import React, { Fragment } from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'

export const Home = () => {

    // const notes = [
    //     {id: 0, title: 'купить хлеб'},
    //     {id: 1, title: 'позвонить на работу'},
    //     {id: 2, title: 'проготовить ужин'}
    // ]

    const notes = new Array(3)
        .fill('')
        .map((_, i) => ({id: i, title:`заметка номер ${i+1}`}))

    return (
        <Fragment>
            <Form />
            <Notes notes = {notes}/>
        </Fragment>
    )
}