import styled, { css } from "styled-components";
import { media } from "./breakpoint";
import { fadeIn, fadeInPulse, slideLeft } from "./keyframes";

const Button = styled.button`
  cursor: pointer;
  border: none;
  position: relative;
  outline: 0;
  font-size: 16px;
  padding: 1em;
  margin: 0.25em;
  background: #000;
  color: #fff;
  border-radius: 1em;
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.button.bgColor.primary};
      color: ${props => props.theme.button.textColor.primary};
      &:disabled {
        background: ${props => props.theme.button.bgColor.primaryDisabled};
        color: #000;
      }
    `};

  ${props =>
    props.fadeIn &&
    css`
      animation: ${fadeIn} 2s ease-out;
    `}

  ${props =>
    props.fadeInPulse &&
    css`
      animation: ${fadeInPulse} 2s ease-out;
    `}

  ${props =>
    props.slideLeft &&
    css`
      animation: ${fadeInPulse} 2s ease-out;
    `}

  ${props =>
    props.secondary &&
    css`
      background: ${props => props.theme.button.bgColor.secondary};
      color: ${props => props.theme.button.textColor.secondary};
    `};

  ${media.tablet`
      width: 50%;
      padding: 0.5em;
    `};

  ${media.tablet`
      width: 100%;
      padding: 0.25em;
    `};
`;

export default Button;
