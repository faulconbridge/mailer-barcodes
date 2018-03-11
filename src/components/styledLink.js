import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  &:focus, &:hover {
    color: #ccc;
  }
`;

export default (props) => <StyledLink {...props} />;
