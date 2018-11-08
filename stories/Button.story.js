import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import Button from "../src/Button";
import { merchantTheme, customerTheme } from "../src/theme";

storiesOf("Button", module)
  .add("Merchant Theme", () => (
    <ThemeProvider theme={merchantTheme}>
      <div>
        <Button primary>Primary Button</Button>
        <Button primary disabled>Primary Disabled Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button fadeIn>FadeIn Button</Button>
        <Button fadeInPulse>fadeInPulse Button</Button>
        <Button slideLeft>slideLeft Button</Button>
        <Button fadeIn primary>FadeIn Primary Button</Button>
        <Button fadeInPulse primary>fadeInPulse Primary Button</Button>
        <Button slideLeft primary>slideLeft Primary Button</Button>
      </div>
    </ThemeProvider>
  ))
  .add("Customer Theme", () => (
    <ThemeProvider theme={customerTheme}>
       <div>
        <Button primary>Primary Button</Button>
        <Button primary disabled>Primary Disabled Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button fadeIn>FadeIn Button</Button>
        <Button fadeInPulse>fadeInPulse Button</Button>
        <Button slideLeft>slideLeft Button</Button>
        <Button fadeIn primary>FadeIn Primary Button</Button>
        <Button fadeInPulse primary>fadeInPulse Primary Button</Button>
        <Button slideLeft primary>slideLeft Primary Button</Button>
      </div>
    </ThemeProvider>
  ));
