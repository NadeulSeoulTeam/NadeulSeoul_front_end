/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { element } from 'prop-types';
import ImageUploading from 'react-images-uploading';
import { Axios } from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Pagination from 'react-js-pagination';
import { getCourse, updateCourse } from '../CourseSlice';

// css

import CourseCreationModal from './CourseCreationModal/CourseCreationModal';
import CourseCreationFormCartListItem from './CourseCreationFormCartListItem/CourseCreationFormCartListItem';
// JSON
import tags from '../tags';

// Image
// css
import {
  CourseForm,
  CourseHeader,
  CourseName,
  CourseNameContent,
  RouteList,
  RouteEdit,
  CourseDes,
  CourseDesContent,
  FixdedMember,
  FixedMemberContent,
  Budget,
  BudgetInput,
  Transportation,
  TransportationTag,
  Local,
  LocalTag,
  Theme,
  ThemeTag,
  CourseCreateButton,
  ButtonToggle,
  ImageUpload,
  ImageUploadContent,
  ImageUploadPictureDiv,
  ImageFunc,
} from './styles';

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
  const [transportationClicked, setTransportationClicked] = useState({});
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // tag
  // transportation
  const handleTransportationTag = useRef({});

  // image
  const [images, setImages] = useState([]);
  const maxNumber = 4;

  const onImageChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const onError = (errors, files) => {
    if (errors.maxNumber) {
      alert('이미지는 4개까지만 첨부할 수 있습니다');
    }
  };

  const testAxiosImage = () => {
    const formData = new FormData();
    for (let i = 0; i < images.length; i += 1) {
      formData.append('img', images[i]);
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const value of formData.values()) {
      console.log(value);
    }
    // 파일 형식이 images[i] 객체로 담을 지 혹은 그 안의 file 객체를 담아줘야 하는지
    // 후자의 경우 images[i].file 로 formData에 append
    // const response = axios.post('/img/user_img', formData);
  };

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
    if (transportationClicked[e.target.id])
      transportationClicked[e.target.id] = false;
    else transportationClicked[e.target.id] = true;
    setTransportationClicked(transportationClicked);
    // handleTransportationTag.current[e.target.id].removeClass('active');
    console.log(transportationClicked[e.target.id]);
    console.log(handleTransportationTag.current[e.target.id]);
  };

  const makeTransportationTagBoolean = () => {
    const transportationTags = {};
    // eslint-disable-next-line no-return-assign
    tags.transportation.map((transportation) =>
      Object.assign(transportationClicked, {
        [Object.keys(transportation)]: false,
      })
    );
    setTransportationClicked(transportationClicked);
  };

  useEffect(() => {
    makeLocalTagBoolean();
    makeTransportationTagBoolean();
    console.log(carts);
  }, [carts]);

  useEffect(() => {
    console.log(courseInfo, 'courseInfo');
  }, [courseInfo]);

  useEffect(() => {
    console.log(transportationClicked, 'transportationClicked');
  }, [transportationClicked]);

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
    console.log(data.transportation);
    console.log(transportationClicked.walk);
    return data.transportation.map((transportation) => (
      <ButtonToggle
        active
        type="button"
        onClick={makeTransportationTag}
        id={Object.keys(transportation)}
        name={Object.keys(transportation)}
        key={Object.keys(transportation)}
        // eslint-disable-next-line no-shadow
        ref={(element) => {
          console.log(element);
          console.log(
            handleTransportationTag.current[Object.keys(transportation)]
          );
          handleTransportationTag.current[Object.keys(transportation)] =
            element;
        }}
      >
        {Object.values(transportation)}
      </ButtonToggle>
    ));
  };

  const mapToComponentLocalTags = (data) => {
    const showTags = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (data[key] === true) {
        showTags.concat(key);
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
    <CourseForm>
      <CourseHeader>나만의 코스 만들기</CourseHeader>

      <CourseName>
        <span style={{ color: '#68c78e' }}>*</span>코스 이름
      </CourseName>
      <CourseNameContent
        onChange={onChange}
        type="text"
        id="courseName"
        name="courseName"
        placeholder="코스의 이름을 입력해주세요."
      />
      <RouteEdit>루트 편집</RouteEdit>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cart">
          {(provided) => (
            <RouteList
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {mapToComponent()}
              {provided.placeholder}
            </RouteList>
          )}
        </Droppable>
      </DragDropContext>
      <CourseDes>코스 설명</CourseDes>
      <CourseDesContent
        onChange={onChange}
        id="courseExplain"
        name="courseExplain"
        placeholder="다른 나들러들이 코스에 대해 알 수 있게 설명을 적어주세요. "
      />
      <FixdedMember>함께한 인원</FixdedMember>
      <FixedMemberContent
        onChange={onChange}
        onInput={onInput}
        type="text"
        id="fixedNumber"
        name="fixedNumber"
        placeholder="숫자로 적어주세요."
      />
      <Budget>예산</Budget>
      <BudgetInput
        onChange={onChange}
        onInput={onInput}
        type="text"
        id="budget"
        name="budget"
        placeholder="1인당 얼마 정도를 쓰셨나요? 정확하지 않아도 괜찮아요."
      />
      <Transportation>교통수단</Transportation>
      <TransportationTag>
        {mapToComponentTransportationTags(tags)}
      </TransportationTag>
      <Local>지역 태그</Local>
      <LocalTag>{mapToComponentLocalTags(localClicked)}</LocalTag>

      <Theme>테마 태그</Theme>
      <ThemeTag type="button" id="themeTag" name="themeTag" />
      <ImageUpload>이미지 업로드</ImageUpload>
      <ImageUploadContent>
        <ImageUploading
          multiple
          value={images}
          onChange={onImageChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          onError={onError}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <ImageUploadPictureDiv>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="300" />
                  <ImageFunc>
                    <BorderColorIcon
                      color="primary"
                      onClick={() => onImageUpdate(index)}
                    />
                    <ClearIcon
                      color="primary"
                      onClick={() => onImageRemove(index)}
                    />
                  </ImageFunc>
                </div>
              ))}
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                사진추가
              </button>
              <button onClick={onImageRemoveAll}>Remove all images</button>
            </ImageUploadPictureDiv>
          )}
        </ImageUploading>
      </ImageUploadContent>
      <button onClick={testAxiosImage}>이미지 업로딩 테스트</button>
      <CourseCreateButton type="submit" onClick={sendCourse}>
        이대로 코스 생성하기
      </CourseCreateButton>
      <CourseCreationModal
        sendFinalCourseInfo={sendFinalCourseInfo}
        handleClose={handleClose}
        open={open}
      />
    </CourseForm>
  );
}

export default CourseCreactionForm;
