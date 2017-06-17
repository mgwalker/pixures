import React from 'react';
import PropTypes from 'prop-types';

const Picture = props => (
  <a className="picture" onClick={() => props.copyURL(props.info.uri)} role="button" tabIndex="0">
    <header>
      {props.info.name}
    </header>
    <div className="itself">
      <img src={props.info.uri} alt={props.info.name} />
    </div>
  </a>
);

Picture.propTypes = {
  info: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  copyURL: PropTypes.func.isRequired
};

export default Picture;
