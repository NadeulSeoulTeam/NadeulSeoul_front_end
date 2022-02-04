import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CourseCreationModal({
  sendFinalCourseInfo,
  handleClose,
  open,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            이대로 코스 생성을 진행하시겠습니까?
          </Typography>
          <Button onClick={sendFinalCourseInfo}>예</Button>
          <Button onClick={handleClose}>아니요</Button>
        </Box>
      </Modal>
    </div>
  );
}