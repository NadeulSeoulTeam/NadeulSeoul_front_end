import React from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ImageFunc } from './styles';

function ImagePagination({ index, image, onImageUpdate, onImageRemove }) {
  return (
    <div key={index} className="image-item">
      <img src={image.data_url} alt="" width="300" />
      <ImageFunc>
        <BorderColorIcon color="primary" onClick={() => onImageUpdate(index)} />
        <ClearIcon color="primary" onClick={() => onImageRemove(index)} />
      </ImageFunc>
    </div>
  );
}

export default ImagePagination;
