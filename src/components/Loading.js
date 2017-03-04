import React, { PropTypes } from 'react';
import '../styles/loading.scss';

const Loading = (props) => {
  return (
    <img
      src={props.src || '../assets/loading.gif'}
      className={`loading ${props.className || ''}`}
    />
  );
};

Loading.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default Loading;
