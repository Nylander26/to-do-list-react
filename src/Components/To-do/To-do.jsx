import React, { useState } from 'react';
import './toDo.css'
import { IoTrashBin } from 'react-icons/io5'

export const ToDo = () => {

    const { list, setList } = useState([]);
    const { input, setInput } = useState("");

    const add = (todo) => {
        const newTodo = {
            id: Math.random(),
            // todo: todo,
        }

        setList([...list, newTodo]);

        setInput = "";
    }

    return (
        <div>
            <div>
                <br />
                <div className='upper-title'>
                    <form className='upper-title-form'>
                        <h3>Agregue una Tarea:</h3>
                        <div className='upper-title-input'>
                            <input
                                type="text"
                                placeholder='Title'
                                name="title"
                                id="titleid"
                                value={input}
                                onChange={(e) => setInput(e.target.value)} />
                            <button
                                type="submit"
                                className='btn-submit'
                                onClick={() => add(input)} >+</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container'>
                <div className='title'>
                    <h3>Titulo</h3><IoTrashBin />
                </div>
                <div>
                    <form className='form-title'>
                        <input type="text" placeholder='Title' name="title" id="titleid" />
                        <button type="submit" className='btn-submit'>+</button>
                    </form>
                </div>
                <div className='container-checkbox'>
                    <div className='item-checkbox'>
                        <input type="checkbox" name="" id="" />Milk<IoTrashBin />
                    </div>
                    <div className='item-checkbox'>
                        <input type="checkbox" name="" id="" />Meat<IoTrashBin />
                    </div>
                </div>
                <div className='container-btn'>
                    <button className='btn-all'>All</button>
                    <button className='btn-active'>Active</button>
                    <button className='btn-completed'>Completed</button>
                </div>

            </div>
        </div>

    )
}