import React from 'react';


export default function Contact() {
  return (
    <div id='/Contact' className="relative bg-gradient-to-br from-pink-200 via-red-50 to-pink-200 py-14 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-pink-500 text-4xl lg:text-5xl text-center font-bold ">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 font-medium">We’re here to help. Reach out to us for questions, inquiries, or just to say hello!</p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Phone Section */}
          <div className="p-8 rounded-2xl shadow-lg bg-pink-500">
            <h3 className="text-3xl font-semibold text-white textshadow">Phone</h3>
            <p className="mt-4 text-lg text-white font-medium">Call us for immediate assistance:</p>
            <p className="mt-2 text-lg text-white">
              <a href="tel:+1234567890" className="text-white font-medium">
                +1 (234) 567-890
              </a>
            </p>
          </div>

          {/* Email Section */}
          <div className="p-8 rounded-2xl shadow-lg bg-pink-500">
            <h3 className="text-3xl font-semibold text-white textshadow">Email</h3>
            <p className="mt-4 text-lg text-white font-medium">For inquiries, drop us an email:</p>
            <p className="mt-2 text-lg text-white">
              <a href="mailto:contact@glamourcosmetics.com" className="text-white font-medium">
                contact@glamourcosmetics.com
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="p-8 rounded-2xl shadow-lg bg-pink-500">
            <h3 className="text-3xl font-semibold text-white textshadow">Follow Us</h3>
            <p className="mt-4 text-lg text-white">Stay updated with our latest products and offers:</p>
            <div className="mt-6 flex justify-center space-x-8">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Location and Map Section */}
        <div className="mt-12 p-8">
          <h3 className="text-pink-500 text-4xl lg:text-5xl text-center font-bold">Our Location</h3>
          <p className="mt-4 text-lg text-gray-600 font-medium">Visit us at our headquarters:</p>
          <p className="mt-2 text-lg text-gray-600 font-medium">123 Glamour Ave, Suite 400, Fashion City, FC 12345</p>
          <div className="mt-4 rounded-md shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.074998466717!2d-122.41941548468168!3d37.77492927975817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e42e9abff%3A0x838a04f9a6724961!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1635863752199!5m2!1sen!2sin"
              width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" className='rounded-md'
            ></iframe>
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-gray-600 textshadow">Our Working Hours</h3>
          <p className="mt-4 text-lg text-gray-600 font-medium">We’re available during the following hours:</p>
          <p className="mt-2 text-lg text-gray-600 font-medium">
            Monday - Friday: 9:00 AM - 6:00 PM <br />
            Saturday: 10:00 AM - 4:00 PM <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
}