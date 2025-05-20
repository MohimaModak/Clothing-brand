import image from "../../../Gallery/bg.jpeg"
import "./Home.css"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Dress from '../Dress/Dress';
import About from '../About/About';
import MoreProduct from '../MoreProduct/MoreProduct';
import Contact from "../Contact/Contact";
export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 3000,
            easing: 'ease-out',
            once: true,
        });
    }, []);

    return (
        <div>
        <div id='/'>
            <section className="relative bg-gradient-to-br from-pink-200 via-red-50 to-pink-200 pt-16 px-5 md:px-20">
                <div className="" />

                <div data-aos="fade-up" className="flex justify-center items-center">
                    <div className="lg:flex justify-center items-center lg:gap-10">
                        <div className="space-y-6 py-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl font-bold text-pink-500 leading-tight">
                                Ultimate Relaxation, Now in Style.
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 my-6 max-w-md">
                                Discover our premium loungewear designed to melt stress, ease tension, and wrap you in all-day comfort — effortlessly stylish, endlessly soothing.              </p>
                            <div>
                                <Link to='/Contact' smooth={true} duration={1000}>
                                    <button className="bg-pink-500 text-white px-6 py-3 font-medium rounded-md hover:bg-pink-600 transition  shadow-md hover:scale-105 duration-1000">
                                        Order Now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <img
                                src={image}
                                alt="Massage chair for home relaxation rounded-md"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <About></About>
        <Dress></Dress>
        <MoreProduct></MoreProduct>
        <Contact></Contact>
        </div>
    )
}

