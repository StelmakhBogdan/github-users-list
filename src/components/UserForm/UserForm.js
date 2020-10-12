import React from 'react';
import { useHistory } from "react-router-dom";

import {
  Form,
  FormContent,
  Avatar,
  Info,
  UserLogin,
  UserLink,
  DetailBtn
} from './styled';




const UserForm = ({ ...props }) => {
  const { avatar_url, login, html_url } = props.user;
  let history = useHistory();

  const showDetails = () => {
    history.push(`/user/${login}`);
  };

  return (
    <Form>
      <FormContent>
        <Avatar src={avatar_url} alt="avatar"/>
        <Info>
          <UserLogin>{login}</UserLogin>
          <UserLink href={html_url}>{html_url}</UserLink>
          <DetailBtn onClick={showDetails}>Show user info</DetailBtn>
        </Info>
      </FormContent>
    </Form>
  );
};

export default UserForm;