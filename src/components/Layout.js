import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Post from './Post';
import Form from 'components/Article/Form';
import AddPost from 'components/AddPost';
import NewPost from 'components/NewPost';
import Header from './Header';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Navbar from 'components/Navbar';
import Calendar from 'react-calendar/dist/entry.nostyle';
import LoadMap from 'components/LoadMap';
import styled from 'styled-components';
import './Calendar.css';




const Info = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
`;

class Layout extends Component {


  constructor(props){
    super(props);

    this.state = {
      show: false,
    };
  }



  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Info>
            <Calendar
              calendarType='US'
            />
            <LoadMap/>
          </Info>
          <NewPost/>
          <Switch>
            <Route exact path='/' />
            <Route path='/posts/write'>글쓰기</Route>
            <Route path='/posts/' />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default Layout;
