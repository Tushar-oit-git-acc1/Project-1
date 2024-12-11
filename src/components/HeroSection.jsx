import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/hero.css';

const HeroSection = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/');
                setData(response.data.results[0]);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="hero-section">
            <h1>Explore Pune with Us</h1>
            <p>Your trusted tour guide for the best experiences in Pune!</p>
            <button className="Book">Book Now</button>
            {data && (
                <div className="user-details">
                    <p>
                        <strong>Name:</strong> {`${data.name.first} ${data.name.last}`}
                    </p>
                    <p>
                        <strong>Email:</strong> {data.email}
                    </p>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
