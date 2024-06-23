import React, { useEffect, useState } from 'react';
import Header from './Header';
import styles from './UserReservations.module.css'; // Your CSS module for styling

function UserReservations() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve the auth token from storage
        if (!token) {
            console.error("No token found");
            // Handle the lack of a token — perhaps by redirecting to a login page
            return;
        }

        fetch('https://usermicroservicedocker.onrender.com/api/reservations/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add the authorization header
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setReservations(data);
            })
            .catch(error => {
                console.error("There was a problem fetching the reservation details:", error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <Header isHomePage={false} searchQuery="" handleSearchChange={() => {}} />
            <div className={styles.reservationList}>
                {reservations.length > 0 ? (
                    reservations.map((reservation) => (
                        <section key={reservation.id} className={styles.reservationItem}>
                            <h3>Reservation for:</h3>
                            {reservation.items && reservation.items.length > 0 ? (
                                reservation.items.map((item) => (
                                    <p key={item.id}>{item.title.nameOfBook}</p>
                                ))
                            ) : (
                                <p>No books in this reservation.</p>
                            )}
                            <p>Reserved on: {new Date(reservation.created).toLocaleDateString()}</p>
                            <p>Status: {reservation.approvedByLibrarianBecauseItWasPhysicallyTaken ? 'Approved' : 'Pending'}</p>
                        </section>
                    ))
                ) : (
                    <p>No reservations found.</p>
                )}
            </div>
        </div>
    );
}

export default UserReservations;
