import React, { useState } from 'react'

import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState("")

  const validForm = () => {
    let isValid = true
    setError("")
    if(isEmpty(task)){
      setError("Debe ingresar una tarea")
      isValid = false
    }
    return isValid
  }

  const addTask = (e) => {
    e.preventDefault()
    
    if(!validForm()){ return }

    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  const saveTask = (e) => {
    e.preventDefault()

    if(!validForm()){ return }

    setTasks(tasks => tasks.map(valor => {
      if(valor.id === id){
        valor.name = task;
      }
      return valor;
    }))
    
    setEditMode(false)
    setTask("")
    setId("")
  }

  const deleteTask = (id) => {
    const filterTasks = tasks.filter(task => task.id !== id)
    setTasks(filterTasks)
    setTask("")
    setId("")
    setEditMode(false)
  }

  const editTask = (task) => {
    setEditMode(true)
    setTask(task.name)
    setId(task.id)
  }

  return (
    <div className="container mt-5">
      <h2>Tareas</h2>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lita de tareas</h4>
          {
            tasks.length > 0 ? 
            (
              <ul className="list-group">
                {
                  tasks.map((task, index) => (
                    <li className="list-group-item" key={task.id}>
                      <span className="lead">{task.name}</span>
                      <button 
                        className="btn btn-danger btn-sm float-right mx-2"
                        onClick={() => deleteTask(task.id)}
                      >
                        Eliminar
                      </button>
                      <button 
                        className="btn btn-warning btn-sm float-right"
                        onClick={() => editTask(task)}
                      >
                        Editar
                      </button>
                    </li>
                  ))
                }
              </ul>
            ) 
            : 
            (
              <li className="list-group-item">Aun no hay tareas pendientes</li>
            )
          }
        </div>
        <div className="col-4">
          <h4 className="text-center">{editMode ? "Modificar tarea" : "Agregar tarea"}</h4>
          {
            error && (<span className="text-danger">{error}</span>)
          }
          <form onSubmit={editMode ? saveTask : addTask}>
            <input 
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la tarea..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button 
              type="submit"
              className={editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"}
            >
              {editMode ? "Guardar" : "Agregar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
