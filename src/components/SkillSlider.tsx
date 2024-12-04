import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css'; // Main Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiNestjs } from 'react-icons/si';
import SkillItem from './SkillItem';
import 'swiper/css/autoplay'; // Autoplay styles (optional)

const SkillSlider = () => {
  return (
    <Swiper
      className='cursor-pointer'
      modules={[Navigation, Pagination, Autoplay]} // Activate modules
      spaceBetween={20} // Space between slides
      slidesPerView={3} // Number of slides to show at once
      loop={true}
      autoplay={{ 
        delay: 3000, 
        disableOnInteraction: false // Important to keep autoplay after interaction
      }}
      speed={1000}
      pagination={{ clickable: true }} // Pagination
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
    >
      <SwiperSlide className='flex flex-col justify-center items-center'>
        <SkillItem Icon={FaHtml5} color="#F04037" header='HTML' description='I use HTML to build awesome web pages with animation' />
      </SwiperSlide>
      <SwiperSlide className='flex flex-col justify-center items-center'>
        <SkillItem Icon={FaCss3Alt} color="#5454D4" header='CSS' description='I use CSS to style my web pages' />
      </SwiperSlide>
      <SwiperSlide className='flex flex-col justify-center items-center'>
        <SkillItem Icon={IoLogoJavascript} color="#F0DB4F" header='JavaScript' description='I use JavaScript to build interactive web pages' />
      </SwiperSlide>
      <SwiperSlide className='flex flex-col justify-center items-center'>
        <SkillItem Icon={BiLogoPostgresql} color="#5454D4" header='Postgresql' description='I use Postgresql or MongoDB to manage databases' />
      </SwiperSlide>
      <SwiperSlide className='flex flex-col justify-center items-center'>
        <SkillItem Icon={SiNestjs} color="#F0DB4F" header='Nest JS' description='I use Nest JS to build server-side web applications' />
      </SwiperSlide>
      <SwiperSlide className='flex flex-col justify-center items-center'>
        <SkillItem Icon={FaReact} color="#F04037" header='React JS' description='I use React JS to build web applications' />
      </SwiperSlide>
    </Swiper>
  );
};

export default SkillSlider;
