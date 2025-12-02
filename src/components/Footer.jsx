import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logoFooter from "../assets/images/deliyudaan logo.png";

const Footer = () => {
  return (
    <footer className=" mt-10 bg-orange-300">
      <div className="border-t border-gray-300 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
     

        {/* Logo + About */}
        <div className="col-span-1 md:col-span-2">
          <img
            src={logoFooter}
            alt="Trackon"
            className="h-12 mb-4"
          />
          <p className="text-gray-600 leading-relaxed max-w-md">
            Trackon, a customer-centric logistics partner specialises in offering
            on-time deliveries at the most competitive rates. We blend cutting-edge
            technology with customer-focused shipping solutions for unparalleled
            service excellence.
          </p>
        </div>

        {/* Useful Links */}
        <div className="md:col-span-1">
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Support</li>
            <li>Domestic</li>
            <li>International</li>
            <li>Career</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-1">
          <h3 className="font-semibold text-lg mb-4">Contact</h3>

          <div className="flex items-start gap-3 mb-3">
            <FaMapMarkerAlt className="text-orange-600 text-xl mt-1" />
            <p className="text-gray-600 leading-snug">
              Head Office, A-64,<br />
              Naraina Industrial Area, Phase-1<br />
              New Delhi - 110028
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-orange-600 text-lg" />
            <p className="text-gray-600">customercare@trackon.in</p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-orange-600 text-lg" />
            <p className="text-gray-600">011-4559 3500</p>
          </div>
        </div>

      

      {/* Follow Icons */}
      <div className="md:col-span-1">
        <h3 className="font-semibold text-lg mb-4">Follow US On</h3>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center">
            <FaLinkedinIn className="text-gray-600" />
          </div>
          <div className="w-10 h-10 rounded-full border flex items-center justify-center">
            <FaFacebookF className="text-gray-600" />
          </div>
          <div className="w-10 h-10 rounded-full border flex items-center justify-center">
            <FaInstagram className="text-gray-600" />
          </div>
          <div className="w-10 h-10 rounded-full border flex items-center justify-center">
            <FaYoutube className="text-gray-600" />
          </div>
        </div>
      </div>
      </div>

      {/* Bottom Bar */}
      <div>
        <div className="py-8 border-t border-gray-300 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-500 text-center">
          <p>© 2025 Copyright deliyudaan.in. All Rights Reserved. | Powered By Trackon Couriers Pvt. Ltd.</p>

          <div className="flex gap-4 mt-2 md:mt-0 justify-center">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
