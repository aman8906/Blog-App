import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="border py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  iOS
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Design to code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Figma plugin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Comparison</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Anima
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Appsmith
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs FlutterFlow
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Monday Hero
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Retool
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Bubble
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DhiWise vs Figma Dev Mode
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-black">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/career" className="text-gray-400 hover:text-black">
                  Career
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-400 hover:text-black">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400  hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold hidden md:flex">
          Cilli<span className="text-blue-500 font-bold">Blog</span>
        </div>
        <div className="text-black-800 text-sm hidden md:flex">
          <p>© {new Date().getFullYear()}  CilliBlog. Built with ❤️ by Aman Chaursiya. All rights reserved.</p>
        </div>
       <div className="mt-4 md:mt-0 flex space-x-4">
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
    <FaGithub className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
  </a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    <BsYoutube className="h-6 w-6 hover:text-red-500 cursor-pointer" />
  </a>
  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="h-6 w-6 hover:text-blue-600 cursor-pointer" />
  </a>
</div>
      </div>
    </>
  );
};

export default Footer;
