import React, { useState } from 'react';

import { LoadStoreButton } from './styles';
import CourseStoreModal from './CourseStoreModal';

function CourseStoreLoad() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <LoadStoreButton onClick={handleOpen}>사진 더보기</LoadStoreButton>
      <CourseStoreModal handleClose={handleClose} open={open} />
    </div>
  );
}
export default CourseStoreLoad;
