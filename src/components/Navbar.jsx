import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/deliyudaan logo.png";


const Navbar = () => {
  const [openServices, setOpenServices] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20 object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-8 text-[15px] font-medium text-gray-700 items-center">

          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          {/* Services */}
          <li
            className="flex items-center gap-1 relative cursor-pointer hover:text-orange-500"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            Services <FiChevronDown size={14} />

            {openServices && (
              <div className="absolute top-6 left-0 bg-white shadow-md rounded-md py-3 px-4 min-w-[150px] z-50">
                <Link to="/express-cargo" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Domestic
                </Link>
                <Link to="/prime-track" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  International
                </Link>
              </div>
            )}
          </li>

          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/associates">Associates</Link>
          </li>

          {/* Support */}
          <li
            className="flex items-center gap-1 relative cursor-pointer hover:text-orange-500"
            onMouseEnter={() => setOpenSupport(true)}
            onMouseLeave={() => setOpenSupport(false)}
          >
            Support <FiChevronDown size={14} />

            {openSupport && (
              <div className="absolute top-6 left-0 bg-white shadow-md rounded-md py-3 px-4 min-w-[250px] z-50">
                <Link to="/mandatory-documentation" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Mandatory Documentation
                </Link>

                <Link to="/international-documents" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Documents For International Shipping
                </Link>

                <Link to="/banned-items" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Banned/Restricted Items
                </Link>

                <Link to="/holiday-calendar" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Holiday Calendar
                </Link>

                <Link to="/fuel-surcharge" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Fuel Surcharge Information
                </Link>

                <Link to="/volumetric-info" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Volumetric Information
                </Link>

                <Link to="/fraud-awareness" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Fraud Awareness
                </Link>

                <Link to="/complaint" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Register A Complaint
                </Link>
              </div>
            )}
          </li>

          {/* Media */}
          <li
            className="flex items-center gap-1 relative cursor-pointer hover:text-orange-500"
            onMouseEnter={() => setOpenMedia(true)}
            onMouseLeave={() => setOpenMedia(false)}
          >
            Media <FiChevronDown size={14} />

            {openMedia && (
              <div className="absolute top-6 left-0 bg-white shadow-md rounded-md py-3 px-4 min-w-[150px] z-50">
                <Link to="/express-cargo" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  News
                </Link>

                <Link to="/prime-track" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Blogs
                </Link>
              </div>
            )}
          </li>

          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/career">Career</Link>
          </li>

          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/faqs">FAQs</Link>
          </li>

          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>

          {/* Login */}
          {/* Login */}
          <li
            className="flex items-center gap-1 relative cursor-pointer bg-black text-white px-4 py-2"
            onMouseEnter={() => setOpenLogin(true)}
            onMouseLeave={() => setOpenLogin(false)}
          >
            <span className="font-medium">Login</span>
            <FiChevronDown size={14} />

            {openLogin && (
              <div className="absolute top-10 right-0 bg-white shadow-md rounded-md py-3 px-4 min-w-[200px] z-50 text-sm text-orange-500">
                <Link to="/franchisee-login" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Franchisee Login
                </Link>

                <Link to="/international-login" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  International Login
                </Link>

                <Link to="/prime-login" className="block py-1 px-2 hover:bg-orange-500 hover:text-black transition">
                  Prime Login
                </Link>
              </div>
            )}
          </li>

          {/* Track */}
          <li>
            <Link to="/track">
              <button className="bg-orange-500 text-white px-6 py-2 font-medium hover:bg-orange-600 transition">
                Track
              </button>
            </Link>
          </li>


        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
