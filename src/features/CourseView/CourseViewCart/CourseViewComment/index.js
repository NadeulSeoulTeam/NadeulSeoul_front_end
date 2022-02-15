import React from 'react';
import { CommentNickname, CommentContent } from '../styles';

function CourseViewComment({ userSeq, content }) {
  return (
    <div style={{ margin: '0 0 0 5px', display: 'inline-block' }}>
      <CommentNickname>{userSeq}</CommentNickname>
      <CommentContent>{content}</CommentContent>
    </div>
  );
}
export default CourseViewComment;
