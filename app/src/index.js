import React from 'react';
import ReactDOM from 'react-dom/client';
import Project from './project/project'
import Bar from './bar/bar'
import config from './user/config.json';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="stm-app">
    <Project config={config.pages[0].modules}/>
    <div className='stm-app__bar'>
      <Bar config={config}/>
    </div>
  </div>
);