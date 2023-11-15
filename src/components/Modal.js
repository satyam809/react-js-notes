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