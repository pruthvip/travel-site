import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled, { css } from 'styled-components';
import Container from '../Container';

const Sitebranding = styled.div`
  padding: 35px 0;
  float: left;
  max-width: 40%;
  font-size: 2.5rem;
  font-weight: 600
  color: #191919;
  font-weight: 600;
`;

const LinkWrapper = styled.div`
  float: right;
  color: #191919;
  display: flex;
  font-weight: 600;
  flex-direction: row;
`;

const LinkItem = styled.div`
    margin-left: 30px;
    padding: 35px 0;
    border-top: 5px solid transparent;
    ${props =>
    props.selected &&
    css`
      border-top: 5px solid #FAC94D;
    `};
`;


const sideLinks = [
    {
        id: 'home',
        text: 'Home',
        selected: true
    },
    {
        id: 'blog',
        text: 'Blog',
        selected: false
    },
]

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
    <div>
        <Container>
          <Sitebranding>
              Ghoom
          </Sitebranding>
          <LinkWrapper>
            {
                sideLinks.map(sl => <LinkItem selected = {sl.selected} key = {sl.id}>{sl.text}</LinkItem>)
            }
          </LinkWrapper>
        </Container>
    </div>
    );
  }
}

export default Header;
