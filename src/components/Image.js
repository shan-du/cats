import React, { PropTypes } from 'react';
import '../styles/image.scss';

const Image = (props) => {
  const {
    index,
    src,
    loadImageError,
    className,
  } = props;

  return (
    <div
      key={`image-${index}`}
      className={className || ''}
    >
      <img
        src={src || ''}
        data-index={index}
        onError={loadImageError}
      />
    </div>
  );
};

Image.propTypes = {
  index: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  loadImageError: PropTypes.func,
};

export default Image;
