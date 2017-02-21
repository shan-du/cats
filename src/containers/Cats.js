import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/cats';
import MediaList from '../components/MediaList';

export const Cats = (props) => {
  return (
    <MediaList
      className="catsList"
      data={props.data}
    />
  );
};

Cats.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.catsData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cats);
