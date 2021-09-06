import "./_notification.scss"

import React, { Component } from 'react';
import AskNed from './../../../../assets/images/profile_images/AskNed.jpeg'
import BottleUp from './../../../../assets/images/profile_images/BottleUp.jpeg'

import NotificationFooter from './NotificationFooter'
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import NotificationHeader from "./NotificationHeader";

function Notifications(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="notifications">
      <button className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </button>

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
            <p>AskNed has sent you a message!</p>
          </DropdownItem>
          <DropdownItem leftIcon={BottleUp} >
            <p>You've matched with BottleUp!</p>
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