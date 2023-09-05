// import { useState, useEffect } from "react";
// import AccuWeather from "./AccuWeather";
// import ParkSearch from "./ParkSearch";

// const Search = () => {
//   const [searchInput, setSearchInput] = useState("");

//   const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();

//     fetchParkSearchData(searchInput);
//     fetchAccuWeatherData(searchInput);
//   };

//   const handleClearClick = () => {
//     setSearchInput("");
//   };

//   return (
//     <section id="parent-search-section" className="parent-search">
//       <div className="parentComponentContainer">
//         <form onSubmit={handleSearchSubmit}>
//           <input
//             type="text"
//             value={searchInput}
//             onChange={handleSearchInputChange}
//             placeholder="Park Input..."
//           />

//           <button onClick={handleClearClick}>Clear</button>{" "}

//         </form>

//         <ParkSearch searchTerm={searchInput} />
//         <AccuWeather searchLocation={searchInput} />
//       </div>
//     </section>
//   );
// };

// export default Search;

import React, { useState } from 'react';
import AccuWeather from './AccuWeather';
import ParkSearch from './ParkSearch';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        setFormSubmitted(true);
    };

    const handleClearClick = () => {
        setSearchInput('');
        setFormSubmitted(false);
    };

    return (
        <section
            id="parent-search-section"
            className="parent-search parkSearchContainer"
        >
            <div className="parentComponentContainer parkSearchBox">
                <h2 id="SearchTitle">Explore a National Park:</h2>
                <form
                    id="searchForm"
                    onSubmit={handleSearchSubmit}
                >
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        placeholder="Park Input..."
                    />
                    <button onClick={handleSearchSubmit}>Submit</button>
                    <button onClick={handleClearClick}>Clear</button>{' '}
                </form>

                {formSubmitted && (
                    <>
                        <ParkSearch searchTerm={searchInput} />
                        <AccuWeather searchLocation={searchInput} />
                    </>
                )}
            </div>
        </section>
    );
};

export default Search;
