import van from "../assets/images/van.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[65vh] md:h-[80vh]">

      {/* Background Image */}
      <img
        src={van}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* White-to-transparent gradient (left side) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex items-center justify-start">

        <div className="text-left text-black max-w-xl">
          <h1 className="text-2xl md:text-5xl font leading-tight">
            Fast, Flawless And <br />
            Future-Ready Logistics
          </h1>

          {/* Button */}
          <button
            className="mt-6 bg-white shadow-md px-6 py-3 rounded-full text-gray-700 font-medium flex items-center gap-2 hover:bg-gray-100 transition"
          >
            Explore Services
            <span className="text-orange-500 text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
