import domesticIcon from "../assets/images/india-icon.png";
import worldIcon from "../assets/images/world-icon.png";

const ServicesSection = () => {
  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT TEXT CONTENT */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-700">
            OUR SERVICES
          </p>
          <div className="w-12 h-0.5 bg-orange-600 mt-1 mb-6"></div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Next-Gen<br />
            Logistics, Tailored<br />
            For You
          </h2>

          <p className="text-gray-600 text-lg">
            Experience business excellence with technology-backed logistics
            solutions at your fingertips.
          </p>
        </div>

        {/* RIGHT SIDE SERVICE CARDS */}
        <div className="flex flex-col gap-12">
          
          {/* Domestic Delivery */}
          <div>
            <div className="flex items-start gap-4">
              <img
                src={domesticIcon}
                alt="domestic delivery icon"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-semibold">Domestic Delivery</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Ensure swift and secure deliveries throughout India,
                  featuring competitive rates, convenient payment options,
                  and comprehensive transit protection.
                </p>
                <button className="text-orange-600 text-xl mt-3">→</button>
              </div>
            </div>
          </div>

          {/* International Delivery */}
          <div>
            <div className="flex items-start gap-4">
              <img
                src={worldIcon}
                alt="international delivery icon"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-semibold">International Delivery</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Experience seamless international shipping to 196+ countries
                  with competitive pricing, prompt customs clearance, and
                  multi-courier benefits.
                </p>
                <button className="text-orange-600 text-xl mt-3">→</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM STATS BOX */}
      <div className="max-w-7xl mx-auto mt-20">
        <div
          className="
            bg-white shadow-xl rounded-2xl 
            grid grid-cols-2 md:grid-cols-4 text-center
            p-10 md:p-12
          "
        >
          {/* Item 1 */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-orange-600">200,000+</h3>
            <p className="text-gray-600 mt-2">Shipments Handled Every Day</p>
          </div>

          {/* Item 2 */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-orange-600">6500+</h3>
            <p className="text-gray-600 mt-2">Franchise Stores</p>
          </div>

          {/* Item 3 */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-orange-600">10,000+</h3>
            <p className="text-gray-600 mt-2">Adept Professionals</p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-600">17,000+</h3>
            <p className="text-gray-600 mt-2">Pin Code Coverage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
