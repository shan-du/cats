import React, { PropTypes } from 'react';
import '../styles/mediaList.scss';

const MediaList = (props) => {
  const list = props.data.map(
    (item, index) => (
      // todo: add valid value check
      <li key={index}>
        <img src={item.media} />
        <p>{item.text}</p>
        <a
          href={`#${index}`}
          onClick={props.onRemove}
        >
          remove
        </a>
      </li>
    )
  );

  return (
    <ul className={`${props.className} mediaList`}>
      {list}
    </ul>
  );
};

MediaList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  onRemove: PropTypes.func,
};

export default MediaList;
