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
import CurationCardLikePlace from '../../Card/CuraionCardLikePlace';

// actions
import {
  loadPostsInfinity,
  loadPostsInfinityLikePlace,
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
  const {
    InfinityPosts,
    hasMorePosts,
    loadInfinityPostsLoading,
    InfinityPostsLikePlace,
    hasMoreLikePlace,
    loadInfinityPostsLikePlaceLoading,
  } = useSelector((state) => state.mypage);

  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  if (value === 0 || value === 1) {
    useEffect(() => {
      dispatch(loadPostsInfinity());
    }, [value]);

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
      dispatch(loadPostsInfinityLikePlace());
    }, [value]);

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

            dispatch(loadPostsInfinityLikePlace());
          }
        }
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, [
      hasMoreLikePlace,
      loadInfinityPostsLikePlaceLoading,
      InfinityPostsLikePlace,
    ]);
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
            <CurationCard key={i + v.myNadlecourseId} imgUrl={v.imgUrl} />
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
            // eslint-disable-next-line react/no-array-index-key
            <CurationCard key={i + v.myNadlecourseId} imgUrl={v.imgUrl} />
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
          {InfinityPostsLikePlace.map((v, i) => (
            <CurationCardLikePlace
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.likeplaceId}
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
