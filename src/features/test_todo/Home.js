import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDo from './ToDo';
import { add } from './todoSlice';

function Home() {
  // 여기서 props받아서 이제 이 안에서 데이터를 쓸 수 있는 것!
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { toDos } = useSelector((state) => state.todo);

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
<<<<<<< HEAD
    console.log(toDos);
=======
    console.log(text);
>>>>>>> dd219033470a465a43ad423b3143233ebc84baba
    dispatch(add(text));
    setText('');
  }

  return (
    <>
      <h1>Main page</h1>
      <h1>To do </h1>

      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos?.map((toDo) => (
          <ToDo toDo={toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// function mapStateToProps(state) {
//   //   console.log(ownProps); // 리엑트 라우터로부터 온 프롭들!
//   return { toDos: state };
// } // state

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(add(text)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;

// 정리 :  store의 데이터를 프롭 받아서 사용함!
// 근데, 프롭하기 위해서 컴포넌트와 store를 연결해야 하는데
// 그걸 해주는게 바로 connect
// mapStateToProps의 state가 바로 store에서 온 데이터
// 그래서 그 데이터를 "toDos"라는 이름으로 프롭받게 하고 그 안에다가 state를 넣어서 보내는 것!
