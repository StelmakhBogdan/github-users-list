import styled from 'styled-components';

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid gold;
  border-radius: 5px;
`;

export const Form = styled.div`
  max-width: 950px;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 10px;
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
`;

export const DetailBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: mediumseagreen;
  border: 1px solid mediumseagreen;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
   &:hover {
    background-color: green;
    color: white;
   }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 220px;
`;

export const UserLink = styled.a`
  color: lightskyblue;
`;

export const UserLogin = styled.span`
  font-size: 25px;
  font-weight: bold;
`;