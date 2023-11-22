//Create a component that fetches data from an API and displays it when a button is clicked. *You can use this API link "https://jsonplaceholder.typicode.com/posts/1".

import React, { useState } from "react";

const FetchData = () => {
    const [data, setData] = useState([]);
    const showData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(response)
        const responseData = await response.json();
        console.log(responseData)
        setData(responseData);

    }
    return (
        <>
            <button onClick={showData}>Click</button>

            <table>
                <thead>
                    <th></th>
                    <th>Title</th>
                    <th>Body</th>
                </thead>
                <tbody>
                    {data.map((element, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{element.title}</td>
                            <td>{element.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default FetchData;