import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-pink-500 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl text-white font-semibold mb-4">Clothing Brand</h2>
          <p className="text-sm font-medium">
            Elevate your beauty with our premium collection of lipsticks, nail polish, and mascara.
          </p>
        </div>

        {/* Navigation */}
        {/* <div>
          <h3 className="text-xl text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 font-medium">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/Products" className="hover:underline">Lipsticks</Link></li>
            <li><Link to="/Nailpolish" className="hover:underline">Nail Polish</Link></li>
            <li><Link to="/Mascara" className="hover:underline">Mascara</Link></li>
          </ul>
        </div> */}

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2 font-medium">Email: support@glamourcosmetics.com</p>
          <p className="text-sm mb-4 font-medium">Phone: +1 (234) 567-890</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white font-semibold hover:underline">Instagram</a>
            <a href="#" className="text-white font-semibold hover:underline">Facebook</a>
            <a href="#" className="text-white font-semibold hover:underline">YouTube</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 text-center font-medium text-sm border-t border-red-200 pt-4">
        &copy; {new Date().getFullYear()} Glamour Cosmetics. All rights reserved.
      </div>
    </footer>
  );
}