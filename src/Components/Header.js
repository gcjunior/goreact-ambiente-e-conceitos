import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <nav>
    <p>
      {props.children}
    </p>
  </nav>
);

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
