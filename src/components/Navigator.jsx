import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsPersonFill, BsChatFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import useReactRouter from 'use-react-router';

const Nav = styled.div`
  min-width: 80px;
  height: 100vh;
  padding: 50px 0;
  background-color: #f7f4f4;
  display: flex;
`

const NavIconWrapper = styled.div`
  width: 100%;
  height: 150px;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const IconPerson = styled(BsPersonFill)`
  font-size: 35px;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #4a4a4a;
  }
`

const IconChat = styled(BsChatFill)`
  font-size: 25px;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #4a4a4a;
  }
`

const IconMore = styled(FiMoreHorizontal)`
  font-size: 30px;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #4a4a4a;
  }
`

const Navigator = () => {
  const { location, history } = useReactRouter();
  const [currPathName, setCurrPathName] = useState("");


  useEffect(()=> {
    const _currPathName = location.pathname.split('/')[1];

    setCurrPathName(_currPathName);
  }, [location])

  const onClickNavUserButton = () => {
    history.push('/');
  }
  const onClickNavChatButton = () => {
    history.push('/chatting');
  }
  const onClickNavMoreButton = () => {
    history.push('/more');
  }

  return (
    <Nav>
      <NavIconWrapper >
        <IconPerson onClick={onClickNavUserButton} style={currPathName === "" ? {color: "initial"} : null}/>
        <IconChat onClick={onClickNavChatButton} style={currPathName === "chatting" ? {color: "initial"} : null}/>
        <IconMore onClick={onClickNavMoreButton} style={currPathName === "more" ? {color: "initial"} : null}/>
      </NavIconWrapper>
    </Nav>
  )
}

export default Navigator;
