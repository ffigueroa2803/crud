import React, { useState } from 'react'

import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if(isEmpty(task)){
      return
    }
    const newTask = {
      id: shortid.generate(),
      name: task
    }
    setTasks([...tasks, newTask])
    setTask("")
    console.log(tasks)
  }

  return (
    <div className="container mt-5">
      <h2>Tareas</h2>
      <hr />
      <div className="row">
        <div className="col-8">
          <div className="text-center">Lita de tareas</div>
          <ul className="list-group">
            {
              tasks.map((task, index) => (
                <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.name}</span>
                  <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                  <button className="btn btn-warning btn-sm float-right">Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <div className="text-center">Formulario</div>
          <form onSubmit={addTask}>
            <input 
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la tarea..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button 
              type="submit"
              className="btn btn-dark btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
