import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = ({ source, width, height }) => {
  return (
    <Fragment>
      <img src={source} alt="image" width={width} height={height} />
    </Fragment>
  );
};

Image.protoTypes = {
  source: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

Image.defaultProps = {
  width: 400,
  height: 300
};

export default Image;
