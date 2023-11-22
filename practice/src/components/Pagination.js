//Create a component that displays a list of items with pagination controls.


import React, {useState} from 'react';

const Pagination = () => {
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8','item9','item10','item11', 'item12', 'item13', 'item14', 'item15', 'item16', 'item17', 'item18','item19','item20'];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length/itemsPerPage);
  const pageNo = [];
  for(let i = 1; i <= totalPages; i++){
    pageNo.push(i);
  }
  const [currentItems,setCurrentItems] = useState(items.slice(0,itemsPerPage));

  const [button, setButton] = useState(0);
  
  const handlePreviousPage = ()=>{
    setCurrentItems(items.slice(button,button + itemsPerPage));
    setButton(button + itemsPerPage)
  }
  const handleNextPage = ()=>{
    setCurrentItems(items.slice(button,button + itemsPerPage));
    setButton(button + itemsPerPage)
  }
  const pageItems = (pageNo)=>{
     setCurrentItems(items.slice((pageNo - 1) * itemsPerPage, (pageNo - 1) * itemsPerPage + itemsPerPage));
  }

  return (
    <>
      <div>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={handlePreviousPage}>Previous</button>
         {
          pageNo.map((page)=>(
            <button onClick={()=>pageItems(page)}>{page}</button>
          ))
         }
        <button onClick={handleNextPage}>Next</button>
      </div>
    </>
  )
}

export default Pagination;
