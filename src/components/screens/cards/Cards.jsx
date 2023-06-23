import { Link } from "react-router-dom";
import styles from '../cards/Cards.module.css'; 
import uuid from 'react-uuid';

const Cards = ({ flights }) => {
    return (
        <div>
            <div key={flights.id} className={styles.cards}>
                <div className={styles.item}>
                    <div>
                        <h5>Скидка 20%</h5>
                        <p>Aidar Airlines</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div>{flights.origin}</div>
                </div>
                <div className={styles.item}>
                    <div>{flights.destination}</div>
                </div>
                <div className={styles.item}>
                    <div>Общее время: {flights.totalFlightTime}</div>
                    <details>
                        <summary>Пересадок: {flights.stops}</summary>
                        <div className={styles.layoversWrapper}>
                            {flights.layovers.map((row) => (
                                <div key={uuid()} className={styles.stops}>
                                    <p>Aiport : {row.airport}</p>
                                    <p>Время ожидания : {row.duration}</p>
                                    <p>Время полета: {row.flightTime}</p>
                                </div>
                            ))}
                        </div>
                    </details>
                </div>
                <div className={styles.item}>
                    <Link to="#">
                        <div>Выбрать за</div>
                        <div>
                            {new Intl.NumberFormat("kz-Kz", {
                                style: "currency",
                                currency: "USD",
                            }).format(flights.price)}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;
