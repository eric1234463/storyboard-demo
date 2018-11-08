import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context("../stories", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  source: true,
});

configure(loadStories, module);
