import React from 'react';
// import sections
import AppContent from '../components/sections/AppContent';
import ContentBar from '../components/sections/ContentBar';
import MessageBar from '../components/sections/MessageBar';

function AppView(props) {
  return (
    <>
      <div className="container app-view">
        <AppContent props={props}/>
      </div>
    </>
  );
}

export default AppView