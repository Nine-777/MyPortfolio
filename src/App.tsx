import React from 'react';
import Header from './components/layout/Header';
import styled, { createGlobalStyle } from 'styled-components';
import Title from './components/layout/Title';

const Body = createGlobalStyle`
  body {
    background-color: #ecece7;
  }
`

function App() {
  return (
    <>
      <Body />
      <Header />
      <Title />
    </>
  );
}

export default App;