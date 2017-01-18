import React, { PropTypes } from 'react';
import utils from '../../../js/utils';

const BASE_COLOR = '#FFFFF'
const ACCENT_COLOR = '#FFF'
const BACKGROUND_COLOR = 'rgba(0, 0, 0, .5)'

const style = {
  container: {
    display: 'flex',
    padding: 1,
    margin: 10,
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 50,
    color: utils.getContrastTextColor(BACKGROUND_COLOR)
  },
  item: {
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },
  active: {
    backgroundColor: BASE_COLOR,
    borderRadius: 50,
    color: utils.getContrastTextColor(BASE_COLOR)

  }
};

const Header = props => {
window.alert(utils.getContrastTextColor(props.bgColor))
  return (
  <div style={style.container}>
    <div style={{ ...style.item, ...style.active, backgroundColor: props.bgColor, color: utils.getContrastTextColor(props.bgColor) || 'inherit' }}>{props.leftText || 'left'}</div>
    <div style={style.item}>{props.rightText || 'right'}</div>
  </div>
);
}

Header.propTypes = {
  bgColor: PropTypes.string,
  leftText: PropTypes.string,
  rightText: PropTypes.string
};

export default Header;
