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
  loadPostsInfinityLikeNadle,
  loadPostsInfinityLikePlace,
  // loadPostsInfinityMyNadle,
  setLikePlaceBasket,
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
  const { LikeNadles, MyNadles, LikePlaces, myCourse } = useSelector(
    (state) => state.mypage
  );

  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickSendCourse = () => {
    const data = {
      storeSeqList: myCourse,
    };
    dispatch(setLikePlaceBasket(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // const [myNadlepage, setMyNadlepage] = useState(0);
  const [likeNadlepage, setLikeNadlepage] = useState(0);
  const [likePlacepage, setLikePlacepage] = useState(0);

  // useEffect(() => {
  //   const data = {
  //     myNadlepage,
  //     size: 10,
  //   };
  //   dispatch(loadPostsInfinityMyNadle(data))
  //     .unwrap()
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // }, [myNadlepage]);
  useEffect(() => {
    console.log(likeNadlepage);
    const data = {
      likeNadlepage,
      size: 10,
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
  useEffect(() => {
    const data = {
      likePlacepage,
      size: 10,
    };
    dispatch(loadPostsInfinityLikePlace(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [likePlacepage]);

  // function onScrollMyNadle() {
  //   // window.scrollY : 얼마나 내렸는지
  //   // document.documentElement.clientHeight : 화면에 보이는 길이
  //   // document.documentElement.scrollHeight : 총길이
  //   if (
  //     window.scrollY + document.documentElement.clientHeight >
  //     document.documentElement.scrollHeight - 950
  //   ) {
  //     setMyNadlepage(myNadlepage + 1);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', onScrollMyNadle);
  //   return () => {
  //     window.removeEventListener('scroll', onScrollMyNadle);
  //   };
  // }, [onScrollMyNadle]);

  function onScrollLikeNadle() {
    // window.scrollY : 얼마나 내렸는지
    // document.documentElement.clientHeight : 화면에 보이는 길이
    // document.documentElement.scrollHeight : 총길이
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 950
    ) {
      setLikeNadlepage(likeNadlepage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollLikeNadle);
    return () => {
      window.removeEventListener('scroll', onScrollLikeNadle);
    };
  }, [onScrollLikeNadle]);

  function onScrollLikePlace() {
    // window.scrollY : 얼마나 내렸는지
    // document.documentElement.clientHeight : 화면에 보이는 길이
    // document.documentElement.scrollHeight : 총길이
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 950
    ) {
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
          {MyNadles?.map((v, i) => (
            <CurationCard
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.curationSeq}
              thumnail={v.thumnail}
              title={v.title}
            />
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
          {LikeNadles?.map((v, i) => (
            <CurationCard
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.curationSeq}
              title={v.title}
              thumnail={v.thumnail}
            />
          ))}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack spacing={2} direction="row-reverse">
          <GreenBtn onClick={onClickSendCourse} variant="contained">
            나만의 코스 만들기
          </GreenBtn>
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
          {LikePlaces?.map((v, i) => (
            <CurationCardLikePlace
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.storeSeq}
              storeSeq={v.storeSeq}
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
