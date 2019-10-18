import './App.css';

import * as React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Header from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Container maxWidth="lg">
          test
          <Button variant="contained" color="primary" >test</Button>
        </Container>
        </div>
    );
  }
}

export default App;
