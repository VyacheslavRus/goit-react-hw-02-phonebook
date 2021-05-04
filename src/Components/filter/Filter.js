import React from 'react'

const Filter = ({ filter, setFilter }) => {
    return (
        <div>
            <label>
                <h3>Find contacts by name</h3>
                <input className="filterInput"
                    type="text"
                    value={filter}
                    onChange={setFilter}
                    placeholder="fiend me?"
                />
            </label>
        </div>
    );
}

export default Filter;