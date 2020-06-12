import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Pagination = ({ tier, postsPerPage, totalSummonerCount, paginate }) => {
  // 페이지 번호 배열
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalSummonerCount / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumber.map((pageNum) => (
        <li key={pageNum}>
          <NavItem
            to={`/ranking?tier=${tier}&page=${pageNum}`}
            onClick={() => {
              paginate(pageNum);
            }}
          >
            {pageNum}
          </NavItem>
        </li>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.ul`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled(NavLink)`
  /* width: 100%; */
  padding: 0.5em 0.7em;
  border: 0.5px solid lightgrey;
  background: #fff;

  &:hover {
    text-decoration: none;
    font-weight: 800;
    color: #333;
    background: lightgrey;
  }
`;
