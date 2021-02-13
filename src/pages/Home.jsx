import React from 'react'
import styled from 'styled-components';

const HomeWrapper = styled.section`
`

const Home = () => {
  return (
    <HomeWrapper>
      <header>
        <h1>친구</h1>
        <div>
          <span>검색</span>
          <span>친구추가</span>
        </div>
      </header>

      <div>
        내 프로필 구역
      </div>

      <section>
        <h2>친구</h2>
        <ul>
        <li>리스트</li>
        </ul>
      </section>
    </HomeWrapper>
  )
}

export default Home
