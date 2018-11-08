// @flow
import * as React from 'react';
import styled from 'styled-components';
import { media } from './breakpoint';

const calculateWidth = (colSpan: GridWidth | GridOffset) => colSpan / 12 * 100;
const calculateGutter = (gutterWidth: number) => gutterWidth / 2;

export const GridRow = styled.div`
  ${props => props.theme.clearfix};
`;

const GridColumnElement = styled.div`
  display: inline-block;
  vertical-align: top;
  float: left;
  box-sizing: border-box;
  padding: ${props => (props.disableGutter ? 0 : calculateGutter(props.theme.gutter))}px;
  width: ${props => calculateWidth(props.lg)}%;
  margin-left: ${props => calculateWidth(props.lgOffset)}%;

  ${media.desktop`
    padding: ${props => (props.disableGutter ? 0 : calculateGutter(props.theme.gutter))}px;
    width: ${props => calculateWidth(props.md)}%;
    margin-left: ${props => calculateWidth(props.mdOffset)}%;
  `};

  ${media.tablet`
    padding: ${props =>
      props.disableGutter
        ? 0
        : `${calculateGutter(props.theme.gutter / 2)}px ${calculateGutter(
            props.theme.mobile.gutter
          )}px`};  
    width: ${props => calculateWidth(props.sm)}%;
    margin-left: ${props => calculateWidth(props.smOffset)}%;
  `};

  ${media.phone`
    padding: ${props =>
      props.disableGutter
        ? 0
        : `${calculateGutter(props.theme.gutter / 2)}px ${calculateGutter(props.theme.gutter)}px`};
    width: ${props => calculateWidth(props.xs)}%;
    margin-left: ${props => calculateWidth(props.xsOffset)}%;
  `};
`;

export const GridColumn = (props: Props) => {
  return <GridColumnElement {...props} />;
};

GridColumn.defaultProps = {
  lg: 12,
  lgOffset: 0,
  md: 12,
  mdOffset: 0,
  sm: 12,
  smOffset: 0,
  xs: 12,
  xsOffset: 0,
  disableGutter: false
};
