import React from 'react'
import ReactDOM from 'react-dom'
import Application from './components/application.jsx';

//Third party libraries
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'font-awesome/css/font-awesome.css';

//Render app
ReactDOM.render(
    <Application />,
    document.getElementById('container')
)