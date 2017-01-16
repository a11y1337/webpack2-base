import React, { PropTypes } from 'react';

const Menu = props => (
  <div style={{ display: 'flex', color: '#fff', backgroundColor: props.bgColor, justifyContent: 'space-around' }}>
    {props.links.map((r, i) =>
      <div style={{ flex: 1, textAlign: 'center', padding: 10 }} key={i}>{r.name}</div>
    )}
  </div>
);

Menu.propTypes = {
  bgColor: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    auth: PropTypes.bool
  }))
};

export default Menu;
