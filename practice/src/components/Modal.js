
//Create a component that displays a modal when a button is clicked. The modal should have an overlay and a close button.


import React, {useState} from 'react'

const Modal = ()=>{
  const[show, setShow] = useState(false);
  const textArea = ()=>{
    setShow(true);
  }
  const hideMessage = ()=>{
    setShow(false);
  }
  return (
    <>
     <button onClick={textArea}>Show</button>
     {show && (
        <div>
        <textarea>Message</textarea>
        <button onClick={hideMessage}>Close</button>
        </div>
     )}
    </>
  )
}
export default Modal;