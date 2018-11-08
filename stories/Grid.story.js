import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { merchantTheme } from "../src/theme";
import { GridRow, GridColumn } from "../src/Grid";

const gridStyle = {
  background: "#dfdfdf",
  color: "#666",
  border: "1px solid #999",
  padding: "20px",
  fontFamily: "Arial",
  textAlign: "center",
};

storiesOf("Grid", module)
  .addDecorator(story => (
    <ThemeProvider theme={merchantTheme}>{story()}</ThemeProvider>
  ))
  .add(
    "default",
    withInfo("Example of how to use grid")(() => (
      <div>
        <GridRow>
          <GridColumn lg={12}>
            <div style={gridStyle}>12 Columns, 1176px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={6}>
            <div style={gridStyle}>6 Columns, 576px</div>
          </GridColumn>
          <GridColumn lg={6}>
            <div style={gridStyle}>6 Columns, 576px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={4}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
          <GridColumn lg={4}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
          <GridColumn lg={4}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={3}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
          <GridColumn lg={3}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
          <GridColumn lg={3}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
          <GridColumn lg={3}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={9}>
            <div style={gridStyle}>9 Columns, 876px</div>
          </GridColumn>
          <GridColumn lg={3}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={8}>
            <div style={gridStyle}>8 Columns, 776px</div>
          </GridColumn>
          <GridColumn lg={4}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={7} lgOffset={1}>
            <div style={gridStyle}>7 Columns, 1 offset column, 644px</div>
          </GridColumn>
          <GridColumn lg={2} lgOffset={2}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
        </GridRow>
      </div>
    )),
  )
  .add(
    "no gutter",
    withInfo("Example of how to use grid")(() => (
      <div>
        <GridRow>
          <GridColumn lg={12} disableGutter={true}>
            <div style={gridStyle}>12 Columns, 1176px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={6} disableGutter={true}>
            <div style={gridStyle}>6 Columns, 576px</div>
          </GridColumn>
          <GridColumn lg={6} disableGutter={true}>
            <div style={gridStyle}>6 Columns, 576px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={4} disableGutter={true}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
          <GridColumn lg={4} disableGutter={true}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
          <GridColumn lg={4} disableGutter={true}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={3} disableGutter={true}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
          <GridColumn lg={3} disableGutter={true}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
          <GridColumn lg={3} disableGutter={true}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
          <GridColumn lg={3} disableGutter={true}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={9} disableGutter={true}>
            <div style={gridStyle}>9 Columns, 876px</div>
          </GridColumn>
          <GridColumn lg={3} disableGutter={true}>
            <div style={gridStyle}>3 Columns, 276px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={8} disableGutter={true}>
            <div style={gridStyle}>8 Columns, 776px</div>
          </GridColumn>
          <GridColumn lg={4} disableGutter={true}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn lg={7} lgOffset={1} disableGutter={true}>
            <div style={gridStyle}>7 Columns, 1 offset column , 644px</div>
          </GridColumn>
          <GridColumn lg={4} disableGutter={true}>
            <div style={gridStyle}>4 Columns, 376px</div>
          </GridColumn>
        </GridRow>
      </div>
    )),
  );
