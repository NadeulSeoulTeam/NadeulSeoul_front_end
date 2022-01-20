import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from './todoSlice';

// Home으로 부터 props text
// mapDispatchToProps으로 부터 props dispatch
// ownProps으로 부터 props id
function ToDo({ todo }) {
  const dispatch = useDispatch();
  const { text, id } = todo;
  const onBtnClick = () => {
    dispatch(remove(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
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

export default ToDo;
