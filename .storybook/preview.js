/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      toc: true, // should be used as default
      /*  toc: {
        title: "Table of Contents",
        headingSelector: "h1, h2, h3",
        ignoreSelector: "#primary",
      },
 */
      /*toc: {
        ignoreSelector: "#primary",
        title: "Table of Contents",
         // when applied it it introspect the DOM and generate Stories / Story name 
         // see https://github.com/storybookjs/storybook/issues/23293#issuecomment-1628347740 for more details
        headingSelector: "h1, h2, h3",
      },*/
      /* toc: {
        title: "Table of Contents",
        headingSelector: "h1, h2, h3",
      // If React component, file needs to be renamed to .jsx for Vite to work and unable to get it to work
      /*  toc: {
        title: () => <p>Title written as a React element</p>,
      }, */
      // applies unsafeTocbotOptions to the the toc sidebar
      /* toc: {
        unsafeTocbotOptions: {
          // tocbot options
          headingSelector: "h1, h2, h3, h4, h5, h6",
          orderedList: false,
        },
      }, */
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
