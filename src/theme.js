const colorPalettes = {
  white: "#ffffff",
  black: "#000000",
  grey: {
    one: "#333333",
    two: "#666666",
    three: "#999999",
    four: "#cccccc",
    five: "#eeeeee",
    six: "#fafafa",
  },
  clearfix: `:after {
    clear: both;
    content: '';
    display: block;
  }`,
  merchant: {
    primary: {
      one: "rgba(147, 201, 26, 1)", // #93C924
      two: "rgba(233, 244, 211, 1)", // #E9F4D3
    },
    secondary: {
      one: "rgba(201, 36, 72, 1)", // #C92448
      two: "rgba(249, 233, 236, 1)", // #F9E9EC
    },
  },
  customer: {
    primary: {
      one: "rgba(255, 118, 130, 1)", // #FF7682
      two: "rgba(242, 122, 122, 1)", // f27a7a
    },
    secondary: {
      one: "rgba(255, 228, 230, 1)", // #FFE4E6
      two: "rgba(242, 216, 218, 1)", // #f2d8da
    },
  },
};

export const merchantTheme = {
  gutter: 24,
  button: {
    bgColor: {
      primary: colorPalettes.merchant.primary.one,
      secondary: colorPalettes.merchant.secondary.one,
      primaryDisabled: colorPalettes.merchant.primary.two,
    },
    textColor: {
      primary: colorPalettes.merchant.primary.two,
      secondary: colorPalettes.merchant.secondary.two,
    },
  },
  mobile: {
    gutter: 32,
  },
};

export const customerTheme = {
  gutter: 24,
  button: {
    bgColor: {
      primary: colorPalettes.customer.primary.one,
      secondary: colorPalettes.customer.secondary.one,
      primaryDisabled: colorPalettes.customer.primary.two,
    },
    textColor: {
      primary: colorPalettes.grey.two,
      secondary: colorPalettes.grey.two,
    },
  },
  mobile: {
    gutter: 32,
  },
};
