import React from 'react';
import ListItem from './ListItem';

export default function List(props) {

  return (
    <div>
      <ListItem images={props.images}/>
    </div>
  );
}
