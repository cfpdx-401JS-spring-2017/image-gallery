import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

List.propTypes = {
  images: PropTypes.array,
};

export default function List(props) {

  return (
    <div>
      <ListItem images={props.images} />
    </div>
  );
}
