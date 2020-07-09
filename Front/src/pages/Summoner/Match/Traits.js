import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ToolTip from "../../../components/ToolTip";

import { getTrait } from "../../../common/tratisUtil";

const TraitItem = ({ trait }) => {
  const [visible, setVisible] = useState(false);
  const [traitInfo, setTraitInfo] = useState([]);

  const onToggle = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    // style: 시너지 단계, name: 시너지 이름, num_units: 유닛 갯수
    // style: 1 ~ 4 ( bronze, silver, gold, gold)
    const { style, name, num_units } = trait;
    // name값으로 한글 이름, 설명 찾기
    const { trait_name, trait_description } = getTrait(name);
    setTraitInfo({
      trait_name,
      trait_description,
      style,
      num_units,
      name: name.toLowerCase().replace(/set3_/, ""),
    });
  }, [trait]);

  const url = `http://d287nhi7bqyj2m.cloudfront.net/traits/${traitInfo.name}.png`;

  return (
    // style: 시너지 단계
    <TraitBox style={traitInfo.style} onMouseEnter={onToggle} onMouseLeave={onToggle}>
      <img src={url} alt={traitInfo.trait_name} />
      {visible ? (
        <ToolTip content={traitInfo.num_units + " " + traitInfo.trait_name} position="top" />
      ) : (
        " "
      )}
    </TraitBox>
  );
};

const Traits = ({ traits }) => {
  // 시너지가 존재하는 경우만 필터하고 시너지 단계가 높은 순으로 정렬
  traits = traits.filter((trait) => trait.tier_current >= 1);
  traits.sort((a, b) => b.style - a.style);

  return (
    <TraitsContainer>
      {/* 시너지 반복 출력 */}
      {traits.map((trait, i) => (
        <TraitItem trait={trait} key={i} />
      ))}
    </TraitsContainer>
  );
};

export default Traits;

const TraitsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 33px;
  margin: 0 0 0 43px;

  @media (min-width: 992px) {
    width: 220px;
    /* height: 65px; */
    margin: 0 20px 0 0;
    flex-wrap: wrap;
  }
`;

const TraitBox = styled.div`
  margin: 5px 3px 5px 0;
  width: 24px;
  height: 14px;
  /* background: #ffb93b; */
  background: ${(props) => props.theme.traitsColor[props.style - 1]};
  position: relative;
  display: flex;
  justify-content: center;

  /* bronze, gold, silver , chromatic */
  &:before {
    content: "";
    position: absolute;
    top: -6px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 6px solid ${(props) => props.theme.traitsColor[props.style - 1]};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 6px solid ${(props) => props.theme.traitsColor[props.style - 1]};
  }

  img {
    width: 18px;
    top: -1px;
    /* png 파일 색상을 white로 변경 */
    filter: brightness(0) invert(1);
    -webkit-filter: brightness(0) invert(1);
    position: absolute;
  }
`;
