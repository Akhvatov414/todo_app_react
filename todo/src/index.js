import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/appHeader';
import AppInput from './components/appInput';
import AppList from './components/appList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHeader/>
    <AppInput/>
    <AppList/>
  </React.StrictMode>
);