import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = "bx6uheQU0TCJ5buFXHeLfmx5D2Zc0VMolYmPkJ39";

const ParkSearch = ({ searchTerm }) => {
  const [parkData, setParkData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchParkData = async () => {
    if (searchTerm.trim() === "") {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await axios.get(
        `https://developer.nps.gov/api/v1/parks?q=${searchTerm}&api_key=${apiKey}`
      );
      
      if (response.data.data.length > 0) {
        const relevantPark = response.data.data.find((park) =>
        park.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (relevantPark) {
          const parkCode = relevantPark.parkCode;
          const parkResponse = await axios.get(
            `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`
            );
            
            setParkData(parkResponse.data.data[0]);
          } else {
            setParkData(null);
          }
        } else {
          setParkData(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setParkData(null);
      }
      
    setIsLoading(false);
  };
  
  useEffect(() => {
    fetchParkData();
  }, [searchTerm]);
  
  return (
    <section id="park-search-section" className="park-search">
      <div className="parkSearchContainer">
        
        <div className="parkSearchBox">
          
          {parkData && (
            <div>
              <h2>{parkData.fullName}</h2>
              <p>
                Website:{" "}
                <a
                  href={parkData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  {parkData.url}
                </a>
              </p>
              <h3>Address:</h3>
              {parkData.addresses.map((address) => (
                <div key={address.type}>
                  <p>
                    {address.line1}, {address.city}, {address.stateCode}{" "}
                    {address.postalCode}
                  </p>
                </div>
              ))}
              <h3>Description:</h3>
              <p>{parkData.designation}</p>
              <p>{parkData.description}</p>
              <h3>Activities:</h3>
              <ul>
                {parkData.activities.map((activity) => (
                  <li key={activity.id}>{activity.name}</li>
                  ))}
              </ul>
              <h3>Images:</h3>
              <div>
                {parkData.images.map((image) => (
                  <a
                  key={image.url}
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      style={{
                        width: "300px",
                        height: "auto",
                        margin: "5px",
                      }}
                      />
                  </a>
                ))}
              </div>
              <h3>Weather Data:</h3>
              <div>{parkData.weatherInfo}</div>
            </div>
          )}
          {parkData === null && <p>No results found.</p>}
        </div>
      </div>
    </section>
  );
};

export default ParkSearch;












// earlier code 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const ParkSearch = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [parkData, setParkData] = useState(null);
//     // const [weatherData, setWeatherData ] = useState(null);
//     const handleChange = (event) => {
//         setSearchTerm(event.target.value);
//     };
//     const apiKey = 'bx6uheQU0TCJ5buFXHeLfmx5D2Zc0VMolYmPkJ39';
//     useEffect(() => {
//         const fetchParkData = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://developer.nps.gov/api/v1/parks?q=${searchTerm}&api_key=${apiKey}`
//                 );
//                 if (response.data.data.length > 0) {
//                     const relevantPark = response.data.data.find((park) =>
//                         park.fullName
//                             .toLowerCase()
//                             .includes(searchTerm.toLowerCase())
//                     );
//                     if (relevantPark) {
//                         const parkCode = relevantPark.parkCode;
//                         const parkResponse = await axios.get(
//                             `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`
//                         );
//                         console.log(response);
//                         console.log(parkResponse.data.data[0]);
//                         setParkData(parkResponse.data.data[0]);
//                     } else {
//                         setParkData(null);
//                     }
//                 } else {
//                     setParkData(null);
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setParkData(null);
//             }
//         };
//         if (searchTerm !== '') {
//             fetchParkData();
//         } else {
//             setParkData(null);
//         }
//     }, [searchTerm]);
// return (
//     <section
//         id="park-search-section"
//         className="park-search"
//     >
//         <div className="parkSearchContainer">
//             <h2 id="SearchTitle">
//                 Search for a National Park to explore its beauty:
//             </h2>
//             <div className="parkSearchBox">
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={handleChange}
//                 />
//                 <button onClick={() => setSearchTerm('')}>Clear</button>
//                 {parkData && (
//                     <div>
//                         <h2>{parkData.fullName}</h2>
//                         <p>
//                             Website:{' '}
//                             <a
//                                 href={parkData.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 {parkData.url}
//                         </a>
//                     </p>
//                     <h3>Address:</h3>
//                     {parkData.addresses.map((address) => (
//                         <div key={address.type}>
//                             <p>
//                                 {address.line1}, {address.city},{' '}
//                                 {address.stateCode} {address.postalCode}
//                             </p>
//                         </div>
//                     ))}
//                     <h3>Description:</h3>
//                     <p>{parkData.designation}</p>
//                     <p>{parkData.description}</p>
//                     <h3>Activities:</h3>
//                     <ul>
//                         {parkData.activities.map((activity) => (
//                             <li key={activity.id}>{activity.name}</li>
//                         ))}
//                     </ul>
//                     <h3>Images:</h3>
//                     <div>
//                         {parkData.images.map((image) => (
//                             <a
//                                 key={image.url}
//                                 href={image.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <img
//                                     src={image.url}
//                                     alt={image.title}
//                                     style={{
//                                         width: '200px',
//                                         height: 'auto',
//                                         margin: '5px',
//                                     }}
//                                 />
//                             </a>
//                         ))}
//                     </div>
//                     <h3>Weather Data:</h3>
//                     <div>{parkData.weatherInfo}</div>
//                 </div>
//             )}
//             {parkData === null && <p>No results found.</p>}
//         </div>
//     </div>
// </section>
//     );
// };
// export default ParkSearch;

// earlier code ^^