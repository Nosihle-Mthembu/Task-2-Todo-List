import { useState } from 'react'

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
    <div style={{
      fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    }}>
    <h1 className="Header"><i>My To do List...</i></h1>

    <form onSubmit={handleSubmit}>
      <label className="items">New Items</label>
      <br></br><input style={{
        height:"20px",
        width:"200px",
      }} value={newItem} onChange={e => setNewItem(e.target.value)} type="text" ></input>
      <button style={{
        height:"30px",
        width:"50px",
        marginLeft:"10px",
    }}>Add</button>
    </form>

    {toDo.length === 0 && "Nothing on the list as yet"}
    {toDo.map(toDo => {
    return ( <div key={toDo.id}>
      <label className="List">
        <input type="checkbox" checked={toDo.completed} onChange={e => done(toDo.id, e.target.checked)}/>
        {toDo.title}
      </label>
      <button onClick={() =>deleteItem(toDo.id)} className="btn" style={{
      fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      marginLeft:"100px",
      height:"30px",
      width:"60px",
    }}>Delete</button>
      </div>
    )
    })}
    </div>
    </>
  )
}

export default App
