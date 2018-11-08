import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from "styled-components";
import Button from "../src/Button";
import { merchantTheme, customerTheme } from "../src/theme";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "Merchant Theme",
    withInfo("Example of how to use button")(() => (
      <ThemeProvider theme={merchantTheme}>
        <div>
          <Button primary>Primary Button</Button>
          <Button primary disabled>
            Primary Disabled Button
          </Button>
          <Button secondary>Secondary Button</Button>
          <Button fadeIn>FadeIn Button</Button>
          <Button fadeInPulse>fadeInPulse Button</Button>
          <Button slideLeft>slideLeft Button</Button>
          <Button fadeIn primary>
            FadeIn Primary Button
          </Button>
          <Button fadeInPulse primary>
            fadeInPulse Primary Button
          </Button>
          <Button slideLeft primary>
            slideLeft Primary Button
          </Button>
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    "Customer Theme",
    withInfo("Example of how to use button")(() => (
      <ThemeProvider theme={customerTheme}>
        <div>
          <Button primary>Primary Button</Button>
          <Button primary disabled>
            Primary Disabled Button
          </Button>
          <Button secondary>Secondary Button</Button>
          <Button fadeIn>FadeIn Button</Button>
          <Button fadeInPulse>fadeInPulse Button</Button>
          <Button slideLeft>slideLeft Button</Button>
          <Button fadeIn primary>
            FadeIn Primary Button
          </Button>
          <Button fadeInPulse primary>
            fadeInPulse Primary Button
          </Button>
          <Button slideLeft primary>
            slideLeft Primary Button
          </Button>
        </div>
      </ThemeProvider>
    )),
  );
