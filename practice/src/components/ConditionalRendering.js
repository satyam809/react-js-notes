//Create a component that conditionally renders "Hello, User!" if a user prop is provided, otherwise, it renders "Hello, Guest!".

import React from 'react';

const ConditionalRendering = (user)=>{
    return (
        <>
           <p>Hello, {user ? 'User!' : 'Guest'}</p>
        </>
    )
}
export default ConditionalRendering;