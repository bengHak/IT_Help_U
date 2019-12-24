import React from 'react';
import styled from 'styled-components';
import BoardList from './BoardList';
import MenuTitle from '../common/MenuTitle';
import Footer from '../common/Footer';
import Header from '../common/Header';


const PageViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0 auto;

  @media (min-width: 360px) {
    width: 100%
  }

  @media (min-width: 1024px) {
    width: 800px;
  }


`;

function Board() {
  return (
    <>
    <MenuTitle menuTitle="고민게시판" routingBtnName="새글 쓰기" routing="/board/write" />
      <BoardList />
    </>
  )
}

export default Board;
