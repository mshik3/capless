import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link as ScrollLink } from 'react-scroll';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section hero-background-image',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      {/* <div className="container-hero"> */}
        <div className="hero-content">
          {/* <div className="left"> */}
            <h1 className="reveal-from-bottom" data-reveal-delay="200">
              Build the next unicorn partnership <br></br>with an algorithm tailored <span className="text-color-primary">just for you</span>
            </h1>
            <ScrollLink to="waitlist" spy={false} smooth={true} className="button button-primary button-lg text-color-primary">Join Waitlist</ScrollLink>
          {/* </div> */}
          {/* <div className="right">
            <video src={require('./../../assets/videos/Capless_intro.mp4')} controls="controls" poster={require('./../../assets/videos/Capless_intro.png')}/>
          </div> */}
        </div>
        <Image
        src={require(`./../../assets/images/button_images/down-arrow.png`)}
        alt="Yes"/>
        {/* <p>
          Capless provides a stream of potential fundraising opportunities between startups and investors that are curated based on our intelligent matching algorithm
        </p> */}
      {/* </div> */}
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;