import { FaFire } from 'react-icons/fa';
import { MdOutlineDataExploration } from 'react-icons/md';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Banner = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[42rem] max-w-8xl mx-12 my-3 bg-rose-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 bg-red-100">
              <div
                className="col-span-2  my-32 px-24 py-12 space-y-8
        "
              >
                <h1 className="flex gap-2 items-center text-rose-600 font-medium">
                  <span className="border p-1 bg-rose-600 text-white rounded-full">
                    <FaFire />
                  </span>{' '}
                  Top Art & Craft
                </h1>
                <h1 className="text-5xl font-extrabold font-display my-2">
                  Easy Art & Craft for <br />
                  Beginners work
                </h1>
                <p className="text-rose-600 font-medium font-displayRoboto">
                  Stay Ahead and go again far from distributed
                </p>
                <button className="border-2 px-12 py-2 bg-rose-500 font-extrabold text-white font-displayRoboto flex items-center gap-4 rounded-md">
                  {' '}
                  <span className=" text-xl rounded-full text-white">
                    <MdOutlineDataExploration />
                  </span>{' '}
                  Explore Now
                </button>
              </div>
              <div className="my-32">
                <img
                  className="w-full h-full"
                  src="https://play-lh.googleusercontent.com/TRuzMUCeXIhKQG2-yC3GJ4V--olIMN8uDFQMzQjzo2vULLJAGs11aQZewcfCu0Qugw=w240-h480-rw"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
      </Swiper> */}

      {/* add to craft item */}
    </>
  );
};

export default Banner;
