import maleAvatar from "../assets/images/male avatar.png";
import femaleAvatar from "../assets/images/female avatar.png";

const TestimonialsSection = () => {
  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-24">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-wide text-gray-700">
          ARE WE LIKED?
        </p>
        <div className="w-12 h-[2px] bg-orange-600 mx-auto mt-1 mb-6"></div>

        <h2 className="text-4xl md:text-5xl font-semibold">
          Here’s What Our Customers Say
        </h2>
      </div>

      {/* Testimonials Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8">
          <div className="flex gap-4 mb-5">
            <img
              src={femaleAvatar}
              alt="avatar"
              className="w-14 h-14"
            />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dear Trackon Management, I take this opportunity to appreciate your
            logistics services. We have been associated with Trackon under
            Eastern Zone RO for the last 2 years. We always get good response
            & proper service. We look forward to a long association with Trackon
            in future.
          </p>
          <p className="font-semibold text-gray-900">STI Fasteners</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8">
          <div className="flex gap-4 mb-5">
            <img
              src={maleAvatar}
              alt="avatar"
              className="w-14 h-14"
            />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            It is noted that your present service is better than earlier.
            I hope that we remain satisfied with your service and wish you
            all the success in this industry.
          </p>
          <p className="font-semibold text-gray-900">
            The Waxpol Industries Limited
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8">
          <div className="flex gap-4 mb-5">
            <img
              src={femaleAvatar}
              alt="avatar"
              className="w-14 h-14"
            />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We have been associated with Trackon Courier since the past year and
            it has truly been a wonderful journey. Your service is undoubtedly
            excellent and customer care is also responsive.
          </p>
          <p className="font-semibold text-gray-900">
            Zebronics India Pvt. Ltd.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;
