import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "react-awesome-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/effect-cards";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Reviews = () => {
  const users = [
    {
      name: "Srivari Foods",

      review:
        "  Srivari Foods story was brought to life brilliantly with this corporate film. Exceptional work! Thanks to the team for capturing the essence of Srivari Foods so impeccably. A film we re proud to share! ",
    },
    {
      name: "Salzgitter Lift",

      review:
        "Salzgitter Lifts' brand has truly been elevated with these graphic creatives. Simply outstanding! The essence of Salzgitter Lifts shines through in the graphics. A visual triumph by the team!",
    },
    {
      name: "Shelder Projects",

      review:
        "Shelder Projects' vision was brought to life in every page of the brochure. Stellar design work! The creatives provided for Shelder Projects are not just designs; they're art that speaks our mission.",
    },
    {
      name: "The reels for River",

      review:
        "The reels for River Nims Nalgonda encapsulated the beauty and spirit of the place. Cinematic excellence! 'Through these reels, River Nims Nalgonda wasn't just showcased, it was celebrated. Exceptional work!'",
    },
    {
      name: "Frykiki",

      review:
        "With Frykiki's social media campaign, we witnessed our brand voice amplified like never before. Kudos to the team! 'Engagement, reach, and results; Frykiki's social media marketing surpassed all expectations. Truly transformative!'",
    },
    {
      name: "National Academy of Construction's",

      review:
        "National Academy of Construction's essence was brilliantly channeled in every post. Social media marketing at its finest! 'Thanks to the adept promotions, our academy's message now resonates far and wide. Remarkable job on the social media front!'",
    },
  ];

  return (
    <div
      id="test"
      className=" py-[4rem] px-[2rem] md:px-[4rem] bg-[#e6e6e6] text-black"
    >
      <h1 className="text-center text-4xl text-red-600 font-bold">
        <Slide>Testimonials</Slide>
      </h1>

      <div className="hidden md:block">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          // className="mySwiper"
        >
          {users.map((user, index) => (
            <SwiperSlide key={index} className="py-[4rem]  h-auto">
              <div className="card w-full text-black rounded-xl bg-white h-[100%] justify-between">
                <div className="card-body">
                  <p className="text-justify">{user.review}</p>
                  <div className=" justify-center  mt-5 items-center">
                    <div className="text-center ">
                      <h2 className="font-semibold text-xl text-red-600">
                        - {user.name}
                      </h2>
                      {/* <p>{user.about}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" md:hidden ">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          // className="mySwiper"
        >
          {users.map((user, index) => (
            <SwiperSlide key={index} className="py-[4rem] h-auto">
              <div className="card w-full text-black h-[100%]	 bg-white">
                <div className="card-body">
                  <p className="text-justify">{user.review}</p>
                  <div className="card-actions justify-center  mt-5 items-center">
                    <div className="text-center ">
                      <h2 className="text-xl font-semibold text-red-600 ">
                        {user.name}
                      </h2>
                      <p>{user.about}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
