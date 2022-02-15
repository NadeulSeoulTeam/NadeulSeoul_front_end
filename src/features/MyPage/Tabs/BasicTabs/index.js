/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';

// mui
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../TabPanel';
import {
  Underline,
  GreyBox,
  CustomTabs,
  CustomTab,
  ContentArea,
} from './styles';

// component
import CurationCard from '../../Card/CurationCard';

// actions
import { loadPostsInfinity, loadPostsInfinityPlace } from '../../MyPageSlice';
import CuraionCardLikePlace from '../../Card/CuraionCardLikePlace';

//
// mui basic tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const {
    // userInfo,
    InfinityPosts,
    InfinityPostsPlace,
    hasMorePostsPlace,
    loadInfinityPostsPlaceLoading,
    hasMorePosts,
    loadInfinityPostsLoading,
  } = useSelector((state) => state.mypage);
  // const params = useParams();
  const dispatch = useDispatch();
  // const mypage = userInfo.filter((v) => {
  //   return v.id === parseInt(params.id, 10);
  // })[0];
  // const myNadlecourseInfo = mypage.myNadlecourse;
  // const likePlaceInfo = mypage.likePlace;
  // const likeNadlecourseInfo = mypage.likeNadlecourse;
  const [value, setValue] = useState(0);

  console.log(value);
  console.log(InfinityPostsPlace);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [isMyprofile, setIsMyprofile] = useState(true);

  // const boardHandler = () => {
  //   const me = userInfo[0].id; // 현재 meanstrike 로그인 했다고 가정
  //   const Userid = parseInt(params.id, 10);
  //   if (me === Userid) {
  //     setIsMyprofile(true);
  //   } else {
  //     setIsMyprofile(false);
  //   }
  // };

  if (value === 0 || value === 1) {
    useEffect(() => {
      // boardHandler();
      dispatch(loadPostsInfinity());
    }, []);
    useEffect(() => {
      function onScroll() {
        // window.scrollY : 얼마나 내렸는지
        // document.documentElement.clientHeight : 화면에 보이는 길이
        // document.documentElement.scrollHeight : 총길이
        if (hasMorePosts && !loadInfinityPostsLoading) {
          if (
            window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 300
          ) {
            // const lastId =
            //   InfinityPosts[InfinityPosts.length - 1]?.myNadlecourseId;
            dispatch(loadPostsInfinity());
          }
        }
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, [hasMorePosts, loadInfinityPostsLoading, InfinityPosts]);
  } else if (value === 2) {
    useEffect(() => {
      // boardHandler();
      dispatch(loadPostsInfinityPlace());
    }, []);
    useEffect(() => {
      function onScroll() {
        // window.scrollY : 얼마나 내렸는지
        // document.documentElement.clientHeight : 화면에 보이는 길이
        // document.documentElement.scrollHeight : 총길이
        if (hasMorePostsPlace && !loadInfinityPostsLoading) {
          if (
            window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 300
          ) {
            // const lastId =
            //   InfinityPosts[InfinityPosts.length - 1]?.myNadlecourseId;
            dispatch(loadPostsInfinityPlace());
          }
        }
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, [hasMorePostsPlace, loadInfinityPostsPlaceLoading, InfinityPostsPlace]);
  }
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
          {InfinityPosts.map((v, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <CurationCard key={i + v.myNadlecourseId + 2} imgUrl={v.imgUrl} />
          ))}
        </ContentArea>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentArea>
          {InfinityPosts.map((v, i) => (
            <CurationCard
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.likeNadlecourseId + 1}
              imgUrl={v.imgUrl}
            />
          ))}
        </ContentArea>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContentArea>
          {InfinityPostsPlace.map((v, i) => (
            <CuraionCardLikePlace
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.storeSeq}
              storeName={v.storeName}
              addressName={v.addressName}
              categoryName={v.categoryName}
            />
          ))}
        </ContentArea>
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
