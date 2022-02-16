import styled from 'styled-components';

const FollowBtn = styled.button`
  border-radius: 30px;
  padding: 5px 1rem;
  border: 2px solid #0de073;
  font-family: 'Suit';
  font-weight: bold;
  cursor: pointer;
  ${({ isFollowing }) => {
    return isFollowing
      ? `{background-color: #0de073; color: white;}`
      : `{background-color: white; color: #0de073;}`;
  }}
`;

export default FollowBtn;
