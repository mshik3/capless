import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Notifications, DropdownMenu } from './partials/notification-button/Notifications'
import CompanyName from './partials/CompanyName'
import {ReactComponent as CompanyProfileIcon} from '../../assets/images/icons/company.svg'
import {ReactComponent as UserAccountProfileIcon} from '../../assets/images/icons/user-account-profile.svg'
import {ReactComponent as HomeIcon} from '../../assets/images/icons/home.svg'
import {ReactComponent as SettingsIcon} from '../../assets/images/icons/settings.svg'
import {ReactComponent as MessagesIcon} from '../../assets/images/icons/messages.svg'

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  const linkObject = {
    pathname: '/company',
    state: {
      name: "Pear Products",
      aboutUs: "Pear Products is a software technology company focused on providing the solution to the world's lack of accessibility to natural, non-modified, and locally sourced fruits and vegetables. Pear aims to tackle food shortage with logistic analysis and algorithmic supply chain orientation. Learn more about Pear below!"
    }
  }

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <CompanyName />
          {!hideNav &&
            <>
              <nav
                ref={nav}
                className={classNames('header-nav', isActive && 'is-active')}
              >
                <div className="header-nav-inner">
                  <ul className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}
                  >
                    <li>
                      <Link className="nav-bar-icon" to="/feed">
                        <HomeIcon className="nav-bar-icon"/>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-bar-icon" to="/profile">
                        <UserAccountProfileIcon className="nav-bar-icon"/>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-bar-icon" to={linkObject}>
                        <CompanyProfileIcon className="nav-bar-icon"/>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-bar-icon" to="/messages">
                        <MessagesIcon className="nav-bar-icon"/>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-bar-icon" to="/settings">
                        <SettingsIcon className="nav-bar-icon"/>
                      </Link>
                    </li>
                    <Notifications>
                      <DropdownMenu></DropdownMenu>
                    </Notifications>
                  </ul>
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
