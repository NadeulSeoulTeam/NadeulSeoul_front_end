import styled from 'styled-components';

const FollowBtn = styled.button`
  border-radius: 30px;
  padding: 5px 10px;
  border: 2px solid #0de073;
  margin: 42px 0 0 10px;
  font-family: 'Suit';
  font-weight: bold;
  ${({ isFollowing }) => {
    return isFollowing
      ? `{background-color: #0de073; color: white;}`
      : `{background-color: white; color: #0de073;}`;
  }}
`;

export default FollowBtn;
