import React from 'react'
import './hero.css'
import AppHeader from '../headerFit/AppHeader'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = {type: 'spring', duration:'3'}
  const mobile = window.innerWidth<=768? true : false;
  return (
    <div className='Hero' id='home'>
      <div className='blur blur-hero'></div>
        <div className='left-h'>
          {/* Header section */}
            <AppHeader/>
            <div className='the-best-ad'>
              <motion.div
                initial={{left: mobile ? '147px' : '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type:'tween'}}
              >

              </motion.div>
              <span>the best fitness club in the town</span>
            </div>
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
            </div>
          {/* figures */}
          <div className='figures'>
            <div>
              <span>
                <NumberCounter end={140} start={100} delay='4' preFix='+' />
              </span>
              <span>expert coachs</span>
            </div>
            <div>
              <span>
                <NumberCounter end={978} start={800} delay='4' preFix='+'/>
              </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
                <NumberCounter end={50} start={10} delay='4' preFix='+'/>
              </span>
              <span>fitness programs</span>
            </div>
          </div>
          {/* Hero buttons */}
          <div className='hero-buttons'>
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
          </div>
          
        </div>
        <div className='right-h'>
          <button className='btn'>Join Now</button>

          <motion.div 
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}

            className='heart-rate'
          >
            <img src={heart}/>
            <span>Heart Rate</span>
            <span>116 bpm</span>

          </motion.div>

          {/* Hero image */}
          <img src={hero_image} className='hero-image' />
          <motion.img 
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            transition={transition}
            src={hero_image_back} 
            className='hero-image-back' 
          />

          {/* Calories */}
          <motion.div 
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className='calories'
          >
            <img src={Calories} />
            <div>
              <span>CaloriesBurned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>

        </div>

    </div>
  )
}

export default Hero