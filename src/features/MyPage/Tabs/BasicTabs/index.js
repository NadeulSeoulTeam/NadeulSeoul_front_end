/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TabPanel from '../TabPanel';

// component
import CurationCard from '../../Card/CurationCard';
import CurationCardLikePlace from '../../Card/CuraionCardLikePlace';

// actions
import {
  loadPostsInfinity,
  // loadPostsInfinityLikePlace,
} from '../../MyPageSlice';
import { GreenBtn } from './styles';

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
    // loadInfinityPostsLoading,
    // InfinityPostsLikePlace,
    // hasMoreLikePlace,
    // loadInfinityPostsLikePlaceLoading,
  } = useSelector((state) => state.mypage);

  console.log(InfinityPosts);

  const dispatch = useDispatch();
  const [value, setValue] = useState(2);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const [page, setPage] = useState(2);

  useEffect(() => {
    const data = {
      page,
      size: 24,
    };
    dispatch(loadPostsInfinity(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.Console.log(error.response.data);
      });
  }, [page]);

  function onScroll() {
    // window.scrollY : 얼마나 내렸는지
    // document.documentElement.clientHeight : 화면에 보이는 길이
    // document.documentElement.scrollHeight : 총길이
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  // } else if (value === 2) {
  //   useEffect(() => {
  //     dispatch(loadPostsInfinityLikePlace());
  //   }, [value]);

  //   useEffect(() => {
  //     function onScroll() {
  //       // window.scrollY : 얼마나 내렸는지
  //       // document.documentElement.clientHeight : 화면에 보이는 길이
  //       // document.documentElement.scrollHeight : 총길이
  //       if (!loadInfinityPostsLoading) {
  //         if (
  //           window.scrollY + document.documentElement.clientHeight >
  //           document.documentElement.scrollHeight - 300
  //         ) {
  //           const lastId =
  //             InfinityPosts[InfinityPosts.length - 1]?.myNadlecourseId;

  //           dispatch(loadPostsInfinityLikePlace(lastId));
  //         }
  //       }
  //     }
  //     window.addEventListener('scroll', onScroll);
  //     return () => {
  //       window.removeEventListener('scroll', onScroll);
  //     };
  //   }, [
  //     hasMoreLikePlace,
  //     loadInfinityPostsLikePlaceLoading,
  //     InfinityPostsLikePlace,
  //   ]);
  // }

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
          {InfinityPosts?.map((v, i) => (
            <CurationCard
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.curationSeq}
              thumnail={v.thumnail}
              title={v.title}
            />
          ))}
        </Box>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
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
          {InfinityPosts?.map((v, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <CurationCard key={i + v.myNadlecourseId} imgUrl={v.imgUrl} />
          ))}
        </Box>
      </TabPanel> */}
      <TabPanel value={value} index={2}>
        <Stack spacing={2} direction="row-reverse">
          <GreenBtn variant="contained">나만의 코스 만들기</GreenBtn>
        </Stack>
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
