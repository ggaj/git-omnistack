import styled from 'styled-components';

export const Container = styled.aside`
  background: #202225;
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Team = styled.button`
  border: 0;
  background: transparent;
  margin: 0 0 8px;

  img {
    transition: all 0.02s;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    transition: border 0.15s ease;

    &:hover {
      border-radius: 30%;
    }
  }
`;
