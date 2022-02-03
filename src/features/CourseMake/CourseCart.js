import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// css
import './Course.css';

// react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import CourseCartItem from './CourseCartItem';

import { getCourse, updateCourse } from './CourseSlice';

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
    console.log(data);
    return data.map((cart, i) => (
      <Draggable key={cart.id} draggableId={cart.id} index={i}>
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CourseCartItem cart={cart} />
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
    <Card className="cart" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          내 코스에 추가할 장소
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="cart">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {mapToComponent(carts)}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/CourseCreationForm`);
          }}
        >
          이대로 코스 생성하기
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseCart;

/* <div className="CourseCart">
      <div className="Course Header"></div>
      {mapToComponent(carts)}
      
    </div> */
