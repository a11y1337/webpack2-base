import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from 'actions';

import Header from 'components/Header';
import Toggle from 'components/Buttons/Toggle';
import Menu from '../Layout/Menu';
import '../../styles/style.css';
import utils from '../../js/utils';

class App extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      filterEvents: PropTypes.function,
      onInit: PropTypes.function,
      removeEvent: PropTypes.function
    })
  };

  componentWillMount() {
  //  const { } = this.props;
    utils.deviceInfo();
  }

  render() {
    const { brand } = this.props;
    window.console.log('AppProps', this.props);
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Menu type={'nav'} />
        <Toggle bgColor={'#ffffff'} />
        <div className="container">
          <Header />
        </div>
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
)(App);
