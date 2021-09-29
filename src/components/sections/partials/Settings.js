import React from 'react';
import SettingsRow from '../../elements/SettingsRow';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
const SortableItem = sortableElement(({setting}) => <SettingsRow name={setting} />);
const SortableContainer = sortableContainer(({children}) => {
  return <div>{children}</div>;
});

class Settings extends React.Component {
  state = {
    settings: ["Industry", "Location", "Revenue", "Check Size", "Fundraising Round", "Company Age", "Company Size", "Incubators"]
  };

  // Update array when state changes
  arrayMove = (array, from, to) => {
    const newArray = array.slice();
    newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
    return newArray;
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({settings}) => ({
      settings: this.arrayMove(settings, oldIndex, newIndex)
    }));
  };

  render() {
    return (
      <div className="settings">
        <h3>What matters to you?</h3>
        <SortableContainer onSortEnd={this.onSortEnd}>
          {this.state.settings.map((value, index) => (
            <SortableItem index={index} setting={value} />
          ))}
        </SortableContainer>
      </div>
    );
  }
}

export default Settings;