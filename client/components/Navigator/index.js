import React, { PropTypes } from 'react';

const Menu = props => (
  <div style={{ display: 'flex', color: '#fff', backgroundColor: props.bgColor, justifyContent: 'space-between' }}>
    {props.links.map((r, i) =>
      <div style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} key={i}>
        {r.iconEnabled && <img alt={r.name} src={r.icon} />}
        {r.textEnabled && <span style={r.textStyles}>{r.name}</span>}
      </div>
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
