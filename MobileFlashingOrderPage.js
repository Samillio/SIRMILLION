import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ServiceList = () => {
    const services = [
        {
            id: 1,
            name: 'Firmwares',
            image: 'mobile.webp',
            description: 'We have a large variety of firmwares. Click the button below to order.',
            rating: 4,
            amount: 50
        },
        {
            id: 2,
            name: 'Service 2',
            image: 'service2.jpg',
            description: 'Description of Service 2',
            rating: 5,
            amount: 75
        },
        {
          id: 2,
          name: 'Service 2',
          image: 'service2.jpg',
          description: 'Description of Service 2',
          rating: 5,
          amount: 75
      },
      {
        id: 2,
        name: 'Service 2',
        image: 'service2.jpg',
        description: 'Description of Service 2',
        rating: 5,
        amount: 75
    },
    {
      id: 2,
      name: 'Service 2',
      image: 'service2.jpg',
      description: 'Description of Service 2',
      rating: 5,
      amount: 75
  },
  {
    id: 2,
    name: 'Service 2',
    image: 'service2.jpg',
    description: 'Description of Service 2',
    rating: 5,
    amount: 75
},
        // Add more services as needed
    ];

    const renderStarRating = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faStar} color={i < rating ? 'yellow' : 'gray'} />
            );
        }
        return stars;
    };

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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Our Services in Mobile Phones</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {services.map(service => (
                    <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={`/images/${service.image}`} alt={service.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{service.name}</h2>
                            <p className="text-gray-700 mb-2">{service.description}</p>
                            <div className="flex items-center mb-2">
                                {renderStarRating(service.rating)}
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-semibold">${service.amount}</p>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => handleOrderService(service.name)}>
                                    Order Service
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceList;
