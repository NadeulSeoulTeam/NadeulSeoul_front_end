/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import CourseCartItem from './CourseCartItem';

import { getCourse, updateCourse } from '../CourseSlice';
import { CourseCard, Header, List, InfoMsg, GreenBtn } from './styles';

function CourseCart() {
  // 현재 카트에 리스트가 저장되어있는 배열
  const carts = useSelector(getCourse);
  const dispatch = useDispatch();
  // Navigation
  const navigate = useNavigate();
  useEffect(() => {
    console.log(carts);
  }, [carts]);

  // course 나열 함수
  // eslint 는 key값으로 array의 인덱스를 사용하지 말라한다.... ????
  // id로 구분하기
  const mapToComponent = (data) => {
    return data.map((cart, index) => (
      <Draggable key={cart.id} draggableId={cart.id} index={index}>
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CourseCartItem cart={cart} index={index} />
          </li>
        )}
      </Draggable>
    ));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    console.log(result);
    // 얕은 복사
    const items = Array.from(carts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log('update course');
    dispatch(updateCourse(items));
  };

  return (
    <CourseCard>
      <Header>내 코스에 추가할 장소</Header>
      {carts.length === 0 ? (
        <InfoMsg>
          장소를 검색해서 코스에 추가할 수 있어요. 검색 결과를 한 번 누르면
          위치를 볼 수 있고, 더블클릭하면 코스에 추가됩니다.
        </InfoMsg>
      ) : null}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cart">
          {(provided) => (
            <List
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {mapToComponent(carts)}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
      <GreenBtn
        onClick={() => {
          if (carts.length === 0) alert('한 개 이상의 장소를 추가해주세요.');
          else navigate(`/CourseCreationForm`);
        }}
      >
        이대로 코스 생성하기
      </GreenBtn>
    </CourseCard>
  );
}

export default CourseCart;
