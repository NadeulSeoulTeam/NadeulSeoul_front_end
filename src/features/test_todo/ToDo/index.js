import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../todoSlice';

// Home으로 부터 props text
// mapDispatchToProps으로 부터 props dispatch
// ownProps으로 부터 props id
function ToDO({ toDo }) {
  const dispatch = useDispatch();
  const onBtnClick = () => {
    console.log('삭제 요청');
    dispatch(
      remove({
        todoId: toDo.id,
      })
    );
  };
  return (
    <li>
      {toDo.text}
      <button type="submit" onClick={onBtnClick}>
        DEL
      </button>
    </li>
  );
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     onBtnClick: () => dispatch(remove(ownProps.id)),
//   };
// }

export default ToDO;
