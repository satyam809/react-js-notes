// Create a component that displays tabs. When a tab is clicked, the corresponding content is displayed.


import React,{useState} from 'react';

const Tab = ()=>{
  const list = ['tab1','tab2','tab3'];
  const [content,setContent] = useState("");
  const showContent = (ele)=>{
     setContent(ele);
  }
  return(
    <>
      <div>
        <div>
           {list.map((ele)=>(
             <li onClick={()=>showContent(ele)}>{ele}</li>
           ))}
        </div>
        <div>
          <p>This is {content} content</p>
        </div>
      </div>
    </>
  )
}
export default Tab;