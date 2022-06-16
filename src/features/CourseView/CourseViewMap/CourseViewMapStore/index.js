import React from 'react';
import Slide from '@mui/material/Slide';
import {
  Cart,
  DetailCard,
  CloseBtn,
  BtnExplain,
  StarBtn,
  CardHeader,
  CardScript,
} from './styles';

function CourseViewMapStore({
  likeStoreClicked,
  userClickHeart,
  setClickMarkerInfo,
  info,
}) {
  return (
    <div>
      <Slide
        direction="left"
        in={info !== undefined}
        mountOnEnter
        unmountOnExit
      >
        <Cart>
          <DetailCard className="store_cart" sx={{ minWidth: 275 }}>
            {/* <CardActions>
        </CardActions> */}
            <CloseBtn onClick={() => setClickMarkerInfo(undefined)} />
            <BtnExplain>눌러서 찜하기</BtnExplain>
            <StarBtn
              active={!!likeStoreClicked}
              type="submit"
              onClick={userClickHeart}
            >
              💚
            </StarBtn>
            <div style={{ padding: '1.5rem 1.5rem 3rem 1.5rem' }}>
              <CardHeader>{info.storeName}</CardHeader>
              <CardScript>{info.addressName}</CardScript>
              <CardScript>{info.categoryName}</CardScript>
            </div>
          </DetailCard>
        </Cart>
      </Slide>
    </div>
  );
}
export default CourseViewMapStore;
