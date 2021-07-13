import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h4 className="m-0">
      <Link to="/">
        <div className="logoRow">
            <div className="logoColumn">
                <Image
                    src={require('./../../../assets/images/logo_images/DarkLogoText.png')}
                    alt="Capless"
                    width={200} />
            </div>
            <div className="logoColumn">
                <Image
                    src={require('./../../../assets/images/logo_images/DarkIcon.png')}
                    alt="Capless Icon"
                    width={40} />
            </div>
        </div>
      </Link>
      </h4>
    </div>
  );
}

export default Logo;