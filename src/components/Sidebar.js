import React, { Component } from 'react';
import {withRouter} from "react-router-dom";


class Sidebar extends Component {

  constructor(props) {
      super(props);
      this.state = {

      };
      this.changeRoute = this.changeRoute.bind(this);
  }

    changeRoute(page) {
           this.props.history.push(page);
    }


  render() {
    let path = this.props.location.pathname;
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className={path == '/dashboard' ? 'nav-item active' : 'nav-item'} onClick={this.changeRoute.bind(this,'/dashboard')}>
          <a className="nav-link">
            <i className="fa fa-bar-chart" aria-hidden="true" />
            <span className="menu-title">Dashboard</span>
          </a>
        </li>
        <li className={path == '/user-list' ? 'nav-item active' : 'nav-item'} onClick={this.changeRoute.bind(this,'/user-list')}>
          <a className="nav-link">
            <i className="fa fa-user-o" aria-hidden="true" />
            <span className="menu-title">User Management</span>
          </a>
        </li>
       </ul>
    </nav>
    );
  }
}

export default withRouter(Sidebar);
