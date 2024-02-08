import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import img from './images/mobile.webp';
import img1 from './images/web.jpeg';
import img2 from './images/network.jpg';
import img3 from './images/domestic.jpeg';
import img4 from './images/software.jpeg';
import img5 from './images/repair.jpeg';

const Service = () => {
    const navigate = useNavigate();

    const handleOrderService = (serviceName) => {
        // Replace the phone number with your WhatsApp number
        const phoneNumber = '+254798590202';
        const message = `I want to order ${serviceName}`;

        // Create a WhatsApp link with the phone number and message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open the WhatsApp chat window
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="service-section">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="service-cards">
                <div className="service-card">
                    <h3>Mobile Flashing</h3>
                    <img src={img} alt="" />
                    <span className="price">Starting from : $50</span>
                    <p className="description">We offer mobile flashing service,firmwares,
                     Mdm,Data Recovery,FRP Bypass, All mobile phones problems.</p>
                    <button className="order-button" onClick={() => navigate('/mobile-flashing-order')}>Order Service</button>
                </div>
                <div className="service-card">
                    <h3>Web Development</h3>
                    <img src={img1} alt="" />
                    <span className="price">$500</span>
                    <p className="description">Professional web development services.</p>
                    <button className="order-button" onClick={() => handleOrderService('Web Development')}>Order Service</button>
                </div>
                <div className="service-card">
                    <h3>Computer Networking</h3>
                    <img src={img2} alt="" />
                    <span className="price">$300</span>
                    <p className="description">Expert computer networking solutions.</p>
                    <button className="order-button" onClick={() => handleOrderService('Computer Networking')}>Order Service</button>
                </div>
                <div className="service-card">
                    <h3>Domestic Power Installation</h3>
                    <img src={img3} alt="" />
                    <span className="price">$200</span>
                    <p className="description">Installation of domestic power systems.</p>
                    <button className="order-button" onClick={() => handleOrderService('Domestic Power Installation')}>Order Service</button>
                </div>
                <div className="service-card">
                    <h3>Computer Maintenance & Repair</h3>
                    <img src={img4} alt="" />
                    <span className="price">$100</span>
                    <p className="description">Professional computer maintenance and repair.</p>
                    <button className="order-button" onClick={() => handleOrderService('Computer Maintenance & Repair')}>Order Service</button>
                </div>
                <div className="service-card">
                    <h3>Computer Software Solutions</h3>
                    <img src={img5} alt="" />
                    <span className="price">$400</span>
                    <p className="description">Tailored computer software solutions.</p>
                    <button className="order-button" onClick={() => handleOrderService('Computer Software Solutions')}>Order Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
