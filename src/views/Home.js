import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import TheTeam from '../components/sections/TheTeam';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero hasBgColor={false} invertColor={false} />
      <FeaturesSplit invertMobile topDivider={false} imageFill />
      {/* <Testimonial topDivider /> */}
      {/* <TheTeam /> */}
      <Cta split invertColor header="Join our waitlist!" message="We'll be opening up to new members soon! Enter your email to be notified when space opens up."/>
    </>
  );
}

export default Home;