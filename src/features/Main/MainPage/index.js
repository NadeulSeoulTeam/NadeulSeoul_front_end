/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

// VAC
import MainPageView from './mainpage.view';

// actions
import {
  LoadUserInfo,
  fetchLocalTags,
  fetchThemeTags,
  LocalNThemeTagsSelected,
  select,
} from '../MainSlice';

// cookie
import { getLoginSuccess } from '../../../common/api/JWT-Token';

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [localClicked, setLocalClicked] = useState();
  const [themeClicked, setThemeClicked] = useState();
  const [clicked, setClicked] = useState(0);
  const [clicks, setClicks] = useState(true);
  const [likes, setLikes] = useState(false);
  const [news, setNews] = useState(false);
  const [open, setOpen] = useState(false);
  const [tagsSelectedContent, setTagsSelectedContent] = useState();

  const { localTag, themeTag, localNThemeTagsSelected } = useSelector(
    (state) => state.main
  );

  const handleOpen = () => {
    setOpen(!open);
  };

  console.log(getLoginSuccess(), typeof getLoginSuccess());

  if (getLoginSuccess() === 'false') {
    useEffect(() => {
      dispatch(LoadUserInfo())
        .unwrap()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

  useEffect(() => {
    setLocalClicked(Array(localTag?.length).fill(false));
    setThemeClicked(Array(themeTag?.length).fill(false));
  }, []);

  useEffect(() => {
    console.log(localClicked, themeClicked);
  }, [localClicked, themeClicked]);

  useEffect(() => {
    let sort;
    if (clicks) sort = 'views,desc';
    else if (likes) sort = 'good,desc';
    else if (news) sort = 'date,desc';
    if (clicked > 0) {
      const local = [];
      const theme = [];
      for (let i = 0; i < localClicked.length; i += 1) {
        if (localClicked[i]) local.push(i + 1);
      }
      for (let i = 0; i < themeClicked.length; i += 1) {
        if (themeClicked[i]) theme.push(i + 26);
      }

      const data = { data: { local, theme }, sort };
      dispatch(LocalNThemeTagsSelected(data));
      console.log(data);
    }
  }, [clicked, news, likes, clicks]);

  const selectCourse = (selectedCourse) => {
    dispatch(select(selectedCourse));
    navigate(`/courseview/${selectedCourse.curationSeq}`);
  };

  // 태그 조건부 랜더링
  // const tagSelectRender = (content) => {
  //   console.log(content);
  //   if (content === undefined || content.length === 0)
  //     return <NoResult>🙄 선택하신 태그를 가진 코스가 없어요.</NoResult>;
  //   return content.map((curation) => (
  //     <Wrapper elevation={0} onClick={() => selectCourse(curation)}>
  //       <ImageDiv>
  //         {curation.thumnail !== null &&
  //         curation.thumnail !== undefined &&
  //         curation.thumnail !== 0 ? (
  //           <CurationImage
  //             alt="profile_img"
  //             src={`http://13.124.34.5/api/v1/image/${curation.thumnail}`}
  //           />
  //         ) : (
  //           <CurationImage alt="profile_img" src={defaultPic} />
  //         )}

  //         <LikeChip>👍{curation.good}</LikeChip>
  //       </ImageDiv>
  //       <CurationTitle>{curation.title}</CurationTitle>
  //     </Wrapper>
  //   ));
  // };

  useEffect(() => {
    if (localNThemeTagsSelected.content !== undefined) {
      setTagsSelectedContent(localNThemeTagsSelected.content);
    }
  }, [localNThemeTagsSelected]);

  const setLocalBoolean = (codeSeq) => {
    console.log(codeSeq);
    localClicked[codeSeq - 1] = !localClicked[codeSeq - 1];
    setLocalClicked(localClicked);
    if (localClicked[codeSeq - 1]) setClicked(clicked + 1);
    else setClicked(clicked - 1);
  };

  const setThemeBoolean = (codeSeq) => {
    console.log(codeSeq);
    themeClicked[codeSeq - 26] = !themeClicked[codeSeq - 26];
    setThemeClicked(themeClicked);
    if (themeClicked[codeSeq - 26]) setClicked(clicked + 1);
    else setClicked(clicked - 1);
  };

  useEffect(() => {
    dispatch(fetchLocalTags());
    dispatch(fetchThemeTags());
    // console.log(themeTag, localTag);
  }, []);

  // 코스 나열 기준(조회순, 좋아요순, 최신순)
  const clicksClicked = () => {
    setClicks(true);
    setLikes(false);
    setNews(false);
  };
  const likesClicked = () => {
    setClicks(false);
    setLikes(true);
    setNews(false);
  };
  const newClicked = () => {
    setClicks(false);
    setLikes(false);
    setNews(true);
  };

  const props = {
    localClicked,
    themeClicked,
    setLocalBoolean,
    setThemeBoolean,
    clicked,
    clicks,
    likes,
    news,
    open,
    tagsSelectedContent,
    selectCourse,
    handleOpen,
    clicksClicked,
    likesClicked,
    newClicked,
  };

  return <MainPageView {...props} />;
}

export default MainPage;
