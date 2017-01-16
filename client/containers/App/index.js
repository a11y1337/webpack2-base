import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from 'actions';

import Header from 'components/Header';
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
  //  const { actions } = this.props;

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Menu type={'nav'} />
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
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
