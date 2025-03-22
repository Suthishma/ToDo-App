import { useState } from 'react'
import './ToDo.css'
const ToDo = () =>{

    const [array,setArray] = useState([])
    const [input,setInput] = useState("")

    const addTask = () =>{
        /*setArray([...array,input])*/
        setArray([...array, { text: input, finished: false }]); // Store tasks as objects
        setInput("");
    }

    const deleteTask = (indexToDelete) =>{
        const updatedData = array.filter((_,index)=> index!== indexToDelete)
        setArray(updatedData)
    }


    const taskFinished = (index) =>{
        const updatedArray = array.map((task, i) =>
            i === index ? { ...task, finished: !task.finished } : task
          );
          setArray(updatedArray);
        

    }

    

    return(
        <div className='todo-app'>
            <div className="heading">
                <h1>ToDo App!</h1>
            </div>
            <div className="input-box">
                 <input type="text" placeholder=" " value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                 <label>Add ToDo</label>
                 <button className="btn" onClick={addTask}><i className="fa-solid fa-plus"></i>Add</button>
            </div>
            <div className="content">
                {
                        array.map((task,index)=>{
                            return(
                                
                <div className={`todo-box ${task.finished ? 'task-completed' : 'task-active'}` } key={index} >
                    <p>{task.text}</p>
                    
                    <div className="buttons">

                    <button className='btn delete' onClick={()=>deleteTask(index)}><i class="fa-solid fa-trash"></i>Delete</button>
                    <button className='btn finish' onClick={()=> taskFinished(index)}><i class="fa-solid fa-check"></i>Finish</button>
                    </div>
                </div>
                            )
                        })
                    }
            </div>
         
        </div>
    )
}
export default ToDo

