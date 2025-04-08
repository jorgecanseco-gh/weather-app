
import React from "react";

function SearchBar(props) {
 const { location, setLocation, handleSearch } = props;
 return (
    <div>
        <input
        type='text'
        placeholder='Search your location'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />
        <button
        onClick={handleSearch}
        >
        Search
        </button>
    </div>
 )
}

export default SearchBar;
