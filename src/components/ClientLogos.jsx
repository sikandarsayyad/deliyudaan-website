// import bajaj from "../assets/images/bajaj.png";
// import jaina from "../assets/images/jaina.png";
// import nsdl from "../assets/images/nsdl.png"; 
// import otto from "../assets/images/otto.png";
// import samsung from "../assets/images/samsung.png";
// import hdb from "../assets/images/hdb.png";


// const ClientLogos = () => {
//   return (
//     <div className="w-full py-10">
//       <div className="max-w-7xl py-10 border-y border-gray-300 mx-auto flex flex-wrap justify-center items-center gap-16 md:gap-24 px-6 overflow-hidden h-40">

//         <img
//           src={jaina}
//           alt="Jaina"
//           className="h-15 object-contain grayscale" 
//         />

//         <img
//           src={nsdl}
//           alt="NSDL"
//           className="h-15 object-contain grayscale"
//         />

//         <img
//           src={otto}
//           alt="Otto"
//           className="h-15 object-contain grayscale"
//         />

//         <img
//           src={samsung}
//           alt="Samsung"
//           className="h-15 object-contain grayscale"
//         />

//         <img
//           src={bajaj}
//           alt="Bajaj"
//           className="h-15 object-contain grayscale"
//         />
//         <img
//           src={hdb}
//           alt="Hdb"
//           className="h-15 object-contain grayscale"
//         />
//         <img
//           src={nsdl}
//           alt="NSDL"
//           className="h-15 object-contain grayscale"
//         />
//          <img
//           src={otto}
//           alt="Otto"
//           className="h-15 object-contain grayscale"
//         />
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { Autoplay } from 'swiper/modules';

// Import your logo assets
import bajaj from "../assets/images/bajaj.png";
import jaina from "../assets/images/jaina.png";
import nsdl from "../assets/images/nsdl.png"; 
import otto from "../assets/images/otto.png";
import samsung from "../assets/images/samsung.png";
import hdb from "../assets/images/hdb.png";

const clientLogos = [
  { src: jaina, alt: "Jaina" },
  { src: nsdl, alt: "NSDL" },
  { src: otto, alt: "Otto" },
  { src: samsung, alt: "Samsung" },
  { src: bajaj, alt: "Bajaj" },
  { src: hdb, alt: "Hdb" },
];

const ClientLogos = () => {
  // Duplicating the array helps ensure a smoother, continuous loop effect.
  const allLogos = [...clientLogos, ...clientLogos]; 

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl py-10 border-y border-gray-300 mx-auto px-6 overflow-hidden h-40">
        
        <Swiper
          modules={[Autoplay]} 
          
          // General settings
          spaceBetween={40}
          slidesPerView={3}
          loop={true}        // Essential for seamless continuous looping
          speed={3000}       // Controls the *speed* of the scroll animation

          // Configuration for continuous, non-stop swiping
          autoplay={{
            delay: 0, 
            disableOnInteraction: false, // Prevents stopping when swiped
            pauseOnMouseEnter: false,    // Prevents stopping on hover
            reverseDirection: false,
          }}

          // Responsive Breakpoints
          breakpoints={{
            640: { 
              slidesPerView: 4,
              spaceBetween: 50,
            },
            768: { 
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1024: { 
              slidesPerView: 6,
              spaceBetween: 80,
            },
          }}
          className="w-full h-full"
        >
          {allLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-15 object-contain grayscale"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default ClientLogos;
