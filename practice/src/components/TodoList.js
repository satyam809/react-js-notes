//Create a component that allows users to add and remove items from a todo list.


import React, { useState } from 'react';

const TodoList = () => {
    const [item, setItem] = useState('');
    const [data, setData] = useState([]);
    const addItem = () => {
        setData([...data, item]);
        setItem('');
    }
    const removeItem = (index) => {
        //alert(index);
        const updateData = [...data]
        updateData.splice(index, 1);
        setData(updateData)
    }

    return (
        <>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={addItem}>Add</button>
            <ul>
                {data.map((value,index) => (
                    <li>{value} <button onClick={() => removeItem(index)}>Remove</button></li>
                    
            ))}
            </ul>
        </>
    )
}
export default TodoList;