    // src/components/Services.jsx
    import React from 'react';
    import '../Styles/services.css';


    const services = [
    { title: 'City Tours', description: 'Discover Pune’s top attractions.' },
    { title: 'Heritage Walks', description: 'Explore historical landmarks.' },
    { title: 'Custom Packages', description: 'Tailored experiences just for you.' },
    { title: 'Wedding Packages', description: 'Most beautiful natural background'}
    ];

    const Services = () => {
    return (
        <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
            {services.map((service, index) => (
            <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
            ))}
        </div>
        </section>
    );
    };

    export default Services;
