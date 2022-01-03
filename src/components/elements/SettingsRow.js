import React from 'react';


const SettingsRow = ({name}) => {
  return (
    <div className="settings-row">
      <input type="text" placeholder={name} className='settings-input'></input>
      <div id="three-dots">...</div>
    </div>
  );
}

export default SettingsRow;
