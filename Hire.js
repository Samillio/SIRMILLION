import React from 'react';
import img from './images/gracy.jpeg';
import img2 from './images/john.jpg';
import img3 from './images/njeri.jpeg';
import img4 from './images/obby.jpeg';


function Testimonials() {
  // Sample testimonial data with images
  const testimonials = [
    {
      id: 1,
      name: 'Gracy Elijah',
      occupation: 'Web Developer',
      comment: '"I was blown away by the quality of service I received from sirmillion solutions. Their web development team not only met but exceeded my expectations, delivering a website that truly reflects my vision."',
      image: img, // Example image URL
    },
     {
      id: 1,
      name: 'John Kutchy',
      occupation: 'Mobile Phone Repair',
      comment: '" Im beyond impressed with the mobile service provided by sirmillion solutions.From repairs to upgrades, they handled every aspect with expertise and care, ensuring my device works seamlessly."',
      image: img2, // Example image URL
    },
    {
      id: 1,
      name: 'Esther Njoroge',
      occupation: 'Computer Networking',
      comment: '"I recently had the pleasure of collaborating with sirmillion solutions team on a challenging networking project. Their ability to grasp complex networking concepts and translate them into practical solutions is commendable. I wouldnt hesitate to recommend samtech to anyone in need of expert networking services."',
      image: img3, // Example image URL
    },
    {
      id: 1,
      name: 'Geoffry kimani',
      occupation: 'Software installation',
      comment: '"I had the pleasure of working with sirmillion for software installation services, and I couldnt be more satisfied with the results. sirmillion demonstrated a deep understanding of various software solutions and exhibited exceptional technical expertise. Their meticulous approach and systematic installation process ensured a seamless and efficient setup. I highly recommend sirmillion for anyone seeking reliable and professional software installation services. They truly excel in turning complex installations into smooth, trouble-free experiences."',
      image: img4, // Example image URL
    },
    // Add other testimonial objects similarly
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h1 className="text-gray-600">{testimonial.name}</h1>
                <p className="text-gray-600">{testimonial.occupation}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
