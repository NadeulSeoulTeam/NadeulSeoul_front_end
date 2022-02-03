import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../TabPanel';

// component
import CurationCard from '../../Card/CurationCard';
import BoardList from '../../Board/BoardList';

function a11yProps(idx) {
  return {
    id: `simple-tab-${idx}`,
    'aria-controls': `simple-tabpanel-${idx}`,
  };
}

function BasicTabs() {
  const { userInfo } = useSelector((state) => state.mypage);
  const params = useParams();
  const mypage = userInfo.filter((v) => {
    return v.id === parseInt(params.id, 10);
  })[0];
  const myNadlecourseInfo = mypage.myNadlecourse;
  const likePlaceInfo = mypage.likePlace;
  const likeNadlecourseInfo = mypage.likeNadlecourse;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isMyprofile, setIsMyprofile] = useState(true);
  const boardHandler = () => {
    const me = userInfo[0].id; // 현재 meanstrike 로그인 했다고 가정
    const Userid = parseInt(params.id, 10);
    if (me === Userid) {
      setIsMyprofile(true);
    } else {
      setIsMyprofile(false);
    }
  };
  useEffect(() => {
    boardHandler();
  }, []);
  console.log(isMyprofile);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="내 나들코스" {...a11yProps(0)} />
          <Tab label="찜한 나들 코스" {...a11yProps(1)} />
          <Tab label="찜한 장소" {...a11yProps(2)} />
          {isMyprofile && <Tab label="문의게시판" {...a11yProps(3)} />}
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
          {myNadlecourseInfo.map((v, i) => (
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
          {likeNadlecourseInfo.map((v, i) => (
            <CurationCard
              // eslint-disable-next-line react/no-array-index-key
              key={i + v.likeNadlecourseId}
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
          {likePlaceInfo.map((v, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <CurationCard key={i + v.likePlaceId} imgUrl={v.imgUrl} />
          ))}
        </Box>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <BoardList />
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
