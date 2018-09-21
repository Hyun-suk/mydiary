import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  color: black;
  position: fixed;
  background: transparent;
  width: 90%;
  height: auto;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Note = styled.textarea`
  width: 85%;
  height: 500px;
  overflow-y: scroll;
  background-color: #fff;
  color: #222;
  font-family: Sans-Serif;
  font-weight: normal;
  font-size: 20px;
  resize: none;
	line-height: 36px;
	padding-left: 50px;
	padding-right: 50px;
	padding-top:45px;
	padding-bottom:34px;
	background-image: url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
	background-repeat: repeat;
	-webkit-border-radius:12px;
  border: 5px solid transparent;
	border-radius:12px;
	-webkit-box-shadow: 0px 2px 14px #000;
	box-shadow: 0px 2px 14px #000;
	border-top:1px solid #FFF;
	border-bottom:1px solid #FFF;
`


// const Note = styled.textarea`
//   width: 500px;
//
//   overflow-y: scroll;
//   background-color: #fff;
//   color: #222;
//   font-family: Courier, monospace;
//   font-weight: normal;
//   font-size: 24px;
//   resize:none;
// 	line-height:40px;
// 	padding-left:100px;
// 	padding-right:100px;
// 	padding-top:45px;
// 	padding-bottom:34px;
// 	background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
// 	background-repeat:repeat-y, repeat;
// 	-webkit-border-radius:12px;
//   border: 5px solid transparent;
// 	border-radius:12px;
// 	-webkit-box-shadow: 0px 2px 14px #000;
// 	box-shadow: 0px 2px 14px #000;
// 	border-top:1px solid #FFF;
// 	border-bottom:1px solid #FFF;
// `


const Window = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;
`

const Nowindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: none;
`

const Modal = ({ handleClose, show, children }) => {
  return (
    show ?
      <Window>
        <Main>
          <Note/>
          <button onClick={handleClose}>close</button>
        </Main>
      </Window>
    : <Nowindow/>
  )
}

export default Modal;
