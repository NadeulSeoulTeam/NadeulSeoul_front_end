import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from './test_todoSlice';

// Home으로 부터 props text
// mapDispatchToProps으로 부터 props dispatch
// ownProps으로 부터 props id
function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button type="submit" onClick={onBtnClick}>
        DEL
      </button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
