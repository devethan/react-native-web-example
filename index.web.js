import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <App />, // 여기 react-native에서 사용하는 루트 컴포넌트가 들어갑니다
);
