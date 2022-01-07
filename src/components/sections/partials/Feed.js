import React from 'react';
import ProfilePreview from '../../elements/ProfilePreview';

const interested = [true, true, false, true, false, false, false, false, false, false];
const ENDPOINT = "https://iofe7t7f7k.execute-api.us-east-1.amazonaws.com/prod/feed";

class Feed extends React.Component {
  state = {
    vcs: []
  };

  // Make call to feed endpoint
  componentDidMount() {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => this.setState({
      vcs: data
    }));
  }

  render() {
    return (
      <>
        <div className="pro-pre-profile-preview-grid">
          {this.state.vcs.map((vc, index) => {
            return <ProfilePreview className="container-preview-profile" vc={vc} isInterested={interested[index]}/>
          })}
        </div>
      </>
    );
  }
}

export default Feed;