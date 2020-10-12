import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchUsers} from '../../redux/actions/actions';
import UserForm from '../../components/UserForm/UserForm';
import Loader from '../../components/Loader/Loader'
import Header from '../../components/Header/Header';
import ErrorIndicator from '../../components/ErrorIndicator/ErrorIndicator';
// import {
//   UploadUsersBtn
// } from './styled';

const UsersList = ( ) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const error = useSelector(state => state.users.usersError);

  console.log(error);
  useEffect(() => {
    setIsLoading(true);

    dispatch(fetchUsers())
      .then(() => {
      setIsLoading(false);
    })
      .catch(e => {
        setIsLoading(false);
      });

  }, [dispatch]);

  if (isLoading) {
    return <Loader/>
    //return <UploadUsersBtn onClick={() => dispatch(fetchUsers())}>Upload Users</UploadUsersBtn>
  }

  return (
    <div>
      <Header title="Github Users List"/>
      {users && users.length && users.map(user => (
        <UserForm key={user.id} user={user} />
      ))
      }
      {(!users || !users.length) &&
        <ErrorIndicator error={error}/>
      }
    </div>
  );
};

export default UsersList;