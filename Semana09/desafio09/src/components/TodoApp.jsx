import React from 'react'

export default function TodoApp(props) {
    return (
        <main className="container"> 
           <h2 className="pt-5 pb-3 text-center">Bienvenidos a la ToDo APP</h2>
            
            {/* Acá va la lista todolist */}
            {props.children}


        </main>
    )
}