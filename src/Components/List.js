import React from 'react'
import "./List.css"

function List({list, deleteListItem,completeListItem,editListItem, filterValue}) {
  return (
    <div className='main-div'>
        <ul className='list-ul'>
          {list.filter((data) => {
            if (filterValue === "all") {
              return data;
            }
            if (filterValue === "completed") {
              return data.complete === true
            }
            if (filterValue === "uncompleted") {
              return data.complete === false

            }else {
              return data
            }
          }).map((data, index)=> (
            <li key={index} className='list-text'>
            <p className={`${data.complete === true ? "underline" : "" }`}>
              {data.name}
            </p>
          <button onClick={()=> completeListItem(data.id)} className='list-button'>
              <i className="list-icon" class="fa-solid fa-check fa-2x"></i> </button>
          <button onClick={()=> deleteListItem(data.id)} className='list-button'>
              <i className="list-icon" class="fa-solid fa-trash fa-2x"></i>
              
          </button>
          <button onClick={()=> editListItem(data.id, data.name)} className='list-button'>
             Edit
              
          </button>
          </li>
          ))}
   
        </ul>
    </div>
  )
}

export default List