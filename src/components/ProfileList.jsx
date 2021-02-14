import React from 'react'
import styled from 'styled-components';

import { friendData } from '../data/localData.json';

const ListWrap = styled.ul`
  width: 100%;
  padding: ${props => props.mode === 1 ? "30px 0;" : "none;"}

  border-bottom: ${props => props.mode === 1 ? "1px solid #d6d6d6;" : "none;"}
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.mode === 1 ? "none" : "15px;"}
`

const IconWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ProduceWrap = styled.div`
  min-height: 35px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const ProfileImage = styled.img`
  width: ${props => props.mode === 1 ? "60px;" : "45px;"}
  height: ${props => props.mode === 1 ? "60px;" : "45px;"}
  border-radius: ${props => props.mode === 1 ? "25px;" : "18px;"}

`

const ProduceTitle = styled.h1`
  font-size: 14px;
  font-weight: 700;
`

const ProduceStatus = styled.p`
  font-size: 14px;
`

const Music = styled.p`
  padding: 5px;
  border: 1px solid green;
  border-radius: 20px;
  font-size: 11px;
`

const FriendCount = styled.li`
  color: #6d6d6d;
  font-size: 13px;
  padding: 15px 0;
`

const ProfileList = ({ mode }) => {
  return (
    <>
    <ListWrap mode={mode}>
      {mode === 2 && 
        <FriendCount>친구 {friendData.length}</FriendCount>
      }
      {mode === 1 ? 
      <ListItem mode={mode}>
        <IconWrap>
          <ProfileImage src="https://yt3.ggpht.com/ytc/AAUvwnjYLif-616oGITRhpwdUUa2HorbRzMtX_uGZU_X=s88-c-k-c0x00ffffff-no-rj" alt="" mode={mode}/>
          <ProduceWrap>
            <ProduceTitle>지우</ProduceTitle>
            <ProduceStatus>So as I Pray</ProduceStatus>
          </ProduceWrap>
        </IconWrap>
        <Music>고마워 고마워 - 라디(Ra.D)</Music>
      </ListItem>
      : 
      friendData.map((item, index) => {
        return (
          <ListItem key={item.id + index} mode={mode}>
            <IconWrap>
              <ProfileImage src={item.profile} alt="" mode={mode}/>
              <ProduceWrap>
                <ProduceTitle>{item.name}</ProduceTitle>
                <ProduceStatus>{item.status}</ProduceStatus>
              </ProduceWrap>
            </IconWrap>
            {item.music ?
            <Music>{item.music}</Music>
            :
            null}
          </ListItem>
        )
      
      })
      }
    </ListWrap>
    </>
  )
}

export default ProfileList;
