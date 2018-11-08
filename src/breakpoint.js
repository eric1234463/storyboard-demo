import { css } from 'styled-components';

export const sizes = {
  // Extra large devices (large desktops, 1200px and up)
  largeDesktop: 1199,
  // Large devices (desktops, 992px and up)
  desktop: 991,
  // Medium devices (tablets, 768px and up)
  tablet: 767,
  // Small devices (landscape phones, 576px and up)
  phone: 575
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
