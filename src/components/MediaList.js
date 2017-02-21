import React, { PropTypes } from 'react';
import '../styles/mediaList.scss';

const MediaList = (props) => {
  const data = [
    {
      media: 'url1',
      text: 'some text 1',
    },
    {
      media: 'url2',
      text: 'some text 2',
    },
    {
      media: 'url3',
      text: 'some text 3',
    },
  ];

  const list = data.map(
    (item, index) => (
      // todo: add valid value check
      <li key={index}>
        <img src={item.media} />
        <p>{item.text}</p>
        <a href="#">remove</a>
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
};

export default MediaList;
