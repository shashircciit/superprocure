import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement/UserManagement';
import Editprofilepage from '../src/pages/Editprofilepage';
import InsertUser from '../src/pages/UserManagement/InsertUser';
import Adminprofile from './pages/AdminProfilePage';
import AdminForgotPassword from './pages/AdminForgotPassword';





class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Route exact   path="/" component={Login}/>
          <Route exact  path="/dashboard" component={Dashboard}/>
          <Route exact  path="/user-list" component={UserManagement}/>
          <Route exact path="/newuser" component={InsertUser}/>
          <Route exact path="/adminprofile" component={Adminprofile}/>
        
        
        {/* <Route path="*" component={NoMatch}/> */}
        </div>
      </Router>
      </PersistGate>
   </Provider>
    );
  }
}

export default App;
