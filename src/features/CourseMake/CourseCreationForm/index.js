/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import ImageUploading from 'react-images-uploading';
import { Axios } from 'axios';

import { getCourse, updateCourse, courseInfoPost } from '../CourseSlice';
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
  ImageAddButton,
  ImageAllDeleteButton,
  PictureLeftButton,
  PictureRightButton,
  ClearPicture,
  CorrectPicture,
  PictureNumbering,
  LocalToggle,
  ThemeToggle,
  LocalTagDesc,
  ThemeTagDesc,
} from './styles';

function CourseCreactionForm() {
  const carts = useSelector(getCourse);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // info
  const [courseInfo, setCourseInfo] = useState({
    title: 'axios 통신 테스트 - cors 확인 ',
    description: null,
    personnel: null,
    budget: null,
    fileList: [],
    courseRoute: carts,
  });
  // 지역 태그 선택 boolean
  // eslint-disable-next-line no-unused-vars

  // tag
  const [transportationClicked, setTransportationClicked] = useState({
    isClicked: Array(6).fill(false),
  });
  const [localClicked, setLocalClicked] = useState({
    isClicked: Array(25).fill(false),
  });
  const [themeClicked, setThemeClicked] = useState({
    isClicked: Array(12).fill(false),
  });
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // tag
  // transportation

  // image
  const [images, setImages] = useState([]);
  const maxNumber = 15;

  const onImageChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const onError = (errors, files) => {
    if (errors.maxNumber) {
      alert('이미지는 15개까지만 첨부할 수 있습니다');
    }
  };
  const [pageNum, setPageNum] = useState(0);
  useEffect(() => {}, [pageNum]);

  const imageUploadFunc = (imageList, onImageUpdate, onImageRemove) => {
    const image = imageList[pageNum];
    const index = pageNum;
    if (imageList.length === 0) {
      return;
    }
    const movePicRight = () => {
      if (pageNum === imageList.length - 1) {
        setPageNum(0);
        console.log(index);
      } else {
        setPageNum(pageNum + 1);
        console.log(index);
      }
    };
    const movePicLeft = () => {
      if (pageNum === 0) {
        setPageNum(imageList.length - 1);
        console.log(index);
      } else {
        setPageNum(pageNum - 1);
        console.log(index);
      }
    };
    return (
      <ImageFunc>
        <img src={image.data_url} alt="" width="300" />
        <PictureLeftButton
          sx={{ color: '#68c78e' }}
          fontSize="large"
          onClick={movePicLeft}
        />
        <PictureNumbering>
          사진 : {pageNum + 1}/{imageList.length}
        </PictureNumbering>
        <CorrectPicture
          sx={{ fontSize: 20, color: '#68c78e' }}
          onClick={() => onImageUpdate(index)}
        />
        <ClearPicture
          sx={{ fontSize: 20, color: '#68c78e' }}
          onClick={() => {
            onImageRemove(index);
            if (pageNum === 0) {
              return;
            }
            setPageNum(pageNum - 1);
          }}
        />
        <PictureRightButton
          sx={{ color: '#68c78e' }}
          fontSize="large"
          onClick={movePicRight}
        />
      </ImageFunc>
    );
  };

  const makeTransportationTag = (idx) => {
    setTransportationClicked({
      isClicked: transportationClicked.isClicked.map((element, index) => {
        return index === idx ? !element : element;
      }),
    });
  };
  const makeLocalTag = () => {
    const localIndex = [];
    for (const cart in carts) {
      const addressName = carts[cart].address_name;
      const addressCheck = addressName.split(' ');
      for (let i = 0; i < tags.local.length; i += 1) {
        if (Object.values(tags.local[i])[0] === addressCheck[1]) {
          localIndex.push(i);
        }
      }
    }
    setLocalClicked({
      isClicked: localClicked.isClicked.map((element, index) => {
        return !!localIndex.includes(index);
      }),
    });
  };
  useEffect(() => {
    makeLocalTag();
  }, []);
  const makeThemeTag = (idx) => {
    setThemeClicked({
      isClicked: themeClicked.isClicked.map((element, index) => {
        return index === idx ? !element : element;
      }),
    });
  };
  const makeTransportationTagBoolean = () => {
    // {seq : name}
    // for (const index in transportationClicked.isClicked) {
    //   if (transportationClicked.isClicked[index] === true) {
    //     // eslint-disable-next-line prefer-destructuring
    //     transportationInfo[index] = Object.keys(tags.transportation[index])[0];
    //   }
    // }
    // { seq : [num,num]}
    const transSeq = [];
    for (const index in transportationClicked.isClicked) {
      if (transportationClicked.isClicked[index] === true) {
        // eslint-disable-next-line prefer-destructuring
        transSeq.push(index);
      }
    }
    return transSeq;
  };
  const makeLocalTagBoolean = () => {
    // {seq : name}
    // for (const index in transportationClicked.isClicked) {
    //   if (transportationClicked.isClicked[index] === true) {
    //     // eslint-disable-next-line prefer-destructuring
    //     transportationInfo[index] = Object.keys(tags.transportation[index])[0];
    //   }
    // }
    // { seq : [num,num]}
    const localSeq = [];
    for (const index in localClicked.isClicked) {
      if (localClicked.isClicked[index] === true) {
        // eslint-disable-next-line prefer-destructuring
        localSeq.push(index);
      }
    }
    return localSeq;
  };
  const makeThemeTagBoolean = () => {
    // {seq : name}
    // for (const index in transportationClicked.isClicked) {
    //   if (transportationClicked.isClicked[index] === true) {
    //     // eslint-disable-next-line prefer-destructuring
    //     transportationInfo[index] = Object.keys(tags.transportation[index])[0];
    //   }
    // }
    // { seq : [num,num]}
    const themeSeq = [];
    for (const index in themeClicked.isClicked) {
      if (themeClicked.isClicked[index] === true) {
        // eslint-disable-next-line prefer-destructuring
        themeSeq.push(index);
      }
    }
    return themeSeq;
  };
  useEffect(() => {
    // makeLocalTagBoolean();
    // makeTransportationTagBoolean();
    // makeThemeTagBoolean();

    courseInfo.courseRoute = carts;
    setCourseInfo(courseInfo);
    console.log(carts);
  }, [carts]);

  useEffect(() => {
    console.log(courseInfo, 'courseInfo');
  }, [courseInfo]);

  const sendCourse = () => {
    const formData = new FormData();
    setCourseInfo((courseInfo.transportation = makeTransportationTagBoolean()));
    setCourseInfo((courseInfo.local = makeLocalTagBoolean()));
    setCourseInfo((courseInfo.theme = makeThemeTagBoolean()));
    for (let i = 0; i < images.length; i += 1) {
      formData.append('fileList', images[i].file);
    }
    formData.append('personnel', courseInfo.personnel);
    formData.append('description', courseInfo.description);
    formData.append('budget', courseInfo.budget);
    formData.append('title', courseInfo.title);
    formData.append('courseRoute', courseInfo.courseRoute);
    // tag들 추가
    formData.append('transportation', courseInfo.transportation);
    formData.append('local', courseInfo.local);
    formData.append('theme', courseInfo.theme);

    console.log(courseInfo);
    // courseInfo.fileList = formData;
    setCourseInfo(courseInfo);
    // 전부 formdata에 넣어서 보내주기
    dispatch(courseInfoPost(formData));
    // handleOpen();
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
      case 'title':
        courseInfo.title = e.target.value;
        setCourseInfo(courseInfo);
        console.log(courseInfo, 'courseInfo');
        break;

      case 'description':
        courseInfo.description = e.target.value;
        setCourseInfo(courseInfo);
        console.log(courseInfo, 'courseInfo');
        break;

      case 'personnel':
        courseInfo.personnel = e.target.value;
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
    return data.transportation.map((transportation, index) => (
      <ButtonToggle
        active={!!transportationClicked.isClicked[index]}
        type="button"
        onClick={() => makeTransportationTag(index)}
        id={Object.keys(transportation)}
        name={Object.keys(transportation)}
        key={Object.keys(transportation)}
      >
        {Object.values(transportation)}
      </ButtonToggle>
    ));
  };

  const mapToComponentLocalTags = (data) => {
    return data.local.map((local, index) => (
      <LocalToggle
        active={!!localClicked.isClicked[index]}
        type="button"
        id={Object.keys(local)}
        name={Object.keys(local)}
        key={Object.keys(local)}
      >
        {Object.values(local)}
      </LocalToggle>
    ));
  };

  const mapToComponentThemeTags = (data) => {
    return data.theme.map((theme, index) => (
      <ThemeToggle
        active={!!themeClicked.isClicked[index]}
        type="button"
        onClick={() => makeThemeTag(index)}
        id={Object.keys(theme)}
        name={Object.keys(theme)}
        key={Object.keys(theme)}
      >
        {Object.values(theme)}
      </ThemeToggle>
    ));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    // 얕은 복사
    const items = Array.from(carts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(updateCourse(items));
    courseInfo.courseRoute = items;
    setCourseInfo(courseInfo);
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
        id="title"
        name="title"
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
        id="description"
        name="description"
        placeholder="다른 나들러들이 코스에 대해 알 수 있게 설명을 적어주세요. "
      />
      <FixdedMember>함께한 인원</FixdedMember>
      <FixedMemberContent
        onChange={onChange}
        onInput={onInput}
        type="text"
        id="personnel"
        name="personnel"
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
      <Local>
        <span style={{ color: '#68c78e' }}>*</span>지역 태그
      </Local>
      <LocalTag>
        <LocalTagDesc>
          지역 태그는 선택하신 장소를 기반으로 자동 생성되요
        </LocalTagDesc>{' '}
        <br />
        {mapToComponentLocalTags(tags)}
      </LocalTag>

      <Theme>
        <span style={{ color: '#68c78e' }}>*</span>테마 태그
      </Theme>
      <ThemeTag>
        <ThemeTagDesc>
          지역 태그는 선택하신 장소를 기반으로 자동 생성되요
        </ThemeTagDesc>{' '}
        <br />
        {mapToComponentThemeTags(tags)}
      </ThemeTag>
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
              {imageUploadFunc(imageList, onImageUpdate, onImageRemove)}
              <ImageAddButton
                color="success"
                sx={{ fontSize: 20, color: '#68c78e' }}
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              />
              <ImageAllDeleteButton
                color="success"
                sx={{ fontSize: 20, color: '#68c78e' }}
                onClick={onImageRemoveAll}
              />
            </ImageUploadPictureDiv>
          )}
        </ImageUploading>
      </ImageUploadContent>
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
