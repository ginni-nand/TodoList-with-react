 import React, { useState } from 'react';
 import Todolist from './Todolist.jsx';
 const App=()=>
 {
     const [inputlist,setinputlist]=useState("");
     const [items,setitems]=useState([]);
     const itemevent=(event)=>
     {
        setinputlist(event.target.value);

     };
     const listofitems=()=>
     {
       setitems((prev)=>
       {
          return [...prev,inputlist] ;
       });
       setinputlist("");
     };

     const deleteItems =(id)=>
     {
        setitems((prev)=>
        {
            return prev.filter((arrele,index)=>
            {
               return index!==id ;
            });
        });
     };
     return (
          <>
             <div className="main-div">
                 <div className="center-div">
                   <br/>
                   <h1>ToDo List</h1>
                   <br/>
                   <input type="text"  placeholder="Add Items" value={inputlist} onChange={itemevent}/>
                   <button onClick={listofitems}>+</button>
                   <ol>
                      {/*<li>{inputlist}</li>;*/}
                      {items.map((itemval,index)=>
                      {
                        return <Todolist 
                        key={index}
                        id={index}
                         text={itemval}
                            onSelect={deleteItems} 
                         />;
                      })
                      }
                   </ol>
                 </div>
             </div>
          </>
     );
 };
 export default App;