import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Modal from 'components/Modal';


const Bar = styled.div`
  background-color: #46ACC2;
  display: flex;
  padding: 16px;
  font-family: sans-serif;
  color: white;
  justify-content: space-between;
`

const BarTitle = styled.div`
  font-weight: bold;
  font-size: 1.6em;
`

const PostButton = styled(Button)`
  background: 'white';
  color: #46ACC2;
  font-size: 1em;
  font-weight: bold;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
  float: right;
  margin-right: 1em;
`

class Navbar extends Component {

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Bar>
        <BarTitle>
          My Diary
        </BarTitle>
        <PostButton onClick={this.showModal}>
          Publish
        </PostButton>
        <Modal show={this.state.show} handleClose={this.hideModal}/>
      </Bar>
    );
  }
}
export default Navbar;
