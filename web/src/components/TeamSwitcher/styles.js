import styled from 'styled-components';
import { darken } from 'polished';

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

export const NewTeam = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0 8px;
  background: transparent;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    border: 1px dashed rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Logout = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px dashed #e04848;
  color: #e04848;
  background: transparent;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    border-color: ${darken(0.15, '#e04848')};
    color: ${darken(0.15, '#e04848')};
  }
`;
