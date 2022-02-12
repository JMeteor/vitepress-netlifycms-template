module.exports = {
  title: "VitePress + NetlifyCMS",
  description:
    "Just playing around but seriously this is the best template ever",
  head: [
    ['script', { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}]
  ],
  themeConfig: {
    repo: 'JMeteor/vitepress-netlifycms-template',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    // Type is `DefaultTheme.Config`
  },
};
