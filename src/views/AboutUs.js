import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import TheTeam from '../components/sections/TheTeam';
import Cta from '../components/sections/Cta';

const AboutUs = () => {

  return (
    <>
      <FeaturesTiles />
      <Cta split invertColor/>
    </>
  );
}

export default AboutUs;