import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {
  const [notes, setnotes] = useState([])

  //   {
  //     title:"title 1",
  //     description:"description 1"
  //   },

  //     {
  //     title:"title 2",
  //     description:"description 2"
  //   },
  //     {
  //     title:"title 3",
  //     description:"description 3"
  //   },
  // ])
  console.log("Hello shravani ")
  function fetchdata(){
      axios.get('https://frontent-bakcend-integration.onrender.com/notes/api').then((res)=>{
    setnotes(res.data.notes)
  })
    
  }
  useEffect(()=>{
    fetchdata()

  },[])

  function handlesubmit(e){
    e.preventDefault()

    const {title,description} =e.target.elements
    console.log(title.value,description.value)

    axios.post('https://frontent-bakcend-integration.onrender.com/notes/api',{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data)

      fetchdata()
    })
  }



  function handleDeletenote(noteId){
    axios.delete('https://frontent-bakcend-integration.onrender.com/notes/api/'+noteId,{
      
    })
    .then(res=>{
      console.log(res.data)

      fetchdata()
    })
  }


    
  function handleUpdatenote(noteId,){
    const newDesc=prompt("Enter the new description")

    axios.patch(`https://frontent-bakcend-integration.onrender.com/notes/api/${noteId}`,{
      description:newDesc
    })

    .then(res=>{
      console.log(res.data)
      fetchdata()
    })
  } 


  return (
  <>
  <form className='notes-create' onSubmit={handlesubmit}>
    <input name='title' type='text' placeholder='enter title'/>
    <input name='description' type='text' placeholder='enter description'/>
    <button>create notes</button>

  </form>
<div className="notes">
  {
    notes.map(note=>{
      return <div className="note">
    
    <h1>{note.title}</h1>
    <p>{note.description}</p>
    <button onClick={()=>{handleDeletenote(note._id)}}>delete</button>
    <button onClick={()=>{handleUpdatenote(note._id,note.description)}}>Update</button>
  </div>
    })
  }
 
</div>
  </>
  )
}

export default App