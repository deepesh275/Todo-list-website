import React,{useState, useEffect} from 'react'
import "./Input.css"
import List from './List';
import { v4 as uuidv4 } from 'uuid';

function Input() {
    const LOCAL_STORAGE_KEY = "list";
    const [inputValue, setInputValue] = useState('')
    const [list, setList] = useState( JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
    const [filterValue, setfilterValue] = useState("all")

    console.log(inputValue);


    function changeList(inputValue) {
      if (inputValue === "") {
      }else{
        let uniqueid = uuidv4();
        setList([...list,{name:inputValue,id:uniqueid,complete:false}])
        setInputValue("")
      }

      
  }
  console.log(list);

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  function deleteListItem(id) {
    const newList = list.filter((data) => {
    
      return data.id !== id
    } );
    setList(newList)

  }

  function completeListItem(id) {
  
   const newList =  list.map((data) => {
      if (data.id === id && data.complete === false) {
        return {...data,complete:true}
      }else if (data.id === id && data.complete === true) {
        return {...data,complete:false}
      }
      return data
    })
    setList(newList)
  
  }

  function editListItem(id, name) {
    




  }

  function filterList(value) {
    setfilterValue(value)
  
  }

    
  return (
    <div>
        <div className='todo-list'>
            <div className='one'>
            <input  value={inputValue} onChange={(event) => setInputValue(event.target.value)}  className='input-text1' type="text" placeholder='Enter your Activity' /> 
            <button onClick={() => changeList(inputValue)} className='icon'> <i className=' list-icon' class="fa-solid fa-plus "></i> </button>

            </div>
            
            <div className='two'>
            <select className='card-List' onChange={(e)=> filterList(e.target.value)}>
              <option className='option' value='all' > All</option>
              <option className='option' value='completed' >Completed</option>
              <option className='option' value='uncompleted' >Uncompleted</option>

  </select>
            </div>
           
        </div>
        <List list={list} deleteListItem={deleteListItem} completeListItem={completeListItem} filterValue={filterValue}/>
    </div>
    
  )
}

export default Input