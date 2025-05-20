import React from 'react';
import Offer1 from "../../../../src/Gallery/Offer1.jpeg";
import Offer2 from "../../../../src/Gallery/Offer2.webp";
import Offer3 from "../../../../src/Gallery/Offer3.webp";
import Offer4 from "../../../../src/Gallery/Offer4.webp";
import Offer5 from "../../../../src/Gallery/Offer5.jpeg";
import Offer6 from "../../../../src/Gallery/Offer6.webp";
import "./MoreProduct.css";
import { Link } from 'react-scroll';


const OfferProduct = [
    { image: Offer1, name: "Crimson Kiss", price: "$19.99" },
    { image: Offer2, name: "Velvet Rouge", price: "$22.99" },
    { image: Offer3, name: "Blush Bloom", price: "$18.50" },
    { image: Offer4, name: "Berry Charm", price: "$21.00" },
    { image: Offer5, name: "Peach Passion", price: "$20.50" },
    { image: Offer6, name: "Ruby Rush", price: "$23.75" },
];

export default function MoreProduct() {
    return (
        <div id='/MoreProduct' className='bg-gradient-to-br from-red-50 via-pink-200 to-red-50 py-14 px-6 lg:px-20 relative'>
            <h1 className="text-pink-500 text-4xl lg:text-5xl text-center font-bold pb-10">
                Style That Defines You.
            </h1>

            {/* Adding <marquee> tag */}
            <marquee behavior="scroll" direction="left" scrollamount="6" onmouseover="this.stop();" onmouseout="this.start();">
                <div className="flex gap-8">
                    {OfferProduct.map((product, index) => (
                        <div key={index} className="bg-red-50 shadow-lg rounded-xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-96 w-96 object-cover rounded-t-md"
                            />
                            <div className='px-6 py-5'>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 font-bold mb-4">{product.price}</p>
                                <Link to='/Contact' smooth={true} duration={1000}>
                                    <button className="bg-pink-500 text-white px-6 py-3 font-medium rounded-md hover:bg-pink-600 transition  shadow-md hover:scale-105 duration-1000">
                                        Order Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </marquee>
        </div>
    );
}
