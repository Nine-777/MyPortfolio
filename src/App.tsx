import React from 'react';
import Header from './components/layout/Header';
import styled, { createGlobalStyle } from 'styled-components';

const Main = createGlobalStyle`
  body {
    background-color: #ecece7;
  }
`

function App() {
  return (
    <>
      <Main />
      <Header />
    </>
  );
}

export default App;