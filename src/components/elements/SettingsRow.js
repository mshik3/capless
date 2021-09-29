import React from 'react';


const SettingsRow = ({name}) => {
  return (
    <div className="settings-row">
      <div id="name">{name}</div>
      <div id="three-dots">...</div>
    </div>
  );
}

export default SettingsRow;
