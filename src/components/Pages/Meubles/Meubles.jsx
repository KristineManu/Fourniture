import React, { useState } from 'react'
import './meubles.css'
import Items from '../Items/Items'






const Meubles = () => {
    const [selectedValue, setSelectedValue] = useState('');

    // Handler function to update the state when the dropdown value changes
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div >
            <h1>Meubles</h1>
            <select id="dropdown" value={selectedValue} onChange={handleChange}>
                <option value="">All</option>
                <option value="canapé">Canapé</option>
                <option value="meubles">Meubles</option>
                <option value="table_basse">Table basse</option>
            </select>
            <Items category={selectedValue} />

        </div>



    )
}
export default Meubles
