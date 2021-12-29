import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  return (
    <footer
      {...props}
    >
      <div className="site-footer">
          <div className="footer-container">
            <div className="footer-top">
              <FooterSocial />
            </div>
            <br></br>
            <div className="footer-bottom">
              <FooterNav />
            </div>
          </div>
        </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;