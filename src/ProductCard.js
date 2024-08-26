import React, { useState } from 'react';

const ThumbnailCarousel = () => {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the carousel
  const slides = [
    {
      id: 1,
      url: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6671_JPG.jpg?v=1695626745',
      thumbnail: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6671_JPG.jpg?v=1695626745',
    },
    {
      id: 2,
      url: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6694_JPG.jpg?v=1695626745',
      thumbnail: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6694_JPG.jpg?v=1695626745',
    },
    {
      id: 3,
      url: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6683_JPG.jpg?v=1695626745',
      thumbnail: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6683_JPG.jpg?v=1695626745',
    },

    {
      id: 4,
      url: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6673_JPG.jpg?v=1695626745',
      thumbnail: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6673_JPG.jpg?v=1695626745',
    },

    {
      id: 5,
      url: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6680_JPG.jpg?v=1695626745',
      thumbnail: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6680_JPG.jpg?v=1695626745',
    },

    {
      id: 6,
      url: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6691_JPG.jpg?v=1695626745',
      thumbnail: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6691_JPG.jpg?v=1695626745',
    },

    {
      id: 6,
      url: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6691_JPG.jpg?v=1695626745',
      thumbnail: 'https://www.meenabazaar.shop/cdn/shop/files/SPPX6691_JPG.jpg?v=1695626745',
    }




  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <div className='flex w-screen mt-20 flex-col md:flex-row'>
    <div className="relative w-full max-w-9xl mx-10 p-0  ">
      <div className="relative overflow-hidden rounded-lg w-full h-screen ">
        {/* Display current slide */}
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
        
          className="your-custom-class object-cover md:w-full  md:h-auto "
        />

        {/* Previous button - Overlay */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &larr;
        </button>

        {/* Next button - Overlay */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          &rarr;
        </button>
      </div>

      {/* Thumbnail icons for slide navigation */}
      <div className=" mt-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 border-2 ${
              index === currentIndex ? 'border-blue-600' : 'border-transparent'
            } focus:outline-none`}
          >
            <img
              src={slide.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 rounded-md ${
                index === currentIndex ? 'opacity-100' : 'opacity-50'
              }`}
            />
          </button>
        ))}
      </div>
    </div>

    
    <div className="mx-auto p-4 bg-white shadow-lg rounded-lg w-full">
      {/* Product Title */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Green Colour Silk Woven Saree
      </h2>
      
      {/* Ratings and Reviews */}
      <div className="flex items-center mt-2">
        <div className="flex items-center text-yellow-500">
          {/* Star Icons */}
          ★★★★☆
        </div>
        <span className="ml-2 text-gray-600 text-sm">5 reviews</span>
      </div>

      {/* Price and Discount */}
      <div className="mt-4 flex items-center">
        <span className="text-2xl font-bold text-red-500">Rs. 6,240.00</span>
        <span className="ml-4 text-gray-500 line-through">Rs. 12,480.00</span>
        <span className="ml-2 bg-red-200 text-red-600 px-2 py-1 text-xs rounded">SAVE 50%</span>
      </div>

      {/* Product Information */}
      <div className="mt-4 text-gray-700">
        <p><strong>SKU:</strong> SAR_SOS_4473_GREEN</p>
        <p><strong>Style:</strong> 4473</p>
        <p className="mt-2"><strong>Material:</strong> SILK</p>
        <p className="text-green-600 font-semibold mt-2">In stock</p>
      </div>

      {/* Customization Options */}
      <div className="mt-4">
        <p className="font-semibold">Customization Options (Only Available for Prepaid Orders):</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Fall and Pico - ₹200</li>
          <li>Cotton Inskirt - ₹500</li>
          <li>Satin Inskirt - ₹1000</li>
          <li>Pre-pleated Saree - ₹2500</li>
          <li>Designer Blouse - ₹2000</li>
          <li>Basic Blouse - ₹1500</li>
        </ul>
      </div>

      {/* Quantity Selector */}
      <div className="mt-4">
        <label className="block text-gray-700 font-semibold mb-2">Quantity:</label>
        <input type="number" min="1" className="border border-gray-300 p-2 w-20" defaultValue="1" />
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="flex-1 bg-black text-white font-bold py-2 rounded hover:bg-gray-800 transition duration-200">
          ADD TO CART
        </button>
        <button className="flex-1 bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition duration-200">
          BUY IT NOW
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default ThumbnailCarousel;
