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

import CourseCreationModal from './CourseCreationModal/CourseCreationModal';
import CourseCreationFormCartListItem from './CourseCreationFormCartListItem/CourseCreationFormCartListItem';
// JSON
import tags from '../tags';

// style
import {
  CourseForm,
  ArticleDiv,
  CourseHeader,
  ArticleName,
  ArticleContent,
  RouteList,
  ButtonToggle,
  ImageUploadPictureDiv,
  ImageContainer,
  ImageAddButton,
  ImageAllDeleteButton,
  PictureLeftButton,
  PictureRightButton,
  ClearPicture,
  CorrectPicture,
  PictureNumbering,
  TextToggleBtn,
  TagDesc,
  GreenBtn,
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
      <div>
        <ImageContainer>
          <img src={image.data_url} alt="" />
        </ImageContainer>
        <PictureLeftButton onClick={movePicLeft} />
        <PictureNumbering>
          {pageNum + 1}/{imageList.length}
        </PictureNumbering>
        <CorrectPicture onClick={() => onImageUpdate(index)} />
        <ClearPicture
          onClick={() => {
            onImageRemove(index);
            if (pageNum === 0) {
              return;
            }
            setPageNum(pageNum - 1);
          }}
        />
        <PictureRightButton onClick={movePicRight} />
      </div>
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
    // formData.append('personnel', courseInfo.personnel);
    // formData.append('description', courseInfo.description);
    // formData.append('budget', courseInfo.budget);
    // formData.append('title', courseInfo.title);
    // formData.append('courseRoute', courseInfo.courseRoute);
    // // tag들 추가
    // formData.append('transportation', courseInfo.transportation);
    // formData.append('local', courseInfo.local);
    // formData.append('theme', courseInfo.theme);

    const arr = [];
    for (let i = 0; i < courseInfo.courseRoute.length; i += 1) {
      const data = {
        storeSeq: Number(courseInfo.courseRoute[i].id),
        addressName: courseInfo.courseRoute[i].address_name,
        categoryName: courseInfo.courseRoute[i].category_name,
        phone: courseInfo.courseRoute[i].phone,
        storeName: courseInfo.courseRoute[i].place_name,
        placeUrl: courseInfo.courseRoute[i].place_url,
        x: courseInfo.courseRoute[i].x,
        y: courseInfo.courseRoute[i].y,
      };
      arr.push(data);
    }
    const data = {
      personnel: courseInfo.personnel,
      description: courseInfo.description,
      budget: courseInfo.budget,
      title: courseInfo.title,
      courseRoute: arr,
      transportation: courseInfo.transportation,
      local: courseInfo.local,
      theme: courseInfo.theme,
    };

    console.log(courseInfo);
    // courseInfo.fileList = formData;
    setCourseInfo(courseInfo);
    // 전부 formdata에 넣어서 보내주기
    // dispatch(courseInfoPost(formData));
    dispatch(courseInfoPost(data));
    console.log(data);
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
      <TextToggleBtn
        active={!!localClicked.isClicked[index]}
        type="button"
        id={Object.keys(local)}
        name={Object.keys(local)}
        key={Object.keys(local)}
      >
        {Object.values(local)}
      </TextToggleBtn>
    ));
  };

  const mapToComponentThemeTags = (data) => {
    return data.theme.map((theme, index) => (
      <TextToggleBtn
        active={!!themeClicked.isClicked[index]}
        type="button"
        onClick={() => makeThemeTag(index)}
        id={Object.keys(theme)}
        name={Object.keys(theme)}
        key={Object.keys(theme)}
      >
        {Object.values(theme)}
      </TextToggleBtn>
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
      <ArticleDiv>
        <ArticleName>
          <span style={{ color: '#0de073' }}>* </span>
          코스 이름
        </ArticleName>
        <ArticleContent
          onChange={onChange}
          type="text"
          id="title"
          name="title"
          size="small"
          style={{ width: '40vw' }}
          placeholder="코스의 이름을 입력해주세요."
        />
      </ArticleDiv>
      <ArticleDiv>
        <ArticleName>루트 편집</ArticleName>
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
      </ArticleDiv>
      <ArticleDiv>
        <ArticleName>코스 설명</ArticleName>
        <ArticleContent
          onChange={onChange}
          id="description"
          name="description"
          multiline
          minRows={2}
          size="small"
          style={{ width: '60vw' }}
          placeholder="다른 나들러들이 코스에 대해 알 수 있게 설명을 적어주세요."
        />
      </ArticleDiv>
      <ArticleDiv>
        <ArticleName>함께한 인원</ArticleName>
        <ArticleContent
          onChange={onChange}
          onInput={onInput}
          type="text"
          id="personnel"
          name="personnel"
          size="small"
          style={{ width: '20vw' }}
          placeholder="숫자로 적어주세요."
        />
      </ArticleDiv>
      <ArticleDiv>
        <ArticleName>예산</ArticleName>
        <ArticleContent
          onChange={onChange}
          onInput={onInput}
          type="text"
          id="budget"
          name="budget"
          size="small"
          style={{ width: '50vw' }}
          placeholder="1인당 얼마 정도를 쓰셨나요? 정확하지 않아도 괜찮아요."
        />
      </ArticleDiv>
      <ArticleDiv>
        <ArticleName>교통수단</ArticleName>
        <div style={{ left: '120px', margin: '3px 0' }}>
          {mapToComponentTransportationTags(tags)}
        </div>
      </ArticleDiv>
      <ArticleDiv>
        <ArticleName>
          <span style={{ color: '#0de073' }}>* </span>지역 태그
        </ArticleName>
        <div style={{ left: '120px', width: '65vw' }}>
          <TagDesc>지역 태그는 선택하신 장소를 기반으로 자동 생성돼요.</TagDesc>
          {mapToComponentLocalTags(tags)}
        </div>
      </ArticleDiv>
      <ArticleDiv>
        <ArticleName>
          <span style={{ color: '#0de073' }}>* </span>테마 태그
        </ArticleName>
        <div style={{ left: '120px', width: '65vw' }}>
          <TagDesc>테마 태그는 1개 이상 선택해 주세요.</TagDesc>
          {mapToComponentThemeTags(tags)}
        </div>
      </ArticleDiv>
      <ArticleDiv>
        <ArticleName>이미지 업로드</ArticleName>
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
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              />
              <ImageAllDeleteButton onClick={onImageRemoveAll} />
            </ImageUploadPictureDiv>
          )}
        </ImageUploading>
      </ArticleDiv>
      <GreenBtn type="submit" onClick={sendCourse}>
        이대로 코스 생성하기
      </GreenBtn>
      <CourseCreationModal
        sendFinalCourseInfo={sendFinalCourseInfo}
        handleClose={handleClose}
        open={open}
      />
    </CourseForm>
  );
}

export default CourseCreactionForm;
