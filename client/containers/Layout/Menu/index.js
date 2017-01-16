import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from 'components/Menu';
import Nav from 'components/Navigator';
import * as AppActions from 'actions';
import utils from '../../../js/utils';

class MenuContainer extends Component {
  static propTypes = {
    type: PropTypes.string,
    brand: PropTypes.shape({
      palette: PropTypes.shape({
        main: PropTypes.string
      })
    }),
    menulinks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
      auth: PropTypes.bool
    })),
    navconfig: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
      iconEnabled: PropTypes.bool,
      textEnabled: PropTypes.bool,
      textStyles: PropTypes.shape({
        fontSize: PropTypes.number,
        fontWeight: PropTypes.string,
        textTransform: PropTypes.string
      }),
      path: PropTypes.string,
      auth: PropTypes.bool
    }))
  };

  componentWillMount() {
    const { type } = this.props;
    utils.deviceInfo();
    if (type === 'menu') this.Wrapper = Menu;
    if (type === 'nav') this.Wrapper = Nav;
  }

  render() {
    window.console.log('MenuState', this.props);
    const { menulinks, brand, type, navconfig } = this.props;
    const { Wrapper } = this;
    let links;
    if (type === 'menu') links = menulinks;
    if (type === 'nav') links = navconfig;

    return (
      <div className="container">
        <Wrapper bgColor={brand.palette.main} links={links} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { menulinks, brand, navconfig } = state.site;
  return {
    brand,
    menulinks,
    navconfig
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
