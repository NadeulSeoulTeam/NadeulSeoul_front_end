/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

// style
import Box from '@mui/material/Box';
import TabPanel from '../TabPanel';
import { Underline, GreyBox, CustomTabs, CustomTab, GreenBtn } from './styles';

// component
import MyNadlesComponent from './Tabs/MyNadlesComponent';
import LikeNadlesComponent from './Tabs/LikeNadlesComponent';
import LikePlacesComponent from './Tabs/LikePlacesComponent';

// actions
import { setLikePlaceBasket, getParamsId } from '../../MyPageSlice';

//
// mui basic tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const { myCourse } = useSelector((state) => state.mypage);
  const params = useParams();
  const myPageId = params.id;
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  useEffect(() => {
    dispatch(getParamsId(myPageId));
  }, []);

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
        <MyNadlesComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LikeNadlesComponent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <GreenBtn disabled={myCourse.length < 1} onClick={onClickSendCourse}>
            나만의 코스 만들기
          </GreenBtn>
        </div>
        <LikePlacesComponent />
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
