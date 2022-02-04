/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TabPanel from '../TabPanel';

// component
import CurationCard from '../../Card/CurationCard';
import BoardList from '../../Board/BoardList';

// mui tabs with react-router-dom
function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}
function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/mypage/1', '/mypage/2', '/mypage/3']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Inbox" value="/mypage/1" to="/mypage/1" component={Link} />
      <Tab label="Drafts" value="/mypage/1" to="/mypage/2" component={Link} />
      <Tab label="Trash" value="/mypage/1" to="/mypage/3" component={Link} />
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}

// mui basic tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
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

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Routes>
          <Route path="*" element={<CurrentRoute />} />
        </Routes>
        <MyTabs />
      </Box>

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
            {isMyprofile && <Tab label="문의 게시판" {...a11yProps(3)} />}
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
    </>
  );
}

export default BasicTabs;
