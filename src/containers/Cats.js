import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/cats';
import MediaList from '../components/MediaList';

const urls = [
  'http://mapd-cats.azurewebsites.net/catfacts',
  'http://mapd-cats.azurewebsites.net/catpics',
];

class Cats extends React.Component {
  componentDidMount() {
    const { dispatch, actions } = this.props; // eslint-disable-line
    dispatch(actions.loadCatsData(urls));
  }

  render() {
    const {
      data,
      actions,
      isLoading,
      sortOrder,
    } = this.props;

    return (
      <MediaList
        className="catsList"
        data={data}
        loadImageError={actions.loadImageError}
        onRemove={actions.removeCatData}
        onSort={actions.sortDataByFacts}
        isLoading={isLoading}
        sortOrder={sortOrder}
      />
    );
  }
}

Cats.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  sortOrder: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    data: state.cats.data,
    isLoading: state.cats.isLoading,
    sortOrder: state.cats.sortOrder,
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
