import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Upgrade = () => {
  const cardData = [
    {
      level: 'Platinum',
      description: 'Unlock premium features with our Platinum plan.',
      color: 'bg-blue-500',
    },
    {
      level: 'Gold',
      description: 'Upgrade to our Gold plan and enjoy exclusive benefits.',
      color: 'bg-yellow-500',
    },
    {
      level: 'Diamond',
      description: 'Experience the ultimate with our Diamond plan.',
      color: 'bg-red-500',
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-96 cursor-pointer mt-24  ">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-96 mx-4 transition duration-300 transform hover:scale-105 ">
            {/* Content of the card */}
            <h2 className="text-xl font-semibold mb-4">{card.level}</h2>
            <p className="text-gray-700">{card.description}</p>
            <button className={`mt-4 ${card.color} text-white py-2 px-4 rounded-full hover:bg-green-600`}>
              Upgrade Now
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
};

export default Upgrade;
