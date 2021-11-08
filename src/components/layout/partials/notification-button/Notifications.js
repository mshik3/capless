import "./_notification.scss"

import React, { Component } from 'react';
import AskNed from './../../../../assets/images/profile_images/Venture Standard.png'
import BottleUp from './../../../../assets/images/profile_images/Hiya.png'

import NotificationFooter from './NotificationFooter'
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import NotificationHeader from "./NotificationHeader";

function Notifications(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="notifications">
      <img className="notification-button"
        src={require("../../../../assets/images/icons/notifications-none.svg")}
        onMouseOver={e => (e.currentTarget.src = require('../../../../assets/images/icons/notifications-active.svg'))}
        onMouseOut={e => (e.currentTarget.src = require('../../../../assets/images/icons/notifications-none.svg'))}
        onClick={() => setOpen(!open)}
        alt="Notifications"
      />
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <img className="icon-left" src={props.leftIcon}></img>
        {props.children}
        <img className="icon-right">{props.rightIcon}</img>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ maxHeight: 5000 }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <NotificationHeader/>
          <DropdownItem leftIcon={AskNed} >
            <p>Ventures Standard has sent you a message!</p>
          </DropdownItem>
          <DropdownItem leftIcon={BottleUp} >
            <p>You've matched with Hiya!</p>
          </DropdownItem>
          <NotificationFooter />
        </div>
      </CSSTransition>
    </div>
  );
}

export {
  Notifications,
  DropdownMenu
};