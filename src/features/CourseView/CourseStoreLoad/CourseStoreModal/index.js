/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// MUI
// import Card from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,

  boxShadow: 24,
  p: 4,
};

const ButtonLeftStyle = {
  position: 'absolute',
  top: '50%',
  left: '10%',
  transform: 'translate(-50%, -50%)',
  width: 60,
  height: 60,
  p: 4,
};

const ButtonRightStyle = {
  position: 'absolute',
  top: '50%',
  right: '10%',
  transform: 'translate(-50%, -50%)',
  width: 60,
  height: 60,
  p: 4,
};

export default function CourseStoreModal({ handleClose, open }) {
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
    if (currentPage === 5) return;
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div>
          <button type="submit" style={ButtonLeftStyle} onClick={moveLeft}>
            {'<'}
          </button>
          <img alt="1" style={style} src={imageUrl[currentPage]} />
          <button type="submit" style={ButtonRightStyle} onClick={moveRight}>
            {'>'}
          </button>
        </div>
      </Modal>
    </div>
  );
}
