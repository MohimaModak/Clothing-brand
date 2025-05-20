import React, { useEffect } from 'react';
import image from "../../../Gallery/About.jpeg"
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-out',
            once: true,
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <div  id='/About' className='bg-gradient-to-br from-red-50 via-pink-200 to-red-50 py-14 px-6 lg:px-20 relative'>
            <div data-aos="fade-up" className='lg:flex items-center justify-center gap-12'>
                <div className='flex items-center justify-center'>
                    <img
                        src={image}
                        alt="Nail Polish"
                        className=' object-contain shadow-2xl rounded-md hover:scale-90 duration-1000'
                    />
                </div>
                <div className=' text-center md:text-left'>
                    <h2 className='text-pink-500 text-4xl lg:text-5xl text-center font-bold'>
                        Make Every Move Sparkle
                    </h2>
                    <p className='text-xl md:text-2xl text-gray-600 my-6 max-w-md'>
                        Discover Our Luxe Palette — Crafted for Bold, Beautiful Statements.                    </p>
                    <Link to='/Contact' smooth={true} duration={1000}>
                                                        <button className="bg-pink-500 text-white px-6 py-3 font-medium rounded-md hover:bg-pink-600 transition  shadow-md hover:scale-105 duration-1000">
                                                            Order Now
                                                        </button>
                                                    </Link>
                </div>

            </div>
        </div>
    )
}
