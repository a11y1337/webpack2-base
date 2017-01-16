import React, { PropTypes } from 'react';

const Header = props => (
  <header>
    <h1>{props.text || 'default'}</h1>
  </header>
);

Header.propTypes = {
  text: PropTypes.string
};

export default Header;
