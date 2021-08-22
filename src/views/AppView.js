import React, {Component} from 'react';
// import sections
import AppContent from '../components/sections/AppContent';
import LeftBar from '../components/sections/LeftBar';
import RightBar from '../components/sections/RightBar';

class AppView extends Component {
  constructor() {
    super()
    this.state = {
      currentContent: "Daily Feed"
    }
  }

  // Callback for switching app content chosen by left bar
  selectContent = (content) => {
    console.log(content);
    this.setState({
      currentContent: content
    })
  }

  render() {
    return (
      <>
        <div className="container app-view">
          <LeftBar callBack={this.selectContent}/>
          <AppContent callBack={this.selectContent} currentContent={this.state.currentContent}/>
          <RightBar/>
        </div>
      </>
    );
  }
}

export default AppView