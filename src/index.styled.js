import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const baseTheme = {
  colors: {
    background: "rgba(179, 179, 179, 0.2)",
    footer: "#CBC8C5",
    font: "#151515",
    font_pale: "rgba(21, 21, 21, 0.65)",
  },

  fonts: {
    main300: "'Inter', sans-serif; font-weight:300",
    main400: "'Inter', sans-serif; font-weight:400",
    main500: "'Inter', sans-serif; font-weight:500",
    main600: "'Inter', sans-serif; font-weight:600",
    main900: "'Inter', sans-serif; font-weight:900",
    header400: "'Oranienbaum', serif",
  },

  media: {
    extraLarge: "1640px",
    large: "960px",
    medium: "720px",
    small: "540px",
  },

  sizes: {
    header: { height: 85 },
    container: { width: 1640 },
    footer: { height: 175 },
    modal: { width: 540 },
  },

  durations: {
    ms100: 300,
  },

  order: {
    header: 50,
    modal: 100,
  },
};
export default createGlobalStyle`
  ::afterhtml {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    margin: 0;
    background-color: ${baseTheme.colors.background};
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,strong {
    font-weight: bolder;
  }
  code,kbd,samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,input,optgroup,select,textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,input {
    overflow: visible;
  }
  button,select {
    text-transform: none;
  }
  button,[type="button"],[type="reset"],[type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
  & ::-webkit-scrollbar {
   display:none ;
  }

  & ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
    background-color: ${baseTheme.colors.background};
    display:none ;
  }

  & ::-webkit-scrollbar-thumb {
    background:  ${baseTheme.colors.footer};
    display:none ;
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&family=Oranienbaum&display=swap');
  `;
export const Container = styled.div`
  margin: 0px auto;
`;
