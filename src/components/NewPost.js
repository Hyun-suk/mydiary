import React, { Component } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';


const Title = styled.textarea`
  background-color: white;
  border: 5px solid transparent;
  width: 100%;
  display: flex;
  padding: 16px;
  font-weight: bold;
  font-family: Sans-serif;
  font-size: 30px;
  color: black;
  resize: none;
  outline-color: transparent;
  outline-style: none;
  caret-color: gray;
`

const Text = styled(TextareaAutosize)`
  width: 100%;
  padding: 16px;
  overflow: visible;
  background-color: #fff;
  color: #222;
  font-family: Sans-Serif;
  font-weight: normal;
  font-size: 20px;
  resize: none;
  line-height: 36px;
  padding-top: 16px;
  border-top: 1px solid #FFF;
  border-bottom:1px solid #FFF;
  caret-color: gray;
  outline-color: transparent;

`

class NewPost extends Component {


  render() {
    return (
      <div>
        <Title placeholder='Title' rows='1'/>
        <Text placeholder='Tell your story...'/>
      </div>
    );
  }
}
export default NewPost;
