import React from 'react';
import Hero from '../components/sections/Hero';
import VideoSection from '../components/sections/VideoSection';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero hasBgColor={false} invertColor={false} />
      <div className="white-background">
      <VideoSection />
      <FeaturesSplit invertMobile topDivider={false} imageFill />
      </div>
      <Cta split invertColor header="Join our waitlist!" message="We'll be opening up to new members soon! Enter your email to be notified when space opens up."/>
    </>
  );
}

export default Home;