import theme from '@nuxt/content-theme-docs'
import interpolateSourceCode from './lib/interpolate-source-code'


export default theme({
  css: [
    'assets/css/main.css'
  ],
  docs: {
    primaryColor: '#E24F55'
  },
  hooks: {
    'content:file:beforeParse': interpolateSourceCode
  },
  // Trying ~/plugins/vue-json-tree-view.js resolves to /node_modules/@nuxt/content-theme-docs/src/plugins/vue-json-tree-view.js
  // plugins: [`${__dirname}/plugins/vue-json-tree-view.js`]
  // external link icon
  // https://github.com/nuxt/content/issues/398
  content: {
    markdown: {
      remarkExternalLinks: {
        content: {
          type: "element",
          tagName: "icon-external-link",
          properties: {
            className: ["w-4", "h-4", "ml-1", "-mt-1"],
          },
        },
        contentProperties: {
          className: ["inline-block", "align-middle", "text-gray-600", "dark:text-gray-400"],
        },
      },
    },
  },
})
