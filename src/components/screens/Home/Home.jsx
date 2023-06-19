// import { useEffect, useState } from "react";
// import Cards from "../cards/Cards";
// import styles from '../Home/Home.module.css'
// import { FlyService } from "../../../services/fly.service";
// import Sort from "../../ui/Sort";

// const Home = () => {

//     const [flights, setFlights] = useState([])
//     const [sortedFlights, setSortedFlights] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await FlyService.getAll()
//             setFlights(response)
//             setSortedFlights(response)
//         }
//         fetchData()

//     }, [])
//     const sortFlights = (sorted) => {
//         setSortedFlights([...sorted])
//     }
//     return (
//         <div>
//             <div>

//                 <Sort flights={flights} onSort={sortFlights} />

//             </div>
//             <div className={styles.wrapper}>
//                 <div className={styles.card}>
//                     {sortedFlights.map((row) => (
//                         <Cards key={row.id} flights={row} />
//                     ))}
//                 </div>

//             </div>
//         </div>

//     );
// }

// export default Home;

import { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import styles from "../Home/Home.module.css";
import { FlyService } from "../../../services/fly.service";
import Sort from "../../ui/Sort";

const Home = () => {
    const [flights, setFlights] = useState([]);
    const [sortedFlights, setSortedFlights] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await FlyService.getAll();
            setFlights(response);
            setSortedFlights(response);
        };
        fetchData();
    }, []);

    const sortFlights = (sorted) => {
        setSortedFlights([...sorted]);
    };

    console.log(sortFlights)

    return (
        <div>
            <div>
                <Sort flights={flights} onSort={sortFlights} />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    {sortedFlights.map((row) => (
                        <Cards key={row.id} flights={row} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
