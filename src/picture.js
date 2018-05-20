import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getStaticImageUri = uri => uri.replace(/\.gif/, 'h.jpg');

class Picture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUri: getStaticImageUri(props.info.uri)
    };
  }

  hover() {
    this.setState({ imgUri: this.props.info.uri });
  }

  unhover() {
    this.setState({ imgUri: getStaticImageUri(this.props.info.uri) });
  }

  render() {
    const {
      copyURL,
      info: { uri, name }
    } = this.props;

    return (
      <a
        className="picture"
        onClick={() => copyURL(uri)}
        role="button"
        tabIndex="0"
      >
        <header>{name}</header>
        <div className="itself">
          <img
            src={this.state.imgUri}
            onMouseEnter={() => this.hover()}
            onMouseLeave={() => this.unhover()}
            alt={name}
          />
        </div>
      </a>
    );
  }
}

Picture.propTypes = {
  info: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  copyURL: PropTypes.func.isRequired
};

export default Picture;
