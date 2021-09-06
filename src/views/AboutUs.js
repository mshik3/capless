import React from 'react';
// import sections
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Cta from '../components/sections/Cta';

const AboutUs = () => {

  return (
    <>
      <FeaturesTiles />
      <Cta split invertColor cta_type="journey" header="Join our journey!" message="Capless is continuing to grow everyday! Subscribe to our newsletter to hear about our latest updates."/>
    </>
  );
}

export default AboutUs;