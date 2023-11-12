"use client"
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './crsl.css';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Carousel = () => {
  return (<>



    <h3 className='text-center text-2xl text-cyan-950 mt-10 mb-10'> Testomonials </h3>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        
        <SwiperSlide className='slide1'>
         <h4 className=''>
         We can’t thank you enough for sending us such wonderful nurses to take care of dad. Mary was wonderful and took control of the situation. Grace and Paul took great care of him. Words cannot express how thankful we are.
         </h4>
        
        
        </SwiperSlide>
        <SwiperSlide className='slide2'>
        
        <h4 className=''>
        
I just want to let you know what a great job Joey did helping me out the last few days.He was always kind,considerate and very professional. I am very grateful to have received the quality of service Axzons provided. Thank You Rosemarie. Sincerely, Reginald.

    
        </h4>
        
        </SwiperSlide>
        <SwiperSlide className='slide3'>
        
       <h4> Sophia is absolutely wonderful with my mother. I can sleep better at night knowing that mom is in good hands. When I think of a CNA helping someone in their home, it is someone like Sophia.</h4>


    
        
        </SwiperSlide>
        <SwiperSlide  className='slide4'>
        <h4>Axzons is the nation’s fastest-growing full service homecare provider. we provide state of the art client focused services. Call us today to discuss the homecare needs for you or your loved ones and our team would be happy to assist you.</h4></SwiperSlide>
        
        
      </Swiper>
    
       
    
    
    
    
    </>);
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
// #endregion

export default Carousel;