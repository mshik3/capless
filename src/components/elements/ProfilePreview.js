import React from 'react';
import PropTypes from 'prop-types';
import Image from '../elements/Image';
import ActionButtons from '../elements/ActionButtons';
import { Link } from 'react-router-dom';

const propTypes = {
  name: PropTypes.string
}

const defaultProps = {
  name: ''
}


const ProfilePreview = ({name, series, industry, revenue, isInterested}) => {
  const linkObject = {
    pathname: '/company',
    state: {
      name,
      series,
      industry,
      revenue
    }
  }

  return (
    <Link to={linkObject}>
      <div className="profile-preview">
        <div className = "profile-preview-header">
        <Image
          src={require(`./../../assets/images/profile_images/${name}.png`)}
          alt="Profile"
          width={60}
          height={60}
          className={"image-preview"}/>
          <h4 className="profile-name">{name}</h4>
          {isInterested &&
            <p className="profile-interested">Interested</p>
          }
        </div>
        <p>Build the next unicorn partnership with an algorithm tailored for you</p>
        <div className="fun-facts-containe">
          <div className="column">
            <h5 className="facts-header">{series}</h5>
          </div>
          <div className="column">
            <h5 className="facts-header">{industry}</h5>
          </div>
          <div className="column column-last">
            <h5 className="facts-header">{revenue}</h5>
          </div>
        </div>
        <ActionButtons/>
      </div>
    </Link>
  );
}

ProfilePreview.propTypes = propTypes;
ProfilePreview.defaultProps = defaultProps;

export default ProfilePreview;
