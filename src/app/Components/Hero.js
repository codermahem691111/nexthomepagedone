"use client"
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as $ from './HeroEl'
import './HeroEl'
import { BodyContainer,Button1 } from './HeroEl';
import './hero.css'
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
const Hero = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);


    return (<>
            <BodyContainer id='bgcnt' >
            
            <$.MyText className='text-center ' data-aos='fade-left' data-aos-duration='700' >New York State HOMECARE & CDPAP
            Licensed Agency
            </$.MyText> 
            <div className='flex flex-row justify-center items-center xs:flex-col mt-10'>
            <Button1 className='text-center'>CDPAP/FI</Button1>
            <Button1 className='text-center ml-10 xs:mt-6 xs:ml-0'>Traditional Homecare</Button1>
            </div>  
            <div className='flex flex-row justify-center items-center xs:flex-col mt-10'>
            <Button1 className='text-center'>Call: 100976</Button1>
            <Button1 className='text-center ml-10 xs:mt-6 xs:ml-0'>Be Cargevar</Button1>
            </div>   
           <$.MyText  data-aos='fade-right' data-aos-duration='800'>Having A Caregiver Come To Your Home Should Be Reassuring, Not Overwhelming. We Manage Your Homecare Needs, Every Step Of The Way.</$.MyText>
            </BodyContainer>
     

           



           </>);
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
// #endregion

export default Hero;