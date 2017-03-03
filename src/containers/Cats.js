import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/cats';
import MediaList from '../components/MediaList';

class Cats extends React.Component {
  componentDidMount() {
    const { dispatch, actions } = this.props; // eslint-disable-line
    const urls = [
      'http://mapd-cats.azurewebsites.net/catfacts',
      'http://mapd-cats.azurewebsites.net/catpics',
    ]
    dispatch(actions.loadCatsData(urls));
  }

  render() {
    const { data, actions } = this.props;
    return (
      <MediaList
        className="catsList"
        data={data}
        onRemove={actions.removeCatData}
      />
    );
  }
}

Cats.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.cats.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cats);
