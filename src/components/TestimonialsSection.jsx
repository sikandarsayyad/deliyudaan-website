// import maleAvatar from "../assets/images/male avatar.png";
// import femaleAvatar from "../assets/images/female avatar.png";

// const TestimonialsSection = () => {
//   return (
//     <div className="w-full py-20 px-6 md:px-12 lg:px-24">

//       {/* Heading */}
//       <div className="text-center mb-14">
//         <p className="text-sm font-semibold tracking-wide text-gray-700">
//           ARE WE LIKED?
//         </p>
//         <div className="w-12 h-[2px] bg-orange-600 mx-auto mt-1 mb-6"></div>

//         <h2 className="text-4xl md:text-5xl font-semibold">
//           Here’s What Our Customers Say
//         </h2>
//       </div>

//       {/* Testimonials Cards */}
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

//         {/* Card 1 */}
//         <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8">
//           <div className="flex gap-4 mb-5">
//             <img
//               src={femaleAvatar}
//               alt="avatar"
//               className="w-14 h-14"
//             />
//           </div>
//           <p className="text-gray-700 leading-relaxed mb-4">
//             Dear Trackon Management, I take this opportunity to appreciate your
//             logistics services. We have been associated with Trackon under
//             Eastern Zone RO for the last 2 years. We always get good response
//             & proper service. We look forward to a long association with Trackon
//             in future.
//           </p>
//           <p className="font-semibold text-gray-900">STI Fasteners</p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8">
//           <div className="flex gap-4 mb-5">
//             <img
//               src={maleAvatar}
//               alt="avatar"
//               className="w-14 h-14"
//             />
//           </div>
//           <p className="text-gray-700 leading-relaxed mb-4">
//             It is noted that your present service is better than earlier.
//             I hope that we remain satisfied with your service and wish you
//             all the success in this industry.
//           </p>
//           <p className="font-semibold text-gray-900">
//             The Waxpol Industries Limited
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8">
//           <div className="flex gap-4 mb-5">
//             <img
//               src={femaleAvatar}
//               alt="avatar"
//               className="w-14 h-14"
//             />
//           </div>
//           <p className="text-gray-700 leading-relaxed mb-4">
//             We have been associated with Trackon Courier since the past year and
//             it has truly been a wonderful journey. Your service is undoubtedly
//             excellent and customer care is also responsive.
//           </p>
//           <p className="font-semibold text-gray-900">
//             Zebronics India Pvt. Ltd.
//           </p>
//         </div>
//         {/* Card 4 */}
//         <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8">
//           <div className="flex gap-4 mb-5">
//             <img
//               src={maleAvatar}
//               alt="avatar"
//               className="w-14 h-14"
//             />
//           </div>
//           <p className="text-gray-700 leading-relaxed mb-4">
//             We have been associated with Trackon Courier since the past year and
//             it has truly been a wonderful journey. Your service is undoubtedly
//             excellent and customer care is also responsive.
//           </p>
//           <p className="font-semibold text-gray-900">
//             Zebronics India Pvt. Ltd.
//           </p>
//         </div>

//         {/* Card 5 */}
//         <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-8">
//           <div className="flex gap-4 mb-5">
//             <img
//               src={maleAvatar}
//               alt="avatar"
//               className="w-14 h-14"
//             />
//           </div>
//           <p className="text-gray-700 leading-relaxed mb-4">
//             We have been associated with Trackon Courier since the past year and
//             it has truly been a wonderful journey. Your service is undoubtedly
//             excellent and customer care is also responsive.
//           </p>
//           <p className="font-semibold text-gray-900">
//             Zebronics India Pvt. Ltd.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;

import React from 'react';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Import styles for the dots
import 'swiper/css/navigation'; // Import styles for the arrows

// Import Swiper modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import maleAvatar from "../assets/images/male avatar.png";
import femaleAvatar from "../assets/images/female avatar.png";

const testimonials = [
  {
    avatar: femaleAvatar,
    text: "Dear Trackon Management, I take this opportunity to appreciate your logistics services. We have been associated with Trackon under Eastern Zone RO for the last 2 years. We always get good response & proper service.",
  },
  {
    avatar: maleAvatar,
    text: "It is noted that your present service is better than earlier. I hope that we remain satisfied with your service and wish you all the success in this industry.",
    name: "The Waxpol Industries Limited",
  },
  {
    avatar: femaleAvatar,
    text: "We have been associated with Trackon Courier since the past year and it has truly been a wonderful journey. Your service is undoubtedly excellent and customer care is also responsive.",
    name: "Zebronics India Pvt. Ltd.",
  },
  {
    avatar: maleAvatar,
    text: "Your team’s performance in handling our logistics has been outstanding. The commitment to timely and safe delivery is truly commendable. We are highly satisfied.",
    name: "Tech Solutions Inc.",
  },
  {
    avatar: femaleAvatar,
    text: "The dedicated support and efficient tracking system have made our shipping process effortless. Highly recommend their professional and reliable service.",
    name: "Global Trade Corp.",
  },
    {
    avatar: maleAvatar,
    text: "Your team’s performance in handling our logistics has been outstanding. The commitment to timely and safe delivery is truly commendable. We are highly satisfied.",
    name: "Tech Solutions Inc.",
  },

];

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

      {/* Swiper Carousel Container */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          // 1. Install necessary modules
          modules={[Pagination, Navigation, Autoplay]} 
          
          // 2. Set general settings
          spaceBetween={30} // Space between slides
          loop={true}        // Enable continuous looping of testimonials
          
          // 3. Autoplay settings for continuous movement
          autoplay={{
            delay: 4000, // Wait 4 seconds before moving to the next set of slides
            disableOnInteraction: false, 
          }}

          // 4. Pagination (dots)
          pagination={{
            clickable: true,
          }}
          
          // 5. Navigation (arrows) - hidden on small screens
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}

          // 6. Responsive Breakpoints (Show different number of slides)
          breakpoints={{
            // 0px and up (Mobile)
            0: {
              slidesPerView: 1, // Show 1 testimonial
              slidesPerGroup: 1,
            },
            // 768px and up (Tablet/Desktop)
            768: {
              slidesPerView: 2, // Show 2 testimonials
              slidesPerGroup: 2,
            },
            // 1024px and up (Large Desktop)
            1024: {
              slidesPerView: 3, // Show 3 testimonials (as requested)
              slidesPerGroup: 3, // Move 3 testimonials at a time
            },
          }}
          className="pb-12" // Add padding bottom for pagination dots
        >

          {/* Map through the testimonials array to create slides */}
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-4 mb-5">
                    <img
                      src={testimonial.avatar}
                      alt="avatar"
                      className="w-14 h-14"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {testimonial.text}
                  </p>
                </div>
                <p className="font-semibold text-gray-900 mt-auto">
                  {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:mt-0">
            <div className="swiper-button-prev-custom hidden md:flex cursor-pointer text-orange-600 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow-md hover:bg-orange-600 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </div>
            <div className="swiper-button-next-custom hidden md:flex cursor-pointer text-orange-600 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow-md hover:bg-orange-600 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
