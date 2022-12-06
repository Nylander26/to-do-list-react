import React, { useState } from 'react'
import { IoTrashBin } from 'react-icons/io5'
import { GoPencil } from 'react-icons/go'
import { RiSave3Fill } from 'react-icons/ri'
import './tarea.css'

const Tarea = ({ tarea, onDelete, handleUpdate }) => {

    const [editar, setEditar] = useState(false)

    const [completado, setCompletado] = useState(false)

    const EditarActivo = () => {

        const [valor, setValor] = useState(tarea.tarea)

        const handleChange = (e) => {
            setValor(e.target.value)
        }

        const handleClick = (e) => {
            e.preventDefault()

            handleUpdate({
                id: tarea.id,
                tarea: valor,
                completado: false
            })

            setEditar(false)
        }

        return (

            <div className='global-container' data-aos="fade-up" key={tarea.id} >
                <div className='container' >
                    <div>
                        <h4 className='centro'>Modifica tu Tarea</h4>
                        <div className='editor-box'>
                            <input
                                type="text"
                                value={valor}
                                className="editor"
                                onChange={handleChange} />
                            <RiSave3Fill
                                className='pointer-edicion'
                                onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const EditarDesactivado = () => {

        return (
            <>
                <div className={completado ? 'blurry' : 'global-container'} key={tarea.id} >
                    <div className='container' >
                        <div className='title'>
                            <h3>{tarea.tarea}</h3><IoTrashBin onClick={() => onDelete(tarea.id)} /><GoPencil onClick={() => setEditar(true)} className="pointer" />
                        </div>
                        <div className='container-btn'>
                            <button className='btn-active' onClick={() => setCompletado(false)} >Activa</button>
                            <button className='btn-completed' onClick={() => setCompletado(true)}>Completada</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {
                editar ? <EditarActivo /> : <EditarDesactivado />
            }
        </>
    )
}

export default Tarea