import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPersonPlus } from 'react-icons/bs';
import { RiWechatLine } from 'react-icons/ri';

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`

const IconWrap = styled.div`
  min-width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 30px;
  color: #6d6d6d;
`

const AddFriendIcon = styled(BsPersonPlus)`
  font-size: 30px;
  color: #6d6d6d;
` 

const OpenChatIcon = styled(RiWechatLine)`
  font-size: 30px;
  color: #6d6d6d;
`

const MainHeader = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <IconWrap>
        {title === "친구" ?
          <>
          <SearchIcon />
          <AddFriendIcon />
          </>
        :
          <>
          <SearchIcon />
          <OpenChatIcon />
          </>
        }
      </IconWrap>
    </Header>
  )
}

export default MainHeader;