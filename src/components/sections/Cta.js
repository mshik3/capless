import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Container from './partials/WaitlistForm/Container';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
  header: PropTypes.string,
  message: PropTypes.string,
  cta_type: PropTypes.string
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
  header: "",
  message: "",
  cta_type: "waitlist"
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.full_name.value);
    console.log(event.target.company_name.value);
    console.log(event.target.company_email.value);
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div id={props.cta_type}
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              {props.header}
              </h3>
            <h5>
              {props.message}
            </h5>
          </div>
          <div className="cta-action">
            <Container triggerText={triggerText} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;