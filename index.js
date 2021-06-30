import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className = "profile-header">
          <img className="profile-image" src={`profile_images/${this.props.name}.jpeg`} />
          <h1 className="profile-name">{this.props.name}</h1>
        </div>
        <h2 className="divider">About Us</h2>
        <p>{this.props.description}</p>
        <h2 className="divider">Fast Facts</h2>
        <div className="fun-facts-container">
          <div className="column">
            <h5 className="facts-header">5.6 million</h5>
            <p className="facts-content">active listings worldwide (as of Sept. 30, 2020)</p>
          </div>
          <div className="column">
            <h5 className="facts-header">100,000</h5>
            <p className="facts-content">cities with active Airbnb listings (as of Sept. 30, 2020)</p>
          </div>
          <div className="column column-last">
            <h5 className="facts-header">220+</h5>
            <p className="facts-content">countries and regions with Airbnb listings (as of Sept. 30, 2020)</p>
          </div>
        </div>
        <h2 className="divider">Team Members</h2>
        <div className="team-members-container">
          <div className="team-column">
            <img className="team-image" src={`team_images/Abhinav.jpeg`}/>
            <p className="member-info">Abhinav Subramaniam</p>
            <p className="member-info"><b>CEO & Co-Founder</b></p>
          </div>
          <div className="team-column">
            <img className="team-image" src={`team_images/Brian.jpeg`}/>
            <p className="member-info">Brian Thompson</p>
            <p className="member-info"><b>CDO & Co-Founder</b></p>
          </div>
          <div className="team-column">
            <img className="team-image" src={`team_images/Mustafa.jpeg`}/>
            <p className="member-info">Mustafa Shikora</p>
            <p className="member-info"><b>CTO & Co-Founder</b></p>
          </div>
        </div>
      </div>
    );
  }
}

class ProfilePreview extends React.Component {
  render() {
    return (
      <button
        className="profile-preview"
        onClick={() => this.props.onClick()}>
        <img className="preview-image" src={`profile_images/${this.props.name}.jpeg`} />
        <p>{this.props.name}</p>
      </button>
    );
  }
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startUps: ["Capless", "AskNed", "BottleUp", "Elevatr", "EverCharg", "Flash", "GreenSpork", "Iterate", "TeamSync"],
      description: "Capless was born in 2021 when two Hosts welcomed three guests to their San Francisco home, and has since grown to 4 million Hosts who have welcomed more than 900 million guest arrivals in almost every country across the globe. Every day, Hosts offer one-of-a-kind stays and unique Experiences that make it possible for guests to experience the world in a more authentic, connected way.",
      selectedName: null
    }
  }

  renderProfilePreview(i) {
    const name = this.state.startUps[i];
    return <ProfilePreview name={name} onClick={() => this.setState({selectedName: name})}/>;
  }

  renderProfile() {
    if (this.state.selectedName) {
      return <Profile name={this.state.selectedName} description={this.state.description}/>;
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.renderProfilePreview(0)}
          {this.renderProfilePreview(1)}
          {this.renderProfilePreview(2)}
        </div>
        <div>
          {this.renderProfilePreview(3)}
          {this.renderProfilePreview(4)}
          {this.renderProfilePreview(5)}
        </div>
        <div>
          {this.renderProfilePreview(6)}
          {this.renderProfilePreview(7)}
          {this.renderProfilePreview(8)}
        </div>
        <div className = "profile-div">
          {this.renderProfile()}
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-feed">
          <Feed />
        </div>
        Your daily feed
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

