import React from 'react';
import Navigator from './components/Navigator';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Chatting from './pages/Chatting';
import More from './pages/More';

const Container = styled.div`
  display: flex;
`

const Main = styled.main`
  width: 100%;
  padding: 50px 20px;
`

const App = () => {
  return (
    <Container>
      <Navigator />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chatting" component={Chatting} />
          <Route path="/more" component={More} />
        </Switch>
      </Main>
      

    </Container>
  );
}

export default App;
