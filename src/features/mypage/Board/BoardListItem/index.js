import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ProfileCard from '../../Card/ProfileCard';

function BoardListItem() {
  return (
    <>
      <ProfileCard />
      <div>제목 : </div>
      <div>내용 : </div>
      {/* 수정을 눌렀을 때만 textarea가 나타나야 함 -> 그 때 게시글 수정이 이루어짐 */}
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="수정필요함"
        style={{ width: 500 }}
      />
    </>
  );
}

export default BoardListItem;
