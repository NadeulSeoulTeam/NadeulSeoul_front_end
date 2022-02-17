/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { LoadStoreButton } from './styles';
import CourseStoreModal from './CourseStoreModal';

function CourseStoreLoad({ pictureList }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      {pictureList !== undefined && pictureList.length > 0 && (
        <div>
          <LoadStoreButton onClick={handleOpen}>사진 더보기</LoadStoreButton>
          <CourseStoreModal
            handleClose={handleClose}
            open={open}
            pictureList={pictureList}
          />
        </div>
      )}
    </div>
  );
}
export default CourseStoreLoad;
