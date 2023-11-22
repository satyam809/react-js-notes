//Create a component that renders a simple form with an input field and a submit button.

import React from 'react'
const SimpleForm = ()=>{
    const getFormData = (event)=>{
        event.preventDefault();
       console.log(event.target.name.value);
    }
    return (
        <>
          <form onSubmit={getFormData}>
            <input type='text' name="name"/>
            <input type="submit" value="Submit"/>
          </form>
        </>
    )
}

export default SimpleForm;