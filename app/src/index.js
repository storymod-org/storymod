import React from 'react';
import ReactDOM from 'react-dom/client';
import Project from './project/project'
import Bar from './bar/bar'
import config from './user/config.json';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="stm-app">
    <Project config={config}/>
    <Bar config={config}/>
  </div>
);