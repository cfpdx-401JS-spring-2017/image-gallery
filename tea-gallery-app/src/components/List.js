import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

List.PropTypes = {
  images: PropTypes.array.required,
  onDeleteImage: PropTypes.func.required
};

export default function List(props) {

  return (
    <div>
      <ListItem
        images={props.images}
        onDeleteImage={props.onDeleteImage}
      />
    </div>
  );
}
