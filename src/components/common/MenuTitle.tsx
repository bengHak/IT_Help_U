import React from 'react';

import styled from 'styled-components';
import useMenus from '../../hooks/useMenus';
import MenuButton from './MenuButton';

const StyleMenu = styled.div`


  display: flex;
  margin-bottom: 20px;
  margin-top: 81px;
  justify-content: space-between;

  h1 {
    display: flex;
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 767px) {
      margin: 0 auto;
    }
  }
  .menu-title-btns {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

type MenuTitleType = {
  condition: string
}




function MenuTitle({ condition }: MenuTitleType) {
  const menus = useMenus();
  const selectedCondition = menus.findIndex(menu => menu.condition === condition);
  return (
    <StyleMenu>
      <h1>
        {menus[selectedCondition].name}
      </h1>
      <div className="menu-title-btns">
        {menus[selectedCondition].funcBtn ?
          <MenuButton routing={menus[selectedCondition].routing} condition={condition} btnName={menus[selectedCondition].funcBtnName} />
          : <></>}
        {menus[selectedCondition].toggleBtn ?
          <MenuButton condition={condition} btnName={menus[selectedCondition].toggleBtnName} />
          : <></>}
      </div>

    </StyleMenu>


  )
}

export default MenuTitle;
