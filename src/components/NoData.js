import React, { PropTypes } from 'react';
import '../styles/noData.scss';

const NoData = (props) => {
  return (
    <h3 className={`noData ${props.className || ''}`}>
      <img src={props.src || '../assets/sad-cat.gif'} />
      <br/>
      <span>{props.text || 'No Data'}</span>
    </h3>
  );
};

NoData.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default NoData;
