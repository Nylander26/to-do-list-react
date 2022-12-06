import React from 'react';
import './toDo.css'

export const ToDo = ({ tarea, handleSubmit, handleChange }) => {

    return (
        <div>
            <div className='upper-title' data-aos="fade-up">
                <form className='upper-title-form' onSubmit={handleSubmit}>
                    <h3>Agregue una Tarea:</h3>
                    <div className='upper-title-input'>
                        <input
                            type="text"
                            placeholder='Title'
                            onChange={handleChange}
                            value={tarea}
                        />
                        <button
                            type="submit"
                            className='btn-submit'
                            onClick={handleSubmit}>+</button>
                    </div>
                </form>
            </div>
        </div>
    )
}