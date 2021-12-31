import React from 'react';
import PropTypes from 'prop-types';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  name: PropTypes.string
}

const defaultProps = {
  name: ''
}


const ProfilePreview = ({name, series, industry, revenue, isInterested}) => {
  const linkObject = {
    pathname: '/vc',
    state: {
      name,
      series,
      industry,
      revenue,
      aboutUs: "Venture Standard is an agriculture technology focused investment firm with a history of providing its portfolio companies with a strong and dependable network, future funding options, and access to a wide talent pool to work with. Learn more about Venture Standard's mission below!"
    }
  }

  return (
    <Link to={linkObject}>
      <div className="pro-pre-profile-preview">
        <div className = "pro-pre-profile-preview-header">
        <Image
          src={require(`./../../assets/images/profile_images/${name}.png`)}
          alt="Profile"
          width={90}
          height={90}
          className={"pro-pre-image-preview"}/>
          <h4 className="pro-pre-profile-name">{name}</h4>
          {isInterested &&
            <p className="pro-pre-profile-interested">Interested</p>
          }
        </div>
        <p>Build the next unicorn partnership with an algorithm tailored for you</p>
        <div className="pro-pre-fun-facts-container">
          <div className="pro-pre-column">
            <h6 className="pro-pre-facts-header">Fundraising Stage</h6>
            <h3 className="pro-pre-facts-content">{series}</h3>
          </div>
          <div className="pro-pre-column">
            <h6 className="pro-pre-facts-header">Industry</h6>
            <h3 className="pro-pre-facts-content">{industry}</h3>
          </div>
          <div className="pro-pre-column pro-pre-column-last">
            <h6 className="pro-pre-facts-header">Revenue</h6>
            <h3 className="pro-pre-facts-content">{revenue}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

ProfilePreview.propTypes = propTypes;
ProfilePreview.defaultProps = defaultProps;

export default ProfilePreview;
