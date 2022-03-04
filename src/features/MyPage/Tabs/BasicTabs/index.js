/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router';

// style
import Box from '@mui/material/Box';
import TabPanel from '../TabPanel';
import {
  Underline,
  GreyBox,
  CustomTabs,
  CustomTab,
  ContentArea,
  GreenBtn,
} from './styles';

// component
import CurationCard from '../../Card/CurationCard';
import CurationCardLikePlace from '../../Card/CurationCardLikePlace';

// actions
import {
  loadPostsInfinityLikeNadle,
  loadPostsInfinityLikePlace,
  loadPostsInfinityMyNadle,
  setLikePlaceBasket,
  getParamsId,
  getPageCount,
} from '../../MyPageSlice';

//
// mui basic tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const { LikePlaces, myCourse, MyNadles, LikeNadles } = useSelector(
    (state) => state.mypage
  );
  const params = useParams();
  const location = useLocation();
  const navigateState = location;
  // console.log(navigateState);
  // console.log(params.id);
  // console.log(MyNadles);
  const myPageId = params.id;
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getParamsId(myPageId));
  }, []);

  const onClickSendCourse = () => {
    const data = {
      storeSeqList: myCourse,
      userSeq: params.id,
    };
    dispatch(setLikePlaceBasket(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        navigate('/course', { state: response.data });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const [myNadlepage, setMyNadlepage] = useState(0);
  const [likeNadlepage, setLikeNadlepage] = useState(0);
  const [likePlacepage, setLikePlacepage] = useState(0);

  // 내 나들
  useEffect(() => {
    const data = {
      myNadlepage,
      size: 30,
      myPageId,
    };

    dispatch(loadPostsInfinityMyNadle(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [myNadlepage]);

  function onScrollMyNadle() {
    // window.scrollY : 얼마나 내렸는지
    // document.documentElement.clientHeight : 화면에 보이는 길이
    // document.documentElement.scrollHeight : 총길이
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 950
    ) {
      setMyNadlepage(myNadlepage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollMyNadle);
    return () => {
      window.removeEventListener('scroll', onScrollMyNadle);
    };
  }, [onScrollMyNadle]);

  // // 찜한 나들 코스

  useEffect(() => {
    const data = {
      likeNadlepage,
      size: 30,
      myPageId,
    };
    dispatch(loadPostsInfinityLikeNadle(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [likeNadlepage]);

  function onScrollLikeNadle() {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 950
    ) {
      console.log('페이지 체크 : ');
      console.log(likeNadlepage);
      setLikeNadlepage(likeNadlepage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollLikeNadle);
    return () => {
      window.removeEventListener('scroll', onScrollLikeNadle);
    };
  }, [onScrollLikeNadle]);

  // 찜한 장소

  useEffect(() => {
    const data = {
      likePlacepage,
      size: 30,
      myPageId,
    };
    dispatch(loadPostsInfinityLikePlace(data))
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(getPageCount(likePlacepage));
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [likePlacepage]);

  function onScrollLikePlace() {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 950
    ) {
      console.log('페이지 체크 : ');
      setLikePlacepage(likePlacepage + 1);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScrollLikePlace);
    return () => {
      window.removeEventListener('scroll', onScrollLikePlace);
    };
  }, [onScrollLikePlace]);

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <Box sx={{ position: 'relative' }}>
        <CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <CustomTab label="내 나들코스" {...a11yProps(3)} />
          <CustomTab label="찜한 나들코스" {...a11yProps(1)} />
          <CustomTab label="찜한 장소" {...a11yProps(2)} />
        </CustomTabs>
        <Underline />
      </Box>
      <GreyBox value={value} />
      <TabPanel value={value} index={0}>
        <ContentArea>
          {MyNadles?.length
            ? MyNadles?.map((v) => (
                // eslint-disable-next-line react/no-array-index-key
                <CurationCard
                  key={v.curationSeq + 957}
                  thumnail={v.thumnail}
                  title={v.title}
                  good={v.good}
                  curationSeq={v.curationSeq}
                />
              ))
            : '내 나들코스가 없습니다.'}
        </ContentArea>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentArea>
          {LikeNadles?.length
            ? LikeNadles?.map((v) => (
                <CurationCard
                  // eslint-disable-next-line react/no-array-index-key
                  key={v.curationSeq + 257}
                  title={v.title}
                  thumnail={v.thumnail}
                  good={v.good}
                  curationSeq={v.curationSeq}
                />
              ))
            : '찜한 나들코스가 없습니다.'}
        </ContentArea>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <GreenBtn disabled={myCourse.length < 1} onClick={onClickSendCourse}>
            나만의 코스 만들기
          </GreenBtn>
        </div>
        <ContentArea>
          {LikePlaces?.length
            ? LikePlaces?.map((v) => (
                <CurationCardLikePlace
                  key={v.storeSeq + 641}
                  storeSeq={v.storeSeq}
                  storeName={v.storeName}
                  addressName={v.addressName}
                  categoryName={v.categoryName}
                />
              ))
            : '찜한 장소가 없습니다.'}
        </ContentArea>
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
