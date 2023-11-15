import React, { useState } from "react";

const Dropdown = () => {
    const [country, setCountry] = useState('');
    return (
        <>
            <select onChange={(e) => setCountry(e.target.value)}>
                <option>Select option</option>
                <option value="India">India</option>
                <option value="China">China</option>
            </select>
            <p>{country}</p>
        </>
    )
}
export default Dropdown;