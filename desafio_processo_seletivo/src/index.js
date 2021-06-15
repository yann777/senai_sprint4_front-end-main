import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './Pages/Home/App';
import tiposRepositorios from './Pages/Home/Repositorios/tiposRepositorios';
import reportWebVitals from './reportWebVitals';

const routing = (
 <Router> 
 <div>
   <Switch>
     <Route exact path="/" component={App} /> {/* Home*/}
     <Route path="/tiporepositorio" component={tiposRepositorios} /> {/* Repository*/}
   </Switch>
 </div>
 </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
