import React, { PropTypes } from 'react';
import '../styles/mediaList.scss';

const MediaList = (props) => {
  const sortArrowClassName = `arrow ${props.sortOrder || 'asc'}`;

  const sortButton = (props.data.length > 0) ?
    (
      <button onClick={props.onSort}>
        Sort Fact <span className={sortArrowClassName} />
      </button>
    ) : null;

  const list = (props.data.length > 0) ?
    props.data.map(
      (item, index) => (
        [
          (<img
            key={`image-${index}`}
            className="item image"
            src={item.image || ''}
          />),
          (<p
              key={`fact-${index}`}
              className="item fact"
            >
              {item.fact || 'n/a'}
          </p>),
          (<button
            key={`remove-${index}`}
            className="item removeButton"
            data-index={index}
            onClick={props.onRemove}
          >
            remove
          </button>),
        ]
      )
    ) : null;

  return (
    <div className={`${props.className} mediaList`}>
      <div className="header">{sortButton}</div>
      <div className="content">{list}</div>
    </div>
  );
};

MediaList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  onRemove: PropTypes.func,
  onSort: PropTypes.func,
  sortOrder: PropTypes.string,
};

export default MediaList;
