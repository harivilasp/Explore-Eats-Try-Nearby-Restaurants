import React from "react";

const Footer = () => {
  return (
    <footer className="sticky bg-gray-900 text-white py-6 absolute bottom-0 w-full" style={{height:'215px'}}>
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Contact Information */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-12">
          <h2 className="mb-4 text-lg font-semibold" style={{marginLeft:'-35px'}}>Contact Us</h2>
          <p className="text-gray-400" style={{marginLeft:'20px'}}>
            123 Main St<br />
            Anytown, USA 12345<br />
            (123) 456-7890<br />
            info@example.com
          </p>
        </div>

        {/* Social Media Handles */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white hover:underline"
            style={{marginRight:'20px'}}
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white hover:underline"
            style={{marginRight:'20px'}}
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white hover:underline"
            style={{marginRight:'20px'}}
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="container flex justify-center mt-4 text-gray-400">
        <p>© 2023 Example Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
