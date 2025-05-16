import React from 'react'


export default function TodoItem({numeroTarea, tarea}) {
    return (
           <li className="todo-item col-lg-4 col-md-12 p-5"><p><span className="fw-bold d-block">{numeroTarea}</span>{tarea}</p></li>
    )
}