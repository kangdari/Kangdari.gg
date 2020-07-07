import React, { useState } from "react";
import styled from "styled-components";

import ToolTip from "../../../components/ToolTip";

import { getChampionInfo } from "../../../common/championUtil";
import { getItemName } from "../../../common/itemUtils";
import { cloud_front } from "../../../common/config";

// props로 star, champion, items 전달 받기
const Unit = ({ unit }) => {
  const [visible, setVisible] = useState(false);

  const onToggle = () => {
    setVisible(!visible);
  };
  // items 아이템 배열, rarity(0~4) => 가격, tier 몇 성?
  const { character_id, items, rarity, tier } = unit;
  // 챔피언 한글 이름 가져오기
  const { kr_name, img_name } = getChampionInfo(character_id);

  return (
    <UnitContainer className="unit" rarity={rarity}>
      {/* 몇 성? */}
      <img src={`${cloud_front}/star/cost${rarity + 1}_stars${tier}.png`} alt="star" />
      {/* props 값으로 코스트 전달하여 테두리색 변경 */}
      <div className="champion" onMouseEnter={onToggle} onMouseLeave={onToggle}>
        <img src={`${cloud_front}/champion/${img_name}.png`} alt="champion_img" />
        {visible ? <ToolTip content={kr_name} position="top" /> : " "}
      </div>
      {/* items 배열로 출력 */}
      <div className="items">
        {items.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </div>
    </UnitContainer>
  );
};

const Item = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const kr_item_name = getItemName(item);

  const onToggle = () => {
    setVisible(!visible);
  };

  // 999는 두개의 별 모드에서 제한된 아이템을 의미
  if (item === 999) {
    return null;
  } else {
    return (
      <div style={{ position: "relative" }} onMouseEnter={onToggle} onMouseLeave={onToggle}>
        <img src={`${cloud_front}/items/${item}.png`} alt={item} />
        {visible ? <ToolTip content={kr_item_name} position="bottom" /> : " "}
      </div>
    );
  }
};

// 사용된 units 배열 전달 받기
const Units = ({ units }) => {
  return (
    <UnitsContainer>
      {units.map((unit, i) => (
        <Unit key={i} unit={unit} />
      ))}
    </UnitsContainer>
  );
};

export default Units;

const UnitsContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 0 0 0 40px;

  @media (min-width: 992px) {
    /* 고정 width 값 설정 */
    min-width: 475px;
    margin: 0;
  }
`;

const UnitContainer = styled.div`
  width: 34px;
  margin-right: 5px;

  @media (min-width: 992px) {
    width: 38px;
  }

  .champion {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 34px;
    /* rarity(cost)에 따라 테두리 색상 결정 */
    border: 2px solid ${(props) => props.theme.costColr[props.rarity]};
    border-radius: 4px;

    img {
      width: 100%;
    }

    @media (min-width: 992px) {
      height: 38px;
    }
  }

  .items {
    display: flex;
    justify-content: center;
    min-width: 34px;

    img {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 1.2px;
    }

    @media (min-width: 992px) {
      min-width: 38px;
      img {
        width: 11px;
        height: 11px;
      }
    }
  }
`;
