import { useState } from "react"


function App() {
  const [newItem, setNewItem] = useState("")
  const [toDo,setToDo] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setToDo (currentToDo => {
      return [...currentToDo, {id: crypto.randomUUID(), title:newItem, completed:false},
    ]
    })

    setNewItem("")
  }

  function done(id, completed){
    setToDo(currentToDo =>{
      return currentToDo.map(toDo =>{
        if(toDo.id === id){
          return { ...toDo, completed}
        }
        return toDo
      })
    })
  }

function deleteItem(id){
  setToDo(currentToDo => {
    return currentToDo.filter(toDo => toDo.id !== id)
  })
}

  return (
    <>
    <h1 className="Header">My To do List</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="items">New Items</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" ></input>
      <button>Add</button>
    </form>
    {toDo.length === 0 && "Nothing on the list as yet"}
    {toDo.map(toDo => {
    return ( <div key={toDo.id}>
      <label className="List">
        <input type="checkbox" checked={toDo.completed} onChange={e => done(toDo.id, e.target.checked)}/>
        {toDo.title}
      </label>
      <button onClick={() =>deleteItem(toDo.id)} className="btn">Delete</button>
      </div>
    )
    })}
    </>
  )
}

export default App
