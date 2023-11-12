"use client"
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import {AiFillTwitterSquare } from 'react-icons/ai';
import {AiOutlineGooglePlus } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import {AiOutlineYoutube} from 'react-icons/ai';
import './foo.css'
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
const Foo = () => {
    return <>
    <div  className='mt-10 ' id='rowfooter1'>
    <div className='grid grid-cols-4  place-items-center justify-center items-center  mt-10 ml-10 mr-10  xs:grid-cols-1  ' id='rowf1'>
       <div className='mt-10 mb-10 '>
         <h3 className='text-4xl text-stone-400 '>Ax<span className='text-green-500'>ona</span></h3>
         <h2  className='text-xs text-stone-400 mb-10'>homecare</h2>
         <h2  className='text-2xl text-stone-400'>About us</h2>
         <h2  className='text-lg text-stone-400'>Why  Cargeiver  clinic</h2> 
         <h2  className='text-lg text-stone-400'>Vision and mission</h2>
         <h2  className='text-lg text-stone-400'>Management Team</h2>
         <h2  className='text-lg text-stone-400'>Careears</h2>
         <h2  className='text-lg text-stone-400'>Media</h2> 
       </div>
       <div className='mt-10 mb-10 '>
       <h2  className='text-2xl text-stone-400 '>Our Location</h2>
       <h2  className='text-lg text-stone-400'>Newwork</h2> 
       <h2  className='text-lg text-stone-400'>New Jersy</h2>
       <h2  className='text-lg text-stone-400'>Pennsylvenia</h2>
       <h2  className='text-lg text-stone-400'>Georgia</h2>
      
       </div>
      <div className='mt-10 mb-10 '>
      <h2  className='text-2xl text-stone-400 '>Our  Doctors</h2>
      <h2  className='text-lg text-stone-400'>List Expert  Doctors</h2> 
      <h2  className='text-lg text-stone-400'>Become affiliate</h2>
       
       </div>
   
       <div className='mt-10 mb-10 '>
       <h2  className='text-2xl text-stone-400 '>Our Services</h2>
       <h2  className='text-lg text-stone-400'>Home Care</h2> 
       <h2  className='text-lg text-stone-400'>LiveinCare</h2>
       <h2  className='text-lg text-stone-400'>Cardiological Care</h2>
       <h2  className='text-lg text-stone-400'>Respite Care</h2>
       <h2  className='text-lg text-stone-400'>Nursing service</h2>
        </div>
       </div>
    
</div> 


<div className='grid grid-cols-3 xs:grid-cols-1 place-items-center pl-10 pr-10  bg-sky-700 '  id='rowfooter2'>
<div className='mt-10'>
<h2 className='text-2xl xs:text-xs'>100% secure payments</h2>
<h2>all major cards are accepted</h2>

</div>

   <div className='flex flex-row  mt-10'>
   
   <AiOutlineFacebook className='icons'  size='2rem'/>
   <AiFillTwitterSquare className='icons' size='2rem'/>
   <AiOutlineGooglePlus className='icons' size='2rem'/>
   <FiLinkedin className='icons' size='2rem'/>
   <AiOutlineYoutube className='icons' size='2rem'/>
   </div>
  <div className='flex flex-row mt-10'>
  <h2 className='text-2xl xs:text-xs'>terms  and conditions</h2>
  <h2 className='text-2xl  xs:text-xs'>privacy policy</h2>
  </div>
</div>

 <h2 className='text-xl text-center  pt-10 pb-10 text-stone-400 '>@Developed By Maheem@</h2>


    
    
    
    
    
    </>;
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;
// #endregion

export default Foo;