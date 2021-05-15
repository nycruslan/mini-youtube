import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { CssBaseline, Container } from '@material-ui/core';

ReactDOM.render(
  <CssBaseline>
    <Container maxWidth='lg'>
      <App />
    </Container>
  </CssBaseline>,
  document.querySelector('#root')
);
