import React from 'react'
import styled from 'styled-components';

import MainHeader from '../components/MainHeader';
import ProfileList from '../components/ProfileList';

const HomeWrapper = styled.section`
`

const HEADER_TITLE = "친구";
const MODE_ME = 1;
const MODE_FRIEND = 2;

const Home = () => {
  return (
    <HomeWrapper>
      <MainHeader title={HEADER_TITLE}/>
      <ProfileList mode={MODE_ME}/>
      <ProfileList mode={MODE_FRIEND}/>
    </HomeWrapper>
  )
}

export default Home
