import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export default function HeroSection() {
    const parkSearchRef = useRef(null);
    const navigate = useNavigate();

    const handleScrollToParkSearch = () => {
        if (parkSearchRef.current) {
            parkSearchRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigateToSearch = () => {
        navigate('/search');
    };

    return (
        <div className="page-title">
            <h1 className="text">NATURE NERDS</h1>
            <h1 className="text2">
                EXPLORE THE BEAUTY OF NATIONAL PARKS <br /> WITH A LITTLE
                GUIDANCE FROM CODING NERDS
            </h1>
            <button
                id="arrow-btn"
                onClick={handleNavigateToSearch}
                style={{ fontSize: 44 }}
            >
                &#10050;
            </button>

            <div ref={parkSearchRef}></div>
        </div>
    );
}

// earlier code
// export default function HeroSection() {
//   const handleScrollToParkSearch = () => {
//     const parentComponentContainer = document.getElementById("parent-search-section");
//     if (parentComponentContainer) {
//       parentComponentContainer.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="page-title">
//       <h1 className="text">NATURE NERDS</h1>
//       <h1 className="text2">
//         EXPLORE THE BEAUTY OF NATIONAL PARKS <br /> WITH A LITTLE GUIDANCE FROM
//         CODING NERDS
//       </h1>
//       <button
//         id="arrow-btn"
//         onClick={handleScrollToParkSearch}
//         style={{ fontSize: 44 }}
//       >
//         {" "}
//         &darr;
//       </button>
//     </div>
//   );
// }
