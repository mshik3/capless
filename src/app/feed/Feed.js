import React from 'react';
import ProfilePreview from './components/ProfilePreview';
import getFeed from '../../utils/AppGateway';
import './style/profile-preview.scss'

const interested = [true, true, false, true, false, false, false, false, false, false];

class Feed extends React.Component {
  constructor(urlParams) {
    super();
    const query = new URLSearchParams(urlParams.params);
    const useBackendFeed = query.get('backend_feed') === 'true';
    this.state = {
      vcs: [],
      useBackendFeed
    }
  }

  // Make call to feed endpoint
  componentDidMount() {
    getFeed(this.state.useBackendFeed).then(data => {
      this.setState({vcs: data});
    });
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