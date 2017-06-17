import React from 'react';
import ReactDOM from 'react-dom';
import request from 'browser-request';
import { imageMetadataURL } from './env';
import Picture from './picture';
import './style.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      copyURL: 'whoopie',
      notificationClass: '',
      setNotificationFadeTimeout: null,
      setNotificationHideTimeout: null,
      filter: '',
      pictureList: []
    };

    request.get(imageMetadataURL, (_, __, b) => {
      let pictures = b;
      if (typeof b === 'string') {
        try {
          pictures = JSON.parse(b);
        } catch (e) {
          console.log('Error getting image JSON'); // eslint-disable-line no-console
          console.log(e);                          // eslint-disable-line no-console
        }
      }

      if (Array.isArray(pictures)) {
        this.setState({ pictureList: pictures });
      }
    });

    this.copyURL = (url) => {
      this.setState({ copyURL: url });

      clearTimeout(this.state.setNotificationFadeTimeout);
      clearTimeout(this.state.setNotificationHideTimeout);

      setTimeout(() => {
        document.getElementById('copy-box').select();
        document.execCommand('copy');
        this.setState({ notificationClass: 'show' });
        this.state.setNotificationFadeTimeout = setTimeout(() => this.setState({ notificationClass: 'fade' }), 500);
        this.state.setNotificationHideTimeout = setTimeout(() => this.setState({ notificationClass: '' }), 3000);
      }, 20);
    };

    this.setSearch = (e) => {
      this.setState({ filter: e.target.value });
    };

    this.filterPictures = (picture) => {
      if (this.state.filter.length > 0) {
        if (picture.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
          return true;
        }
        for (const tag of picture.tags) {
          if (tag.toLowerCase().includes(this.state.filter.toLowerCase())) {
            return true;
          }
        }
      } else {
        return true;
      }
      return false;
    };
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input type="text" placeholder="search" onChange={this.setSearch} />
        </div>
        <div className="picture-grid">
          { this.state.pictureList.filter(this.filterPictures).map(pic => (<Picture key={`picture-${pic.name}`} info={pic} copyURL={this.copyURL} />)) }
        </div>
        <textarea id="copy-box" value={this.state.copyURL} readOnly />
        <div id="copy-notification" className={this.state.notificationClass}>URL copied to clipboard</div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('images')
);
