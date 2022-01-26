import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { getCourse, updateCourse } from './CourseSlice';

// css
import './Course.css';

import CourseCreationModal from './CourseCreationModal';
import CourseCreationFormCartListItem from './CourseCreationFormCartListItem';

// JSON
import tags from './tags';

function CourseCreactionForm() {
  const carts = useSelector(getCourse);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // info
  const [courseInfo, setCourseInfo] = useState({
    courseName: '',
    courseExplain: '',
    fixedNumber: '',
    budget: '',
  });
  // 지역 태그 선택 boolean
  // eslint-disable-next-line no-unused-vars
  const [localClicked, setLocalClicked] = useState();
  const [transportationClicked, setTransportationClicked] = useState();
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const makeLocalTag = (localClick) => {
    for (let i = 0; i < carts.length; i += 1) {
      const courseInfoLocalTag = carts[i].address_name.split(' ');
      console.log(localClick);
      // eslint-disable-next-line no-prototype-builtins
      if (localClick.hasOwnProperty(courseInfoLocalTag[1])) {
        console.log('found', courseInfoLocalTag[1]);
        const guName = courseInfoLocalTag[1];
        localClick[guName] = true;
      }
    }
    console.log(localClick);
    setLocalClicked(localClick);
  };

  const makeLocalTagBoolean = () => {
    const localTags = {};
    // eslint-disable-next-line no-return-assign
    tags.local.map((gu) =>
      Object.assign(localTags, { [Object.values(gu)]: false })
    );
    console.log(localTags);
    makeLocalTag(localTags);
  };

  const makeTransportationTag = (e) => {
    console.log(e.target.id, '찾자');
    if (transportationClicked[e.target.id])
      transportationClicked[e.target.id] = false;
    else transportationClicked[e.target.id] = true;
    setTransportationClicked(transportationClicked);
    console.log(transportationClicked);
  };

  const makeTransportationTagBoolean = () => {
    const transportationTags = {};
    // eslint-disable-next-line no-return-assign
    tags.transportation.map((transportation) =>
      Object.assign(transportationTags, {
        [Object.keys(transportation)]: false,
      })
    );
    console.log(transportationTags);
    setTransportationClicked(transportationTags);
  };

  useEffect(() => {
    makeLocalTagBoolean();
    makeTransportationTagBoolean();
  }, [carts]);

  useEffect(() => {
    console.log(courseInfo, 'courseInfo');
  }, [courseInfo]);

  const sendCourse = () => {
    handleOpen();
  };
  // course 정보 backend 송신 함수
  const sendFinalCourseInfo = () => {
    // navigaion
    navigate(`/`);
  };

  // input 값 저장하기
  // eslint-disable-next-line consistent-return
  const onChange = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case 'courseName':
        courseInfo.courseName = e.target.value;
        setCourseInfo(courseInfo);
        console.log(courseInfo, 'courseInfo');
        break;

      case 'courseExplain':
        courseInfo.courseExplain = e.target.value;
        setCourseInfo(courseInfo);
        console.log(courseInfo, 'courseInfo');
        break;

      case 'fixedNumber':
        courseInfo.fixedNumber = e.target.value;
        setCourseInfo(courseInfo);
        console.log(courseInfo, 'courseInfo');
        break;

      case 'budget':
        courseInfo.budget = e.target.value;
        setCourseInfo(courseInfo);
        console.log(courseInfo, 'courseInfo');
        break;

      default:
        return console.log('no match');
    }
  };

  // 숫자만 필요한 곳의 정규식 표현
  const onInput = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
  };

  const mapToComponent = () => {
    return carts.map((search, i) => (
      <Draggable key={search.id} draggableId={search.id} index={i}>
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CourseCreationFormCartListItem cart={search} />
          </li>
        )}
      </Draggable>
    ));
  };

  const mapToComponentTransportationTags = (data) => {
    return data.transportation.map((transportation) => (
      <input
        type="button"
        onClick={makeTransportationTag}
        id={Object.keys(transportation)}
        name={Object.keys(transportation)}
        key={Object.keys(transportation)}
        value={Object.values(transportation)}
      />
    ));
  };

  const mapToComponentLocalTags = (data) => {
    const showTags = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (data[key] === true) {
        showTags.push(key);
      }
    }
    console.log(showTags);
    return showTags.map((local) => (
      <input type="button" id={local} name={local} key={local} value={local} />
    ));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    // 얕은 복사
    const items = Array.from(carts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(updateCourse(items));
  };

  return (
    <div>
      <h3>나만의 코스 만들기</h3>
      <div className="course_name">
        <p>*코스 이름</p>
        <input
          onChange={onChange}
          type="text"
          id="courseName"
          name="courseName"
        />
      </div>
      <div className="course_route">
        <p>루트 편집</p>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="cart">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {mapToComponent()}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="course_explain">
        <p>코스 설명</p>
        <input
          onChange={onChange}
          type="text"
          id="courseExplain"
          name="courseExplain"
        />
      </div>
      <div className="fixed_number">
        <p>함께한 인원</p>
        <input
          onChange={onChange}
          onInput={onInput}
          type="text"
          id="fixedNumber"
          name="fixedNumber"
        />
      </div>
      <div className="budget">
        <p>예산</p>
        <input
          onChange={onChange}
          onInput={onInput}
          type="text"
          id="budget"
          name="budget"
        />
      </div>
      <div className="transportation_type">
        <p>교통수단</p>
        {mapToComponentTransportationTags(tags)}
      </div>
      <div className="region_tag">
        <p>지역 태그</p>
        {mapToComponentLocalTags(localClicked)}
      </div>
      <div className="theme_tag">
        <p>테마 태그</p>
        <input type="button" id="themeTag" name="themeTag" />
      </div>
      <button type="submit" onClick={sendCourse}>
        이대로 코스 생성하기
      </button>
      <CourseCreationModal
        sendFinalCourseInfo={sendFinalCourseInfo}
        handleClose={handleClose}
        open={open}
      />
    </div>
  );
}

export default CourseCreactionForm;
