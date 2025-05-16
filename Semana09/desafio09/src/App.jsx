import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import TodoApp from './components/TodoApp'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <>
    <Header></Header>

    <TodoApp>

      <TodoList>

        <TodoItem numeroTarea="1" tarea="Crear Front en React"></TodoItem>
        <TodoItem numeroTarea="2" tarea="Backend en Laravel"></TodoItem>
        <TodoItem numeroTarea="3" tarea="APIs con Spring Boot"></TodoItem>
        <TodoItem numeroTarea="4" tarea="Validar con Express"></TodoItem>
        <TodoItem numeroTarea="5" tarea="Centrar con CSS"></TodoItem>
        <TodoItem numeroTarea="6" tarea="Apilar con Bootstrap"></TodoItem>
        <TodoItem numeroTarea="7" tarea="Estructurar con HTML"></TodoItem>
        <TodoItem numeroTarea="8" tarea="Consultar con SQL"></TodoItem>
        <TodoItem numeroTarea="9" tarea="Commitear con GIT"></TodoItem>

      </TodoList>

    </TodoApp>

    <Footer></Footer>
    </>
  )
}

export default App
