"use client"
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Pic1 from '../assests/animation_log36l1r.gif'
import {Body} from './SectionEl'
import * as $ from './SectionEl'
import './sec1.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
const Section1 = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

   


    return (<>
        
          <h3 className='text-2xl text-blue-900 text-center mt-10'>Discover Homecare at Axzons</h3>
          <Body className=' '>
          
          <Image className='lottieimg ' src={Pic1} data-aos='fade-right' data-aos-duration='2000'></Image>     
          <$.Text data-aos='fade-left' data-aos-duration='2000'>Axzons enables the delivery of comfortable Homecare services at patients’ homes. We provide one on one, highly personalized services under the supervision of Physician and Nurses. Our Homecare services place the patient and their families first, while improving treatment outcomes, reducing costs, and reducing hospital visits. We are committed to providing expert Homecare to patients so that they can recover fast in the security and comfort of their homes rather than in a hospital or clinical environment.</$.Text>         
          </Body>
        </>);
}

Section1.propTypes = propTypes;
Section1.defaultProps = defaultProps;
// #endregion

export default Section1;