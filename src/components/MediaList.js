import React, { PropTypes } from 'react';
import Loading from './Loading';
import NoData from './NoData';
import '../styles/mediaList.scss';

const MediaList = (props) => {
  if (props.isLoading) {
    return (<Loading />);
  }

  let listContent;

  if (props.data.length <= 0) {
    listContent = (<NoData text="No Catz Here" />);
  }
  else {
    const sortArrowClassName = `arrow ${props.sortOrder || 'asc'}`;
    const sortButton = (
      <button onClick={props.onSort}>
        Sort Fact <span className={sortArrowClassName} />
      </button>
    );
    const list = props.data.map(
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
    );

    listContent = (
      <div className={`${props.className} mediaList`}>
        <div className="header">{sortButton}</div>
        <div className="content">{list}</div>
      </div>
    );
  }

  return listContent;
};

MediaList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  onRemove: PropTypes.func,
  onSort: PropTypes.func,
  sortOrder: PropTypes.string,
};

export default MediaList;
