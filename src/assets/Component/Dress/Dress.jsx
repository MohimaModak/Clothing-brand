import React, { useEffect } from 'react';
import ProductImage1 from "../../../../src/Gallery/Product1.jpeg"
import ProductImage2 from "../../../../src/Gallery/Product2.jpeg"
import ProductImage3 from "../../../../src/Gallery/Product3.jpeg"
import ProductImage4 from "../../../../src/Gallery/Product4.jpeg"
import ProductImage5 from "../../../../src/Gallery/Product5.webp"
import ProductImage6 from "../../../../src/Gallery/Product6.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

export default function Dress() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-out',
            once: true,
            delay: 100,
        });
        AOS.refresh();
    }, []);

    const Products = [
    { image: ProductImage1, Name: 'Summer Floral Dress', Price: '$120' },
    { image: ProductImage2, Name: 'Elegant Evening Gown', Price: '$350' },
    { image: ProductImage3, Name: 'Casual Shirt Dress', Price: '$90' },
    { image: ProductImage4, Name: 'Boho Maxi Dress', Price: '$150' },
    { image: ProductImage5, Name: 'Chic Midi Dress', Price: '$200' },
    { image: ProductImage6, Name: 'Classic Little Black Dress', Price: '$180' }
];

    return (
        <div className='relative bg-gradient-to-br from-pink-200 via-red-50 to-pink-200'>
            <div data-aos="fade-up" id='/Dress' className='py-14 px-6 lg:px-20 relative'>
                <h1 className='text-pink-500 text-4xl lg:text-5xl text-center font-bold'>Find Your Perfect Fit</h1>
                <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-6'>
                    {Products.map((item, index) => (
                        <div key={index} className='relative'>
                            <img src={item.image} className='w-96 h-[500px] text-gray-500 object-cover pt-8 lg:pt-0 rounded lg:rounded-3xl hover:scale-90 duration-1000' />
                            <h1 className='text-center text-2xl mt-2 font-medium text-gray-600'>{item.Name}</h1>
                            <p className='text-center my-2 font-medium text-gray-600'>Price: {item.Price}</p>
                            <Link to='/Contact' smooth={true} duration={1000}>
                                <div className='flex justify-center items-center'>
                                    <button className='bg-pink-500 text-white px-6 py-3 font-medium rounded-md hover:bg-pink-600 transition  shadow-md hover:scale-105 duration-1000'>Order Now</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
