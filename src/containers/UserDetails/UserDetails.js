import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector}  from 'react-redux';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {
  MdBusiness,
  MdLocationOn,
  MdLink,
  MdDateRange,
  MdEmail
} from 'react-icons/md';

import {fetchUsersDetails} from '../../redux/actions/actions';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';


const UserDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  let { name } = useParams();
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails.userDetail);

   console.log('userDetails', userDetails);
  // console.log('name', name);
  useEffect(() => {
    dispatch(fetchUsersDetails(name))
      .then(() => {
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
      });
  }, [dispatch, name]);

  if (isLoading) {
    return <Loader/>
  }


  return (
    <DetailUser>
      <Header title="User Info"/>
      <Wrapper>
        <header>
          <img src={userDetails.avatar_url} alt={userDetails.name} />
          <div>
            <h4>{userDetails.name}</h4>
            <p>Twitter : @{userDetails.twitter_username || userDetails.name}</p>
            <p>Followers : {userDetails.followers}</p>
            <p>Following : {userDetails.following}</p>
          </div>
          <a href={userDetails.html_url}>follow</a>
        </header>
        <p className='bio'>{userDetails.bio}</p>
        <div className='links'>
          <p>
            <MdBusiness/>{userDetails.company}
          </p>
          <p>
            <MdEmail/>{userDetails.email || (userDetails.name && `${userDetails.name.toLowerCase().trim().replace(/\s+/g, '')}@gmail.com`)}
          </p>
          <p>
            <MdLocationOn/> {userDetails.location || 'earth'}
          </p>
          <a href={`https://${userDetails.blog}`}>
            <MdLink/>
            {userDetails.blog}
          </a>
          <p>
            <MdDateRange/>{userDetails.created_at}
          </p>
        </div>
      </Wrapper>
    </DetailUser>
  );
};

const DetailUser = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.article`
  background: var(--clr-white);
  max-width: 700px;
  width: 100%;
  //background: #00000021;
  margin: 10px auto;
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    //content: 'user';
    position: absolute;
    top: 20px;
    left: 20px;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    width: 50%;
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;

export default UserDetails;