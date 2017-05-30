import React from 'react';
import PropTypes from 'prop-types';

AddImage.propTypes = {
  images: PropTypes.array,
};

export default function AddImage(props) {
  return (
    <form className="add-image">
    <label>Image name<input></input></label>
    <label>Description<input></input></label>
    <label>URL<input></input></label>
    <button type="submit" onClick={props.onAddImage}>Add</button>
    </form>
  );
}

// https://s-media-cache-ak0.pinimg.com/originals/ce/ee/01/ceee01796583f2be86083bc9d563b806.jpg