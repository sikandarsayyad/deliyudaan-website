import newVan from "../assets/images/new-van.jpg";
import handShake from "../assets/images/hand shake.jpg";


const WhoWeAreSection = () => {
  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24">

      {/* Top Section: Who We Are */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-700">
            WHO WE ARE
          </p>
          <div className="w-12 h-[2px] bg-orange-600 mt-1 mb-6"></div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Customer-Centric <br />
            Logistics Pioneers
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With 20 years of unrivalled logistics mastery, we have expanded our
            operations worldwide achieving a turnover exceeding 405 crores (FY23–24).
            <br /><br />
            Our commitment to excellence is exemplified by our unique service
            attributes such as “Prime Track” that guarantees next or second business
            day delivery, Air Express Cargo that lets you deliver heavy shipments
            at express speed.
          </p>

          {/* BUTTON */}
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-full shadow-md hover:shadow-lg flex items-center gap-2 transition">
            Know More
            <span className="text-orange-600 text-xl">→</span>
          </button>
        </div>

        {/* RIGHT SIDE VAN IMAGE */}
        <div className="flex justify-center">
          <img
            src={newVan}
            alt="Trackon Van"
            className="w-[420px] md:w-[500px] object-contain"
          />
        </div>
      </div>



      {/* Become Our Partner Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-16 items-center">
        {/* Handshake Image (FULL WIDTH CENTERED) */}

        <div className="flex justify-center">
          <img
            src={handShake}
            alt="Trackon Van"
            className="w-[420px] md:w-[500px] object-contain"
          />
        </div>

        {/* RIGHT SIDE TEXT (But on left for small screens) */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-700">
            LET'S TEAM UP
          </p>
          <div className="w-12 h-[2px] bg-orange-600 mt-1 mb-6"></div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Become Our <br /> Partner
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our dynamic logistics franchise network has over 6500 thriving partners.
            Backed by a decade-long commitment to our associates, we strive for
            mutual growth and revenue expansion with every partnership.
            <br /><br />
            We aim to cultivate entrepreneurship, and empower franchise owners
            through comprehensive training and mentorship. We bring you franchise
            models to suit your entrepreneurial aspirations.
          </p>

          {/* BUTTON */}
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-full shadow-md hover:shadow-lg flex items-center gap-2 transition">
            Enquire Now
            <span className="text-orange-600 text-xl">→</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default WhoWeAreSection;
