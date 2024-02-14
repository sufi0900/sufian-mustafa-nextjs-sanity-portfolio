// "use client";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   Autoplay,
//   Mousewheel,
//   Keyboard,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/mousewheel";
// import "swiper/css/keyboard";
// import "swiper/css/virtual";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ReactNode } from "react";
// import { useState, useEffect } from "react";

// export function Providers({ children }: { children: ReactNode }) {
//   const [isClient, setIsClient] = useState();

//   useEffect(() => {
//     setIsClient(true);
//   }, []);
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index: number, className: string) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   return (
//     <Swiper
//       suppressHydrationWarning
//       modules={[
//         Navigation,
//         Pagination,
//         Scrollbar,
//         Autoplay,
//         Mousewheel,
//         Keyboard,
//       ]}
//       breakpoints={{
//         "@0.00": {
//           slidesPerView: 1,
//           spaceBetween: 10,
//         },
//         "@0.75": {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         "@1.00": {
//           slidesPerView: 3,
//           spaceBetween: 40,
//         },
//         "@1.50": {
//           slidesPerView: 4,
//           spaceBetween: 50,
//         },
//       }}
//       autoplay={false}
//       navigation={true}
//       keyboard
//       slidesPerView={3}
//       pagination={pagination}
//       className="mySwiper"
//     >
//       <SwiperSlide>{children}</SwiperSlide>
//     </Swiper>
//   );
// }

"use client";
import React from "react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
export function Providers({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: 180 }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      {children}
    </motion.div>
  );
}

// "use client";
// import React from "react";
// import { ReactNode } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// export function Providers({ children }: { children: ReactNode }) {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };
//   return <Carousel responsive={responsive}>{children}</Carousel>;
// }
