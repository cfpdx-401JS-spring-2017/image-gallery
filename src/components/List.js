import React from 'react';
import PropTypes from 'prop-types';
import ListImage from './ListImage';

List.propTypes = {
  poms: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired
  }))
};

export default function List({ poms }) {
  return (
    <ul>
      {poms.map((pom, i) => <ListImage key={i} {...pom} />)}
    </ul>
  );
}