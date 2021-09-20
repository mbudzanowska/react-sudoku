import styled, { css } from 'styled-components'
export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: bold;
    height: auto;
    justify-content: center;
    transistion: ${theme.transistion};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
