/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';

// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../TabPanel';

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
  const [value, setValue] = useState(2);

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

  useEffect(() => {
    // boardHandler();
    console.log('이거 실행되나?!');
    dispatch(loadPostsInfinity());
  }, []);

  useEffect(() => {
    // boardHandler();
    dispatch(loadPostsInfinityPlace());
  }, []);
  if (value === 0 || value === 1) {
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="내 나들코스" {...a11yProps(3)} />
          <Tab label="찜한 나들 코스" {...a11yProps(1)} />
          <Tab label="찜한 장소" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          {InfinityPosts.map((v, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <CurationCard key={i + v.myNadlecourseId + 2} imgUrl={v.imgUrl} />
          ))}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          {InfinityPosts.map((v, i) => (
            <CurationCard
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.likeNadlecourseId + 1}
              imgUrl={v.imgUrl}
            />
          ))}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          {InfinityPostsPlace.map((v, i) => (
            <CuraionCardLikePlace
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.storeSeq}
              storeName={v.storeName}
              addressName={v.addressName}
              categoryName={v.categoryName}
            />
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
