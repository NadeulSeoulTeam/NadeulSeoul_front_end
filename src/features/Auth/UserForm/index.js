/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// actions
import { signup, checkNickname } from '../AuthSlice';

// authenticated
import { saveLoginSuccess } from '../../../common/api/JWT-Token';
// import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';

import {
  Container,
  MainTitle,
  SubTitle,
  InputLabel,
  InputLabelGreen,
  TextInput,
  GreenBtn,
  ArticleDiv,
  EmojiPicker,
  MiniBtn,
} from './styles';

function UserForm() {
  const dispatch = useDispatch();
  // states
  const [nickname, setNickname] = useState('');
  const [emoji, setEmoji] = useState('');
  // const [id, setId] = useState('');
  const [nicknameErr, setNicknameErr] = useState({
    validationStatus: '',
    errorMsg: '',
  });
  const [emojiErr, setEmojiErr] = useState({
    validationStatus: '',
    errorMsg: '',
  });

  const navigate = useNavigate();
  // useEffect(() => {
  //   const params = new URLSearchParams(document.location.search);
  //   const Id = params.get('id');
  //   setId(Id);
  // });

  const [isDuplicated, setIsDuplicated] = useState(false);
  const onNicknameChange = (e) => {
    const nicknameInput = e.currentTarget.value;

    if (nicknameInput === '') {
      setNicknameErr({
        validationStatus: 'ERROR_BLANK',
        errorMsg: '닉네임을 입력해주세요.',
      });
      setNickname(nicknameInput);
    } else if (nicknameInput.length > 12) {
      setNicknameErr({
        validationStatus: 'ERROR_LENGTH',
        errorMsg: '닉네임은 12자 이하로 입력해주세요.',
      });
    } else {
      setNicknameErr({
        validationStatus: 'SUCCESS',
        errorMsg: null,
      });
      setNickname(nicknameInput);
    }
    console.log(nicknameInput, nickname);
  };

  const onEmojiClick = (e) => {
    const emojiInput = e.native;
    if (emojiInput === '') {
      setEmojiErr({
        validationStatus: 'ERROR_BLANK',
        errorMsg: '이모지를 선택해주세요.',
      });
      setEmoji('');
    } else {
      setEmojiErr({
        validationStatus: 'SUCCESS',
        errorMsg: null,
      });
      setEmoji(emojiInput);
    }
  };

  const formInvalid = !(
    nicknameErr.validationStatus === 'SUCCESS' &&
    emojiErr.validationStatus === 'SUCCESS'
  );

  // 여기 아직 안 끝남!!! (테스트 해보고 병합)
  const data = {
    nickname,
    emoji,
  };

  const onInputSuccess = useCallback(() => {
    if (isDuplicated === false) {
      return alert('중복된 아이디 입니다.');
    }
    dispatch(signup(data))
      .then((response) => {
        saveLoginSuccess('false');
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [data]);

  const nickNamedata = {
    nickname,
  };

  // 정리3 usecallback과 onChange와의 관계
  const onClickNickNameCheck = useCallback(() => {
    dispatch(checkNickname(nickNamedata))
      .unwrap()
      .then((response) => {
        if (response.status === 200) {
          setIsDuplicated(true);
          alert(`${response.data.message}`);
        }
      })
      .catch((error) => {
        if (error.data.status === 'NICKNAME_DUPLICATION') {
          alert(`${error.data.message}`);
        }
      });
  }, [nickname]);

  return (
    <Container>
      <MainTitle>나들서울</MainTitle>
      <SubTitle>회원정보 수정</SubTitle>
      <ArticleDiv>
        <div style={{ margin: '10px 0' }}>
          <InputLabelGreen>*</InputLabelGreen>
          <InputLabel>닉네임</InputLabel>
        </div>
        <span style={{ position: 'relative' }}>
          <TextInput
            variant="outlined"
            value={nickname}
            onChange={onNicknameChange}
            error={!(nicknameErr.validationStatus === 'SUCCESS')}
            helperText={
              !(nicknameErr.validationStatus === 'SUCCESS')
                ? nicknameErr.errorMsg
                : ''
            }
            placeholder="닉네임을 입력해주세요."
          />
          <MiniBtn onClick={onClickNickNameCheck}>중복 검사</MiniBtn>
        </span>
      </ArticleDiv>
      <ArticleDiv>
        <div style={{ margin: '10px 0' }}>
          <InputLabelGreen>*</InputLabelGreen>
          <InputLabel>이모지</InputLabel>
        </div>
        <TextInput
          variant="outlined"
          disabled
          value={emoji}
          error={!(emojiErr.validationStatus === 'SUCCESS')}
          helperText={
            !(emoji.validationStatus === 'SUCCESS') ? emojiErr.errorMsg : ''
          }
          placeholder="아래에서 이모지를 골라주세요."
        />
      </ArticleDiv>
      <div>
        <EmojiPicker
          onSelect={(e) => {
            onEmojiClick(e);
          }}
          color="#0de073"
          title=""
          emoji="green_apple"
          style={{ fontFamily: 'Suit' }}
        />
      </div>
      <GreenBtn onClick={onInputSuccess} disabled={formInvalid}>
        이대로 계정 생성하기
      </GreenBtn>
    </Container>
  );
}

export default UserForm;
