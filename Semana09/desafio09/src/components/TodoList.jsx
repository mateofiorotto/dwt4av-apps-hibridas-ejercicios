import React from 'react'

export default function TodoList(props) {
    return (
            <ul className='pt-5 pb-5 list-unstyled todo-list row justify-content-center align-items-center text-center'>
                {props.children}
            </ul>
    )
}