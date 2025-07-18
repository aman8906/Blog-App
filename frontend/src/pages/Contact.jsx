import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Send us a message</h3>

              {/* ✅ Web3Forms Form */}
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                {/* ✅ Web3Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="6631f4d9-66f3-47e8-a406-5cac0ee7a28b"
                />

                {/* Name Field */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Email Field */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Message Field */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-yellow-600 duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-red-500" />
                  <span>+91 9876543210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-pink-500" />
                  <span>help@learncoding.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>Delhi, NCR, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
