import React from 'react'

export const Notes = ({notes, onRemove}) => (
            <ul className='list-group'>
                {
                    notes.map(note => {
                        return (
                            <li 
                                className='list-group-item note' 
                                key={note.id}>
                                <div>
                                    <strong>{note.title}</strong>
                                    &nbsp;
                                    <small>{note.date}</small>
                                </div>

                                <div>
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-primary btn-sm"
                                        >&#9998;
                                    </button>
                                    &nbsp;
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => onRemove(note.id)}
                                        >&times;
                                    </button>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
)