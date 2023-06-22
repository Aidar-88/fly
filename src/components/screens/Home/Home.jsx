import { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import styles from "../Home/Home.module.css";
import { FlyService } from "../../../services/fly.service";

const Home = () => {
    const [flights, setFlights] = useState([]);
    const [sortedFlights, setSortedFlights] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        sortBy: "priceAsc",
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await FlyService.getAll();
            setFlights(response);
            setSortedFlights(response);
        };
        fetchData();
    }, []);

    useEffect(() => {
        filterAndSortFlights();
    }, [searchQuery, filters]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            sortBy: event.target.value,
        }));
    };

    const filterAndSortFlights = () => {
        let filteredFlights = flights.filter((flight) =>
            flight.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
            flight.destination.toLowerCase().includes(searchQuery.toLowerCase())




        );

        switch (filters.sortBy) {
            case "priceAsc":
                filteredFlights.sort((a, b) => a.price - b.price);
                break;
            case "priceDesc":
                filteredFlights.sort((a, b) => b.price - a.price);
                break;
            case "stopsAsc":
                filteredFlights.sort((a, b) => a.stops - b.stops);
                break;
            case "stopsDesc":
                filteredFlights.sort((a, b) => b.stops - a.stops);
                break;
            default:
                break;
        }

        setSortedFlights(filteredFlights);
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.section}>
                    <div className={styles.item}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                    </div>

                    <div className={styles.item}>
                        <select value={filters.sortBy} onChange={handleFilterChange}>
                            <option disabled>Сортировка</option>
                            <option value="priceAsc">По возрастанию цены</option>
                            <option value="priceDesc">По убыванию цены</option>
                            <option value="stopsAsc">По возрастанию пересадок</option>
                            <option value="stopsDesc">По убывнию пересадок</option>
                        </select>
                    </div>

                </div>
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

