// import { useState } from "react";

// const Sort = ({ flights, onSort }) => {

//     const [sortedFlights, setSortedFlights] = useState([...flights]);

//     const sortTickets = (e) => {
//         const sortBy = e.target.value;
//         const sorted = [...sortedFlights];

//         switch (sortBy) {
//             case 'lowestPrice':
//                 sorted.sort((a, b) => a.price - b.price);
//                 break;
//             case 'highestPrice':
//                 sorted.sort((a, b) => b.price - a.price);
//                 break;
//             case 'lowestStops':
//                 sorted.sort((a, b) => a.stops - b.stops);
//                 break;
//             case 'highestStops':
//                 sorted.sort((a, b) => b.stops - a.stops);
//                 break;
//             default:
//                 break;
//         }
//         setSortedFlights(sorted);
//         onSort(sorted);
//     };
//     return (
//         <div>
//             <form action="#">

//                 <select name="sort" onChange={sortTickets}>
//                     <option value="lowestPrice">По возрастанию цены</option>
//                     <option value="highestPrice">По убыванию цены</option>
//                     <option value="lowestStops">По количеству пересадок(a-z)</option>
//                     <option value="highestStops">По количеству пересадок(z-a)</option>
//                 </select>


//             </form>
//         </div>
//     );
// }

// export default Sort;

import { useState } from "react";

const Sort = ({ flights, onSort }) => {
    const [sortedFlights, setSortedFlights] = useState([...flights]);

    const sortTickets = (e) => {
        const sortBy = e.target.value;
        const sorted = [...sortedFlights];

        switch (sortBy) {
            case "lowestPrice":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "highestPrice":
                sorted.sort((a, b) => b.price - a.price);
                break;
            case "lowestStops":
                sorted.sort((a, b) => a.stops - b.stops);
                break;
            case "highestStops":
                sorted.sort((a, b) => b.stops - a.stops);
                break;
            default:
                break;
        }

        setSortedFlights(sorted);
        onSort(sorted);
    };

    return (
        <div>
            <form action="#">
                <select name="sort" onChange={sortTickets}>
                    <option value="lowestPrice">По возрастанию цены</option>
                    <option value="highestPrice">По убыванию цены</option>
                    <option value="lowestStops">По количеству пересадок (a-z)</option>
                    <option value="highestStops">По количеству пересадок (z-a)</option>
                </select>
            </form>
        </div>
    );
};

export default Sort;
