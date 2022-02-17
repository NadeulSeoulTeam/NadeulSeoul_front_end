/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// style
import Modal from '@mui/material/Modal';
import { ImgDisplay, LeftBtn, RightBtn } from './styles';

export default function CourseStoreModal({ handleClose, open, pictureList }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [imageUrl, setImageUrl] = useState([
    '/test_img/0.JPG',
    '/test_img/1.JPG',
    '/test_img/2.JPG',
    '/test_img/3.JPG',
    '/test_img/4.JPG',
    '/test_img/5.JPG',
  ]);

  const moveLeft = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const moveRight = () => {
    if (currentPage === pictureList.length - 1) return;
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div>
          <ImgDisplay
            alt="course image"
            src={`http://13.124.34.5/api/v1/image/${pictureList[currentPage]}`}
          />
          <LeftBtn onClick={moveLeft} />
          <RightBtn onClick={moveRight} />
        </div>
      </Modal>
    </div>
  );
}
