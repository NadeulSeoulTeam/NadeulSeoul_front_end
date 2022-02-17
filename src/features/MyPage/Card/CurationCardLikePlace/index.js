/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// custom style
import {
  Wrapper,
  StoreName,
  Address,
  StoreInfo,
  BtnExplain,
  CartBtn,
} from './styles';

// actions
import { setMyCourse, deleteMyCourse } from '../../MyPageSlice';

function CurationCardLikePlace({
  storeName,
  addressName,
  categoryName,
  storeSeq,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const { myCourse } = useSelector((state) => state.mypage);

  // 정리 4 onClick 이벤트 분기 , 알고리즘
  const onClickCourseMakeUnderSix = () => {
    setIsClicked((prev) => !prev);
    if (isClicked === false) {
      dispatch(setMyCourse(storeSeq));
    } else {
      dispatch(deleteMyCourse(storeSeq));
    }
  };

  const onClickCourseMakeOverSix = () => {
    if (isClicked === false) {
      alert('7개 이상 담을 수 없습니다.');
    }
    setIsClicked(false);
    dispatch(deleteMyCourse(storeSeq));
  };

  return (
    <Wrapper
      elevation={1}
      // 여기서 상세 curation으로 onClick 매서드
    >
      <StoreName>{storeName}</StoreName>
      <Address>{addressName}</Address>
      <StoreInfo>{categoryName}</StoreInfo>
      <BtnExplain>눌러서 내 코스에 담기</BtnExplain>
      <CartBtn
        active={isClicked}
        onClick={
          myCourse.length > 5
            ? onClickCourseMakeOverSix
            : onClickCourseMakeUnderSix
        }
      >
        🛒
      </CartBtn>
    </Wrapper>
  );
}

export default CurationCardLikePlace;
